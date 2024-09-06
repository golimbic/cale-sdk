# .ProvidersApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProvider**](ProvidersApi.md#createProvider) | **POST** /providers | Create a provider
[**getProvider**](ProvidersApi.md#getProvider) | **GET** /providers/{id} | Get a provider
[**getProviders**](ProvidersApi.md#getProviders) | **GET** /providers | Get all providers
[**updateProvider**](ProvidersApi.md#updateProvider) | **PUT** /providers/{id} | Update a provider


# **createProvider**
> Array<Provider> createProvider(providerCreateChangeset)

Create a new provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProvidersApi(configuration);

let body:.ProvidersApiCreateProviderRequest = {
  // ProviderCreateChangeset
  providerCreateChangeset: {
    name: "name_example",
  },
};

apiInstance.createProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerCreateChangeset** | **ProviderCreateChangeset**|  |


### Return type

**Array<Provider>**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProvider**
> Provider getProvider()

Returns a provider by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProvidersApi(configuration);

let body:.ProvidersApiGetProviderRequest = {
  // string | Provider ID
  id: "id_example",
};

apiInstance.getProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Provider ID | defaults to undefined


### Return type

**Provider**

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

# **getProviders**
> Array<Provider> getProviders()

Returns a list of all providers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProvidersApi(configuration);

let body:any = {};

apiInstance.getProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Provider>**

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

# **updateProvider**
> Provider updateProvider(providerUpdateChangeset)

Update a provider by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProvidersApi(configuration);

let body:.ProvidersApiUpdateProviderRequest = {
  // string | Provider ID
  id: "id_example",
  // ProviderUpdateChangeset
  providerUpdateChangeset: {
    name: "name_example",
    status: null,
  },
};

apiInstance.updateProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerUpdateChangeset** | **ProviderUpdateChangeset**|  |
 **id** | [**string**] | Provider ID | defaults to undefined


### Return type

**Provider**

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


