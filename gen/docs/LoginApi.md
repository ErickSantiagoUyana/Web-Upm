# LoginApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**miwPostLogin**](LoginApi.md#miwPostLogin) | **POST** /access_token | Returns api token


<a name="miwPostLogin"></a>
# **miwPostLogin**
> InlineResponse200 miwPostLogin(UNKNOWN_BASE_TYPE)

Returns api token

Returns api authorization token (JWT).

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LoginApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    LoginApi apiInstance = new LoginApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | Registered **username** and **password**
    try {
      InlineResponse200 result = apiInstance.miwPostLogin(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LoginApi#miwPostLogin");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| Registered **username** and **password** |

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | _User access token_ |  * Authorization - Authorization header with access token <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |

