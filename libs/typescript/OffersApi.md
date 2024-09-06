# .OffersApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOffer**](OffersApi.md#createOffer) | **POST** /offers | Create a new offer
[**getOffer**](OffersApi.md#getOffer) | **GET** /offers/{id} | Get an offer
[**getOffers**](OffersApi.md#getOffers) | **GET** /offers | Get all offers
[**getSlots**](OffersApi.md#getSlots) | **GET** /offers/{id}/slots | Get slots for an offer
[**removeOffer**](OffersApi.md#removeOffer) | **DELETE** /offers/{id} | Remove an offer


# **createOffer**
> Array<Offer> createOffer(providerOfferCreateChangeset)

Creates a new provider\'s offer for a service

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiCreateOfferRequest = {
  // ProviderOfferCreateChangeset
  providerOfferCreateChangeset: {
    duration: 30,
    price: {
      amount: 100,
      currency: "USD",
    },
    providerId: "providerId_example",
    serviceId: "serviceId_example",
  },
};

apiInstance.createOffer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerOfferCreateChangeset** | **ProviderOfferCreateChangeset**|  |


### Return type

**Array<Offer>**

### Authorization

[cale_api_key](README.md#cale_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOffer**
> Offer getOffer()

Returns an offer by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOfferRequest = {
  // string | Offer ID
  id: "id_example",
};

apiInstance.getOffer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Offer ID | defaults to undefined


### Return type

**Offer**

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

# **getOffers**
> Array<Offer> getOffers()

Returns a list of all offers based on the query parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOffersRequest = {
  // string (optional)
  providerId: "provider_id_example",
  // string (optional)
  serviceId: "service_id_example",
};

apiInstance.getOffers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**string**] |  | (optional) defaults to undefined
 **serviceId** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<Offer>**

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

# **getSlots**
> SlotsPayload getSlots()

Returns a list of available time slots for an offer

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetSlotsRequest = {
  // string | Offer ID
  id: "id_example",
  // Date | The start time to get slots from, defaults to now (optional)
  _from: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The end time to get slots until, defaults to 30 days from `from` (optional)
  until: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getSlots(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Offer ID | defaults to undefined
 **_from** | [**Date**] | The start time to get slots from, defaults to now | (optional) defaults to undefined
 **until** | [**Date**] | The end time to get slots until, defaults to 30 days from &#x60;from&#x60; | (optional) defaults to undefined


### Return type

**SlotsPayload**

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

# **removeOffer**
> void removeOffer()

Removes an offer by ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiRemoveOfferRequest = {
  // string | Offer ID
  id: "id_example",
};

apiInstance.removeOffer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Offer ID | defaults to undefined


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


