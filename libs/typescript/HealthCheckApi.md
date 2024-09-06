# .HealthCheckApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleGetHealth**](HealthCheckApi.md#handleGetHealth) | **GET** /health | Check if service is healthy


# **handleGetHealth**
> void handleGetHealth()

This endpoint is used to check if the service is healthy.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HealthCheckApi(configuration);

let body:any = {};

apiInstance.handleGetHealth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | Service is healthy |  -  |
**500** | Service is unhealthy |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


