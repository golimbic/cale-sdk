# .ReservationsApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReservation**](ReservationsApi.md#createReservation) | **POST** /reservations | Create a reservation hold
[**getReservation**](ReservationsApi.md#getReservation) | **GET** /reservations/{id} | Get a reservation
[**listReservations**](ReservationsApi.md#listReservations) | **GET** /reservations | Get all reservations
[**updateReservation**](ReservationsApi.md#updateReservation) | **PUT** /reservations/{id} | Update a reservation


# **createReservation**
> Reservation createReservation(createChangeset)

When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReservationsApi(configuration);

let body:.ReservationsApiCreateReservationRequest = {
  // CreateChangeset
  createChangeset: {
    offerId: "offerId_example",
    slot: {
      end: new Date('1970-01-01T00:00:00.00Z'),
      start: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

apiInstance.createReservation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChangeset** | **CreateChangeset**|  |


### Return type

**Reservation**

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

# **getReservation**
> Reservation getReservation()

Get a reservation by its ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReservationsApi(configuration);

let body:.ReservationsApiGetReservationRequest = {
  // string | Reservation ID
  id: "id_example",
};

apiInstance.getReservation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Reservation ID | defaults to undefined


### Return type

**Reservation**

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

# **listReservations**
> Array<Reservation> listReservations()

List reservations within a time range.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReservationsApi(configuration);

let body:.ReservationsApiListReservationsRequest = {
  // Date
  fromTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date
  untilTime: new Date('1970-01-01T00:00:00.00Z'),
  // Status (optional)
  status: null,
  // string (optional)
  customerId: "customer_id_example",
  // string (optional)
  providerId: "provider_id_example",
  // string (optional)
  offerId: "offer_id_example",
  // string (optional)
  serviceId: "service_id_example",
};

apiInstance.listReservations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromTime** | [**Date**] |  | defaults to undefined
 **untilTime** | [**Date**] |  | defaults to undefined
 **status** | **Status** |  | (optional) defaults to undefined
 **customerId** | [**string**] |  | (optional) defaults to undefined
 **providerId** | [**string**] |  | (optional) defaults to undefined
 **offerId** | [**string**] |  | (optional) defaults to undefined
 **serviceId** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<Reservation>**

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

# **updateReservation**
> Reservation updateReservation(reservationUpdateChangeset)

Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReservationsApi(configuration);

let body:.ReservationsApiUpdateReservationRequest = {
  // string | Reservation ID
  id: "id_example",
  // ReservationUpdateChangeset
  reservationUpdateChangeset: {
    customerId: "customerId_example",
    status: "confirmed",
  },
};

apiInstance.updateReservation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationUpdateChangeset** | **ReservationUpdateChangeset**|  |
 **id** | [**string**] | Reservation ID | defaults to undefined


### Return type

**Reservation**

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


