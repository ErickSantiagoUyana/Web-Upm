# ProductsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProductsCget**](ProductsApi.md#apiProductsCget) | **GET** /products | Retrieves the collection of Product resources.
[**apiProductsCoptions**](ProductsApi.md#apiProductsCoptions) | **OPTIONS** /products | Provides the list of HTTP supported methods.
[**apiProductsDelete**](ProductsApi.md#apiProductsDelete) | **DELETE** /products/{productId} | Removes the Product resource.
[**apiProductsGet**](ProductsApi.md#apiProductsGet) | **GET** /products/{productId} | Retrieves a Product resource based on a single ID.
[**apiProductsOptionsId**](ProductsApi.md#apiProductsOptionsId) | **OPTIONS** /products/{productId} | Provides the list of HTTP supported methods.
[**apiProductsPost**](ProductsApi.md#apiProductsPost) | **POST** /products | Creates a Product resource.
[**apiProductsPut**](ProductsApi.md#apiProductsPut) | **PUT** /products/{productId} | Updates the Product resource.
[**tdwGetProductName**](ProductsApi.md#tdwGetProductName) | **GET** /products/productname/{productname} | Determines if productname exists
[**tdwProductsAddEntity**](ProductsApi.md#tdwProductsAddEntity) | **PUT** /products/{productId}/entities/add/{entityId} | Sets the relationship product-entity
[**tdwProductsAddPerson**](ProductsApi.md#tdwProductsAddPerson) | **PUT** /products/{productId}/persons/add/{personId} | Sets the relationship product-person
[**tdwProductsGetEntities**](ProductsApi.md#tdwProductsGetEntities) | **GET** /products/{productId}/entities | List of entities related to the product
[**tdwProductsGetPersons**](ProductsApi.md#tdwProductsGetPersons) | **GET** /products/{productId}/persons | List of persons related to the product
[**tdwProductsRemEntity**](ProductsApi.md#tdwProductsRemEntity) | **PUT** /products/{productId}/entities/rem/{entityId} | Remove the relationship product-entity
[**tdwProductsRemPerson**](ProductsApi.md#tdwProductsRemPerson) | **PUT** /products/{productId}/persons/rem/{personId} | Remove the relationship product-person


<a name="apiProductsCget"></a>
# **apiProductsCget**
> InlineResponse2002 apiProductsCget(order, ordering)

Retrieves the collection of Product resources.

Returns all products from the system that the user has access to.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String order = "order_example"; // String | `id` | `name`
    String ordering = "ordering_example"; // String | `ASC` | `DESC`
    try {
      InlineResponse2002 result = apiInstance.apiProductsCget(order, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsCget");
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
 **order** | **String**| &#x60;id&#x60; | &#x60;name&#x60; | [optional] [enum: id, name]
 **ordering** | **String**| &#x60;ASC&#x60; | &#x60;DESC&#x60; | [optional] [enum: ASC, DESC]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of products |  * ETag -  <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="apiProductsCoptions"></a>
# **apiProductsCoptions**
> apiProductsCoptions()

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    try {
      apiInstance.apiProductsCoptions();
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsCoptions");
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

<a name="apiProductsDelete"></a>
# **apiProductsDelete**
> apiProductsDelete(productId)

Removes the Product resource.

Deletes the product identified by &#x60;productId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    try {
      apiInstance.apiProductsDelete(productId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsDelete");
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
 **productId** | **Integer**| ID of product |

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
**204** | Product deleted &amp;lt;Response body is empty&amp;gt; |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="apiProductsGet"></a>
# **apiProductsGet**
> Product apiProductsGet(productId)

Retrieves a Product resource based on a single ID.

Returns the product identified by &#x60;productId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    try {
      Product result = apiInstance.apiProductsGet(productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsGet");
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
 **productId** | **Integer**| ID of product |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product |  * ETag -  <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="apiProductsOptionsId"></a>
# **apiProductsOptionsId**
> apiProductsOptionsId(productId)

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    try {
      apiInstance.apiProductsOptionsId(productId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsOptionsId");
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
 **productId** | **Integer**| ID of product |

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

<a name="apiProductsPost"></a>
# **apiProductsPost**
> Product apiProductsPost(UNKNOWN_BASE_TYPE)

Creates a Product resource.

Creates a new product

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Product result = apiInstance.apiProductsPost(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsPost");
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;Element&#x60; data | [optional]

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | &#x60;Created&#x60;: product created |  * Location -  <br>  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**422** | &#x60;UNPROCESSABLE ENTITY&#x60;: Username, e-mail or password is left out |  -  |

<a name="apiProductsPut"></a>
# **apiProductsPut**
> Product apiProductsPut(productId, ifMatch, UNKNOWN_BASE_TYPE)

Updates the Product resource.

Updates the product identified by &#x60;productId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    String ifMatch = "ifMatch_example"; // String | ETag value of the resource you are trying to update
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Product result = apiInstance.apiProductsPut(productId, ifMatch, UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsPut");
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
 **productId** | **Integer**| ID of product |
 **ifMatch** | **String**| ETag value of the resource you are trying to update |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;Element&#x60; data | [optional]

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product previously existed and is now updated |  -  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**412** | &#x60;PRECONDITION FAILED&#x60;: one or more conditions given evaluated to false |  -  |

<a name="tdwGetProductName"></a>
# **tdwGetProductName**
> tdwGetProductName(productname)

Determines if productname exists

Returns status code 204 if &#x60;productname&#x60; exists.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String productname = "productname_example"; // String | Product name
    try {
      apiInstance.tdwGetProductName(productname);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwGetProductName");
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
 **productname** | **String**| Product name |

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
**204** | Productname exists &amp;lt;Response body is empty&amp;gt; |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="tdwProductsAddEntity"></a>
# **tdwProductsAddEntity**
> Product tdwProductsAddEntity(productId, entityId)

Sets the relationship product-entity

Establishes the relationship of the product with the entity

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    Integer entityId = 56; // Integer | ID of entity
    try {
      Product result = apiInstance.tdwProductsAddEntity(productId, entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwProductsAddEntity");
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
 **productId** | **Integer**| ID of product |
 **entityId** | **Integer**| ID of entity |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="tdwProductsAddPerson"></a>
# **tdwProductsAddPerson**
> Product tdwProductsAddPerson(productId, personId)

Sets the relationship product-person

Establishes the relationship of the product with the person

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    Integer personId = 56; // Integer | ID of person
    try {
      Product result = apiInstance.tdwProductsAddPerson(productId, personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwProductsAddPerson");
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
 **productId** | **Integer**| ID of product |
 **personId** | **Integer**| ID of person |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="tdwProductsGetEntities"></a>
# **tdwProductsGetEntities**
> InlineResponse2003 tdwProductsGetEntities(productId)

List of entities related to the product

Returns the entities related to the product &#x60;productId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    try {
      InlineResponse2003 result = apiInstance.tdwProductsGetEntities(productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwProductsGetEntities");
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
 **productId** | **Integer**| ID of product |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Entities |  * ETag -  <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="tdwProductsGetPersons"></a>
# **tdwProductsGetPersons**
> InlineResponse2004 tdwProductsGetPersons(productId)

List of persons related to the product

Returns the persons related to the product &#x60;productId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    try {
      InlineResponse2004 result = apiInstance.tdwProductsGetPersons(productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwProductsGetPersons");
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
 **productId** | **Integer**| ID of product |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Persons |  * ETag -  <br>  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="tdwProductsRemEntity"></a>
# **tdwProductsRemEntity**
> Product tdwProductsRemEntity(productId, entityId)

Remove the relationship product-entity

Removes the relationship of the product with the entity

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    Integer entityId = 56; // Integer | ID of entity
    try {
      Product result = apiInstance.tdwProductsRemEntity(productId, entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwProductsRemEntity");
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
 **productId** | **Integer**| ID of product |
 **entityId** | **Integer**| ID of entity |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="tdwProductsRemPerson"></a>
# **tdwProductsRemPerson**
> Product tdwProductsRemPerson(productId, personId)

Remove the relationship product-person

Removes the relationship of the product with the person

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer productId = 56; // Integer | ID of product
    Integer personId = 56; // Integer | ID of person
    try {
      Product result = apiInstance.tdwProductsRemPerson(productId, personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#tdwProductsRemPerson");
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
 **productId** | **Integer**| ID of product |
 **personId** | **Integer**| ID of person |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

