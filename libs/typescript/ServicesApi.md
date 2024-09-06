# .ServicesApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](ServicesApi.md#createService) | **POST** /services | Create a new service
[**getService**](ServicesApi.md#getService) | **GET** /services/{id} | Get a service
[**getServices**](ServicesApi.md#getServices) | **GET** /services | Get all services
[**updateService**](ServicesApi.md#updateService) | **PUT** /services/{id} | Update a service


# **createService**
> Array<Service> createService(serviceCreateChangeset)

Creates a new service

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServicesApi(configuration);

let body:.ServicesApiCreateServiceRequest = {
  // ServiceCreateChangeset
  serviceCreateChangeset: {
    name: "name_example",
  },
};

apiInstance.createService(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceCreateChangeset** | **ServiceCreateChangeset**|  |


### Return type

**Array<Service>**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getService**
> Service getService()

Returns a service by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServicesApi(configuration);

let body:.ServicesApiGetServiceRequest = {
  // string | Service ID
  id: "id_example",
};

apiInstance.getService(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Service ID | defaults to undefined


### Return type

**Service**

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

# **getServices**
> Array<Service> getServices()

Returns a list of all services

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServicesApi(configuration);

let body:any = {};

apiInstance.getServices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Service>**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateService**
> Service updateService(serviceUpdateChangeset)

Update a service by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServicesApi(configuration);

let body:.ServicesApiUpdateServiceRequest = {
  // string | Service ID
  id: "id_example",
  // ServiceUpdateChangeset
  serviceUpdateChangeset: {
    name: "name_example",
    status: null,
  },
};

apiInstance.updateService(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceUpdateChangeset** | **ServiceUpdateChangeset**|  |
 **id** | [**string**] | Service ID | defaults to undefined


### Return type

**Service**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


