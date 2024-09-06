# .SchedulesApi

All URIs are relative to *https://cale.app/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSchedule**](SchedulesApi.md#createSchedule) | **POST** /schedules | Create a schedule
[**getSchedules**](SchedulesApi.md#getSchedules) | **GET** /schedules | Get all schedules
[**removeSchedule**](SchedulesApi.md#removeSchedule) | **DELETE** /schedules/{id} | Remove a schedule


# **createSchedule**
> Array<Schedule> createSchedule(scheduleCreateChangeset)

Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SchedulesApi(configuration);

let body:.SchedulesApiCreateScheduleRequest = {
  // ScheduleCreateChangeset
  scheduleCreateChangeset: {
    endTime: new Date('2021-01-01T17:00:00-08:00'),
    providerId: "providerId_example",
    rruleSet: {
      exdates: [
        new Date('1970-01-01T00:00:00.00Z'),
      ],
      exrules: ["FREQ=YEARLY;BYMONTHDAY=4;BYMONTH=7","FREQ=YEARLY;BYDAY=4TH;BYMONTH=11"],
      rdates: [
        new Date('1970-01-01T00:00:00.00Z'),
      ],
      rrules: ["FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"],
    },
    startDate: new Date('1970-01-01T00:00:00.00Z'),
    startTime: new Date('2021-01-01T09:00:00-08:00'),
    timezone: "America/Los_Angeles",
  },
};

apiInstance.createSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduleCreateChangeset** | **ScheduleCreateChangeset**|  |


### Return type

**Array<Schedule>**

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

# **getSchedules**
> Array<Schedule> getSchedules()

Get a list of schedules for a provider.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SchedulesApi(configuration);

let body:.SchedulesApiGetSchedulesRequest = {
  // string
  providerId: "provider_id_example",
};

apiInstance.getSchedules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**Array<Schedule>**

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

# **removeSchedule**
> void removeSchedule()

Remove a schedule by its ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SchedulesApi(configuration);

let body:.SchedulesApiRemoveScheduleRequest = {
  // string | Schedule ID
  id: "id_example",
};

apiInstance.removeSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Schedule ID | defaults to undefined


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


