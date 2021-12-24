using System.Collections.Generic;
using System.Text;
using System.IO;
using Moq;
using NUnit.Framework;
using SpotifyAPI.Web.Http;
using System.Net.Http;
using System.Threading.Tasks;
using System.Linq;

namespace SpotifyAPI.Web.Tests
{
  public class NewtonsoftJSONSerializerTest
  {

    public static IEnumerable<object> DontSerializeTestSource
    {
      get
      {
        yield return new TestCaseData(null);
        yield return new TestCaseData("string");
        yield return new TestCaseData(new MemoryStream(Encoding.UTF8.GetBytes("string")));
        yield return new TestCaseData(new StringContent("string"));
      }
    }

    [TestCaseSource(nameof(DontSerializeTestSource))]
    public void SerializeRequest_SkipsAlreadySerialized(object input)
    {
      var serializer = new NewtonsoftJSONSerializer();
      var request = new Mock<IRequest>();
      request.SetupGet(r => r.Body).Returns(input);

      serializer.SerializeRequest(request.Object);

      Assert.AreEqual(input, request.Object.Body);
    }

    public static IEnumerable<object> SerializeTestSource
    {
      get
      {
        yield return new TestCaseData(new { Uppercase = true }, "{\"uppercase\":true}");
        yield return new TestCaseData(new { CamelCase = true }, "{\"camel_case\":true}");
        yield return new TestCaseData(new { CamelCase = true, UPPER = true }, "{\"camel_case\":true,\"upper\":true}");
      }
    }

    [TestCaseSource(nameof(SerializeTestSource))]
    public void SerializeRequest_CorrectNaming(object input, string result)
    {
      var serializer = new NewtonsoftJSONSerializer();
      var request = new Mock<IRequest>();
      request.SetupGet(r => r.Body).Returns(input);

      serializer.SerializeRequest(request.Object);

      request.VerifySet(r => r.Body = result);
    }

    [TestCase]
    public void DeserializeResponse_SkipsNonJson()
    {
      var serializer = new NewtonsoftJSONSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns("hello");
      response.SetupGet(r => r.ContentType).Returns("media/mp4");

      IAPIResponse<object> apiResonse = serializer.DeserializeResponse<object>(response.Object);
      Assert.AreEqual(apiResonse.Body, null);
      Assert.AreEqual(apiResonse.Response, response.Object);
    }

    [TestCase]
    public void DeserializeResponse_HandlesJson()
    {
      var serializer = new NewtonsoftJSONSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns("{\"hello_world\": false}");
      response.SetupGet(r => r.ContentType).Returns("application/json");

      IAPIResponse<TestResponseObject> apiResonse = serializer.DeserializeResponse<TestResponseObject>(response.Object);
      Assert.AreEqual(apiResonse.Body?.HelloWorld, false);
      Assert.AreEqual(apiResonse.Response, response.Object);
    }

    [TestCase]
    public async Task DeserializeResponse_TimeCurrentlyPlayingTestMessage()
    {
      var serializer = new NewtonsoftJSONSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns(ExampleResponses.CurrentlyPlayingContext);
      response.SetupGet(r => r.ContentType).Returns("application/json");

      var times = new List<long>();
      foreach (var iter in Enumerable.Range(0, 50))
      {
        var watch = System.Diagnostics.Stopwatch.StartNew();

        IAPIResponse<CurrentlyPlayingContext> apiResonse = serializer.DeserializeResponse<CurrentlyPlayingContext>(response.Object);

        watch.Stop();
        times.Add(watch.ElapsedMilliseconds);

        Assert.AreEqual(apiResonse.Response, response.Object);
      }

      var mean = times.Sum() / 50;

      using StreamWriter file = new("newtonsoft.json_test.txt", append: true);
      await file.WriteLineAsync($"CurrentlyPlayingContext: {mean}ms");

    }

    [TestCase]
    public async Task DeserializeResponse_TimeUserTestMessage()
    {
      var serializer = new NewtonsoftJSONSerializer();
      var response = new Mock<IResponse>();
      response.SetupGet(r => r.Body).Returns(ExampleResponses.PublicUser);
      response.SetupGet(r => r.ContentType).Returns("application/json");

      var times = new List<long>();
      foreach (var iter in Enumerable.Range(0, 50))
      {
        var watch = System.Diagnostics.Stopwatch.StartNew();

        IAPIResponse<PublicUser> apiResonse = serializer.DeserializeResponse<PublicUser>(response.Object);

        watch.Stop();
        times.Add(watch.ElapsedMilliseconds);

        Assert.AreEqual(apiResonse.Response, response.Object);
      }

      var mean = times.Sum() / 50;

      using StreamWriter file = new("newtonsoft.json_test.txt", append: true);
      await file.WriteLineAsync($"User: {mean}ms");

    }
  }
}
