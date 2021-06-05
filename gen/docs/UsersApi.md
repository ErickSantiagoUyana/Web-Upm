# UsersApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersCget**](UsersApi.md#apiUsersCget) | **GET** /users | Retrieves the collection of User resources.
[**apiUsersCoptions**](UsersApi.md#apiUsersCoptions) | **OPTIONS** /users | Provides the list of HTTP supported methods.
[**apiUsersDelete**](UsersApi.md#apiUsersDelete) | **DELETE** /users/{userId} | Removes the User resource.
[**apiUsersGet**](UsersApi.md#apiUsersGet) | **GET** /users/{userId} | Retrieves a User resource based on a single ID.
[**apiUsersOptionsId**](UsersApi.md#apiUsersOptionsId) | **OPTIONS** /users/{userId} | Provides the list of HTTP supported methods.
[**apiUsersPost**](UsersApi.md#apiUsersPost) | **POST** /users | Creates a User resource.
[**apiUsersPut**](UsersApi.md#apiUsersPut) | **PUT** /users/{userId} | Updates the User resource.
[**tdwGetUserName**](UsersApi.md#tdwGetUserName) | **GET** /users/username/{username} | Determines if username exists


<a name="apiUsersCget"></a>
# **apiUsersCget**
> InlineResponse2001 apiUsersCget()

Retrieves the collection of User resources.

Returns all users from the system that the user has access to.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    UsersApi apiInstance = new UsersApi(defaultClient);
    try {
      InlineResponse2001 result = apiInstance.apiUsersCget();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersCget");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of users |  * ETag -  <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="apiUsersCoptions"></a>
# **apiUsersCoptions**
> apiUsersCoptions()

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    UsersApi apiInstance = new UsersApi(defaultClient);
    try {
      apiInstance.apiUsersCoptions();
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersCoptions");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | &#x60;Allow&#x60; header &amp;lt;Response body is empty&amp;gt; |  * Allow -  <br>  |

<a name="apiUsersDelete"></a>
# **apiUsersDelete**
> apiUsersDelete(userId)

Removes the User resource.

Deletes the user identified by &#x60;userId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    UsersApi apiInstance = new UsersApi(defaultClient);
    Integer userId = 56; // Integer | ID of user
    try {
      apiInstance.apiUsersDelete(userId);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersDelete");
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
 **userId** | **Integer**| ID of user |

### Return type

null (empty response body)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User deleted &amp;lt;Response body is empty&amp;gt; |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="apiUsersGet"></a>
# **apiUsersGet**
> User apiUsersGet(userId)

Retrieves a User resource based on a single ID.

Returns the user identified by &#x60;userId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    UsersApi apiInstance = new UsersApi(defaultClient);
    Integer userId = 56; // Integer | ID of user
    try {
      User result = apiInstance.apiUsersGet(userId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersGet");
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
 **userId** | **Integer**| ID of user |

### Return type

[**User**](User.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User |  * ETag -  <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="apiUsersOptionsId"></a>
# **apiUsersOptionsId**
> apiUsersOptionsId(userId)

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    UsersApi apiInstance = new UsersApi(defaultClient);
    Integer userId = 56; // Integer | ID of user
    try {
      apiInstance.apiUsersOptionsId(userId);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersOptionsId");
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
 **userId** | **Integer**| ID of user |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | &#x60;Allow&#x60; header &amp;lt;Response body is empty&amp;gt; |  * Allow -  <br>  |

<a name="apiUsersPost"></a>
# **apiUsersPost**
> User apiUsersPost(UNKNOWN_BASE_TYPE)

Creates a User resource.

Creates a new user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    UsersApi apiInstance = new UsersApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `User` data
    try {
      User result = apiInstance.apiUsersPost(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersPost");
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;User&#x60; data |

### Return type

[**User**](User.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | &#x60;Created&#x60;: user created |  * Location -  <br>  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**422** | &#x60;UNPROCESSABLE ENTITY&#x60;: Username, e-mail or password is left out |  -  |

<a name="apiUsersPut"></a>
# **apiUsersPut**
> User apiUsersPut(userId, ifMatch, UNKNOWN_BASE_TYPE)

Updates the User resource.

Updates the user identified by &#x60;userId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    UsersApi apiInstance = new UsersApi(defaultClient);
    Integer userId = 56; // Integer | ID of user
    String ifMatch = "ifMatch_example"; // String | ETag value of the resource you are trying to update
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `User` data
    try {
      User result = apiInstance.apiUsersPut(userId, ifMatch, UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#apiUsersPut");
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
 **userId** | **Integer**| ID of user |
 **ifMatch** | **String**| ETag value of the resource you are trying to update |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;User&#x60; data |

### Return type

[**User**](User.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: user previously existed and is now updated |  -  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**412** | &#x60;PRECONDITION FAILED&#x60;: one or more conditions given evaluated to false |  -  |

<a name="tdwGetUserName"></a>
# **tdwGetUserName**
> tdwGetUserName(username)

Determines if username exists

Returns status code 204 if &#x60;username&#x60; exists.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    UsersApi apiInstance = new UsersApi(defaultClient);
    String username = "username_example"; // String | User name
    try {
      apiInstance.tdwGetUserName(username);
    } catch (ApiException e) {
      System.err.println("Exception when calling UsersApi#tdwGetUserName");
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
 **username** | **String**| User name |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Username exists &amp;lt;Response body is empty&amp;gt; |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

