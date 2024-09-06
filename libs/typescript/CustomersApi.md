# .CustomersApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /customers | Create a customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /customers/{id} | Get a customer
[**listCustomers**](CustomersApi.md#listCustomers) | **GET** /customers | Get all customers
[**removeCustomer**](CustomersApi.md#removeCustomer) | **DELETE** /customers/{id} | Remove a customer
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /customers/{id} | Update a customer


# **createCustomer**
> Customer createCustomer(customerChangeset)

Create a new customer

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiCreateCustomerRequest = {
  // CustomerChangeset
  customerChangeset: {
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    phone: "phone_example",
  },
};

apiInstance.createCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerChangeset** | **CustomerChangeset**|  |


### Return type

**Customer**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomer**
> Customer getCustomer()

Returns a customer by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiGetCustomerRequest = {
  // string | Customer ID
  id: "id_example",
};

apiInstance.getCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Customer ID | defaults to undefined


### Return type

**Customer**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomers**
> Array<Customer> listCustomers()

Returns a list of all customers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:any = {};

apiInstance.listCustomers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Customer>**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeCustomer**
> void removeCustomer()

Remove a customer by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiRemoveCustomerRequest = {
  // string | Customer ID
  id: "id_example",
};

apiInstance.removeCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Customer ID | defaults to undefined


### Return type

**void**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomer**
> Customer updateCustomer(customerChangeset)

Update a customer by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiUpdateCustomerRequest = {
  // string
  id: "id_example",
  // CustomerChangeset
  customerChangeset: {
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    phone: "phone_example",
  },
};

apiInstance.updateCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerChangeset** | **CustomerChangeset**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**Customer**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


