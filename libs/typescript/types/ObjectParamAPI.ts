import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateChangeset } from '../models/CreateChangeset';
import { Customer } from '../models/Customer';
import { CustomerChangeset } from '../models/CustomerChangeset';
import { Offer } from '../models/Offer';
import { Price } from '../models/Price';
import { Provider } from '../models/Provider';
import { ProviderCreateChangeset } from '../models/ProviderCreateChangeset';
import { ProviderOfferCreateChangeset } from '../models/ProviderOfferCreateChangeset';
import { ProviderUpdateChangeset } from '../models/ProviderUpdateChangeset';
import { RRuleSet } from '../models/RRuleSet';
import { Reservation } from '../models/Reservation';
import { ReservationStatus } from '../models/ReservationStatus';
import { ReservationUpdateChangeset } from '../models/ReservationUpdateChangeset';
import { Schedule } from '../models/Schedule';
import { ScheduleCreateChangeset } from '../models/ScheduleCreateChangeset';
import { Service } from '../models/Service';
import { ServiceCreateChangeset } from '../models/ServiceCreateChangeset';
import { ServiceUpdateChangeset } from '../models/ServiceUpdateChangeset';
import { Slot } from '../models/Slot';
import { SlotsPayload } from '../models/SlotsPayload';
import { Status } from '../models/Status';

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateCustomerRequest {
    /**
     * 
     * @type CustomerChangeset
     * @memberof CustomersApicreateCustomer
     */
    customerChangeset: CustomerChangeset
}

export interface CustomersApiGetCustomerRequest {
    /**
     * Customer ID
     * @type string
     * @memberof CustomersApigetCustomer
     */
    id: string
}

export interface CustomersApiListCustomersRequest {
}

export interface CustomersApiRemoveCustomerRequest {
    /**
     * Customer ID
     * @type string
     * @memberof CustomersApiremoveCustomer
     */
    id: string
}

export interface CustomersApiUpdateCustomerRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApiupdateCustomer
     */
    id: string
    /**
     * 
     * @type CustomerChangeset
     * @memberof CustomersApiupdateCustomer
     */
    customerChangeset: CustomerChangeset
}

export class ObjectCustomersApi {
    private api: ObservableCustomersApi

    public constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new customer
     * Create a customer
     * @param param the request object
     */
    public createCustomerWithHttpInfo(param: CustomersApiCreateCustomerRequest, options?: Configuration): Promise<HttpInfo<Customer>> {
        return this.api.createCustomerWithHttpInfo(param.customerChangeset,  options).toPromise();
    }

    /**
     * Create a new customer
     * Create a customer
     * @param param the request object
     */
    public createCustomer(param: CustomersApiCreateCustomerRequest, options?: Configuration): Promise<Customer> {
        return this.api.createCustomer(param.customerChangeset,  options).toPromise();
    }

    /**
     * Returns a customer by ID
     * Get a customer
     * @param param the request object
     */
    public getCustomerWithHttpInfo(param: CustomersApiGetCustomerRequest, options?: Configuration): Promise<HttpInfo<Customer>> {
        return this.api.getCustomerWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns a customer by ID
     * Get a customer
     * @param param the request object
     */
    public getCustomer(param: CustomersApiGetCustomerRequest, options?: Configuration): Promise<Customer> {
        return this.api.getCustomer(param.id,  options).toPromise();
    }

    /**
     * Returns a list of all customers
     * Get all customers
     * @param param the request object
     */
    public listCustomersWithHttpInfo(param: CustomersApiListCustomersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Customer>>> {
        return this.api.listCustomersWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of all customers
     * Get all customers
     * @param param the request object
     */
    public listCustomers(param: CustomersApiListCustomersRequest = {}, options?: Configuration): Promise<Array<Customer>> {
        return this.api.listCustomers( options).toPromise();
    }

    /**
     * Remove a customer by ID
     * Remove a customer
     * @param param the request object
     */
    public removeCustomerWithHttpInfo(param: CustomersApiRemoveCustomerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeCustomerWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Remove a customer by ID
     * Remove a customer
     * @param param the request object
     */
    public removeCustomer(param: CustomersApiRemoveCustomerRequest, options?: Configuration): Promise<void> {
        return this.api.removeCustomer(param.id,  options).toPromise();
    }

    /**
     * Update a customer by ID
     * Update a customer
     * @param param the request object
     */
    public updateCustomerWithHttpInfo(param: CustomersApiUpdateCustomerRequest, options?: Configuration): Promise<HttpInfo<Customer>> {
        return this.api.updateCustomerWithHttpInfo(param.id, param.customerChangeset,  options).toPromise();
    }

    /**
     * Update a customer by ID
     * Update a customer
     * @param param the request object
     */
    public updateCustomer(param: CustomersApiUpdateCustomerRequest, options?: Configuration): Promise<Customer> {
        return this.api.updateCustomer(param.id, param.customerChangeset,  options).toPromise();
    }

}

import { ObservableHealthCheckApi } from "./ObservableAPI";
import { HealthCheckApiRequestFactory, HealthCheckApiResponseProcessor} from "../apis/HealthCheckApi";

export interface HealthCheckApiHandleGetHealthRequest {
}

export class ObjectHealthCheckApi {
    private api: ObservableHealthCheckApi

    public constructor(configuration: Configuration, requestFactory?: HealthCheckApiRequestFactory, responseProcessor?: HealthCheckApiResponseProcessor) {
        this.api = new ObservableHealthCheckApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to check if the service is healthy.
     * Check if service is healthy
     * @param param the request object
     */
    public handleGetHealthWithHttpInfo(param: HealthCheckApiHandleGetHealthRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.handleGetHealthWithHttpInfo( options).toPromise();
    }

    /**
     * This endpoint is used to check if the service is healthy.
     * Check if service is healthy
     * @param param the request object
     */
    public handleGetHealth(param: HealthCheckApiHandleGetHealthRequest = {}, options?: Configuration): Promise<void> {
        return this.api.handleGetHealth( options).toPromise();
    }

}

import { ObservableOffersApi } from "./ObservableAPI";
import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";

export interface OffersApiCreateOfferRequest {
    /**
     * 
     * @type ProviderOfferCreateChangeset
     * @memberof OffersApicreateOffer
     */
    providerOfferCreateChangeset: ProviderOfferCreateChangeset
}

export interface OffersApiGetOfferRequest {
    /**
     * Offer ID
     * @type string
     * @memberof OffersApigetOffer
     */
    id: string
}

export interface OffersApiGetOffersRequest {
    /**
     * 
     * @type string
     * @memberof OffersApigetOffers
     */
    providerId?: string
    /**
     * 
     * @type string
     * @memberof OffersApigetOffers
     */
    serviceId?: string
}

export interface OffersApiGetSlotsRequest {
    /**
     * Offer ID
     * @type string
     * @memberof OffersApigetSlots
     */
    id: string
    /**
     * The start time to get slots from, defaults to now
     * @type Date
     * @memberof OffersApigetSlots
     */
    _from?: Date
    /**
     * The end time to get slots until, defaults to 30 days from &#x60;from&#x60;
     * @type Date
     * @memberof OffersApigetSlots
     */
    until?: Date
}

export interface OffersApiRemoveOfferRequest {
    /**
     * Offer ID
     * @type string
     * @memberof OffersApiremoveOffer
     */
    id: string
}

export class ObjectOffersApi {
    private api: ObservableOffersApi

    public constructor(configuration: Configuration, requestFactory?: OffersApiRequestFactory, responseProcessor?: OffersApiResponseProcessor) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new provider\'s offer for a service
     * Create a new offer
     * @param param the request object
     */
    public createOfferWithHttpInfo(param: OffersApiCreateOfferRequest, options?: Configuration): Promise<HttpInfo<Array<Offer>>> {
        return this.api.createOfferWithHttpInfo(param.providerOfferCreateChangeset,  options).toPromise();
    }

    /**
     * Creates a new provider\'s offer for a service
     * Create a new offer
     * @param param the request object
     */
    public createOffer(param: OffersApiCreateOfferRequest, options?: Configuration): Promise<Array<Offer>> {
        return this.api.createOffer(param.providerOfferCreateChangeset,  options).toPromise();
    }

    /**
     * Returns an offer by ID
     * Get an offer
     * @param param the request object
     */
    public getOfferWithHttpInfo(param: OffersApiGetOfferRequest, options?: Configuration): Promise<HttpInfo<Offer>> {
        return this.api.getOfferWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns an offer by ID
     * Get an offer
     * @param param the request object
     */
    public getOffer(param: OffersApiGetOfferRequest, options?: Configuration): Promise<Offer> {
        return this.api.getOffer(param.id,  options).toPromise();
    }

    /**
     * Returns a list of all offers based on the query parameters
     * Get all offers
     * @param param the request object
     */
    public getOffersWithHttpInfo(param: OffersApiGetOffersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Offer>>> {
        return this.api.getOffersWithHttpInfo(param.providerId, param.serviceId,  options).toPromise();
    }

    /**
     * Returns a list of all offers based on the query parameters
     * Get all offers
     * @param param the request object
     */
    public getOffers(param: OffersApiGetOffersRequest = {}, options?: Configuration): Promise<Array<Offer>> {
        return this.api.getOffers(param.providerId, param.serviceId,  options).toPromise();
    }

    /**
     * Returns a list of available time slots for an offer
     * Get slots for an offer
     * @param param the request object
     */
    public getSlotsWithHttpInfo(param: OffersApiGetSlotsRequest, options?: Configuration): Promise<HttpInfo<SlotsPayload>> {
        return this.api.getSlotsWithHttpInfo(param.id, param._from, param.until,  options).toPromise();
    }

    /**
     * Returns a list of available time slots for an offer
     * Get slots for an offer
     * @param param the request object
     */
    public getSlots(param: OffersApiGetSlotsRequest, options?: Configuration): Promise<SlotsPayload> {
        return this.api.getSlots(param.id, param._from, param.until,  options).toPromise();
    }

    /**
     * Removes an offer by ID
     * Remove an offer
     * @param param the request object
     */
    public removeOfferWithHttpInfo(param: OffersApiRemoveOfferRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeOfferWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Removes an offer by ID
     * Remove an offer
     * @param param the request object
     */
    public removeOffer(param: OffersApiRemoveOfferRequest, options?: Configuration): Promise<void> {
        return this.api.removeOffer(param.id,  options).toPromise();
    }

}

import { ObservableProvidersApi } from "./ObservableAPI";
import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi";

export interface ProvidersApiCreateProviderRequest {
    /**
     * 
     * @type ProviderCreateChangeset
     * @memberof ProvidersApicreateProvider
     */
    providerCreateChangeset: ProviderCreateChangeset
}

export interface ProvidersApiGetProviderRequest {
    /**
     * Provider ID
     * @type string
     * @memberof ProvidersApigetProvider
     */
    id: string
}

export interface ProvidersApiGetProvidersRequest {
}

export interface ProvidersApiUpdateProviderRequest {
    /**
     * Provider ID
     * @type string
     * @memberof ProvidersApiupdateProvider
     */
    id: string
    /**
     * 
     * @type ProviderUpdateChangeset
     * @memberof ProvidersApiupdateProvider
     */
    providerUpdateChangeset: ProviderUpdateChangeset
}

export class ObjectProvidersApi {
    private api: ObservableProvidersApi

    public constructor(configuration: Configuration, requestFactory?: ProvidersApiRequestFactory, responseProcessor?: ProvidersApiResponseProcessor) {
        this.api = new ObservableProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new provider
     * Create a provider
     * @param param the request object
     */
    public createProviderWithHttpInfo(param: ProvidersApiCreateProviderRequest, options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        return this.api.createProviderWithHttpInfo(param.providerCreateChangeset,  options).toPromise();
    }

    /**
     * Create a new provider
     * Create a provider
     * @param param the request object
     */
    public createProvider(param: ProvidersApiCreateProviderRequest, options?: Configuration): Promise<Array<Provider>> {
        return this.api.createProvider(param.providerCreateChangeset,  options).toPromise();
    }

    /**
     * Returns a provider by ID
     * Get a provider
     * @param param the request object
     */
    public getProviderWithHttpInfo(param: ProvidersApiGetProviderRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.getProviderWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns a provider by ID
     * Get a provider
     * @param param the request object
     */
    public getProvider(param: ProvidersApiGetProviderRequest, options?: Configuration): Promise<Provider> {
        return this.api.getProvider(param.id,  options).toPromise();
    }

    /**
     * Returns a list of all providers
     * Get all providers
     * @param param the request object
     */
    public getProvidersWithHttpInfo(param: ProvidersApiGetProvidersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        return this.api.getProvidersWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of all providers
     * Get all providers
     * @param param the request object
     */
    public getProviders(param: ProvidersApiGetProvidersRequest = {}, options?: Configuration): Promise<Array<Provider>> {
        return this.api.getProviders( options).toPromise();
    }

    /**
     * Update a provider by ID
     * Update a provider
     * @param param the request object
     */
    public updateProviderWithHttpInfo(param: ProvidersApiUpdateProviderRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.updateProviderWithHttpInfo(param.id, param.providerUpdateChangeset,  options).toPromise();
    }

    /**
     * Update a provider by ID
     * Update a provider
     * @param param the request object
     */
    public updateProvider(param: ProvidersApiUpdateProviderRequest, options?: Configuration): Promise<Provider> {
        return this.api.updateProvider(param.id, param.providerUpdateChangeset,  options).toPromise();
    }

}

import { ObservableReservationsApi } from "./ObservableAPI";
import { ReservationsApiRequestFactory, ReservationsApiResponseProcessor} from "../apis/ReservationsApi";

export interface ReservationsApiCreateReservationRequest {
    /**
     * 
     * @type CreateChangeset
     * @memberof ReservationsApicreateReservation
     */
    createChangeset: CreateChangeset
}

export interface ReservationsApiGetReservationRequest {
    /**
     * Reservation ID
     * @type string
     * @memberof ReservationsApigetReservation
     */
    id: string
}

export interface ReservationsApiListReservationsRequest {
    /**
     * 
     * @type Date
     * @memberof ReservationsApilistReservations
     */
    fromTime: Date
    /**
     * 
     * @type Date
     * @memberof ReservationsApilistReservations
     */
    untilTime: Date
    /**
     * 
     * @type Status
     * @memberof ReservationsApilistReservations
     */
    status?: Status
    /**
     * 
     * @type string
     * @memberof ReservationsApilistReservations
     */
    customerId?: string
    /**
     * 
     * @type string
     * @memberof ReservationsApilistReservations
     */
    providerId?: string
    /**
     * 
     * @type string
     * @memberof ReservationsApilistReservations
     */
    offerId?: string
    /**
     * 
     * @type string
     * @memberof ReservationsApilistReservations
     */
    serviceId?: string
}

export interface ReservationsApiUpdateReservationRequest {
    /**
     * Reservation ID
     * @type string
     * @memberof ReservationsApiupdateReservation
     */
    id: string
    /**
     * 
     * @type ReservationUpdateChangeset
     * @memberof ReservationsApiupdateReservation
     */
    reservationUpdateChangeset: ReservationUpdateChangeset
}

export class ObjectReservationsApi {
    private api: ObservableReservationsApi

    public constructor(configuration: Configuration, requestFactory?: ReservationsApiRequestFactory, responseProcessor?: ReservationsApiResponseProcessor) {
        this.api = new ObservableReservationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param param the request object
     */
    public createReservationWithHttpInfo(param: ReservationsApiCreateReservationRequest, options?: Configuration): Promise<HttpInfo<Reservation>> {
        return this.api.createReservationWithHttpInfo(param.createChangeset,  options).toPromise();
    }

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param param the request object
     */
    public createReservation(param: ReservationsApiCreateReservationRequest, options?: Configuration): Promise<Reservation> {
        return this.api.createReservation(param.createChangeset,  options).toPromise();
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param param the request object
     */
    public getReservationWithHttpInfo(param: ReservationsApiGetReservationRequest, options?: Configuration): Promise<HttpInfo<Reservation>> {
        return this.api.getReservationWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param param the request object
     */
    public getReservation(param: ReservationsApiGetReservationRequest, options?: Configuration): Promise<Reservation> {
        return this.api.getReservation(param.id,  options).toPromise();
    }

    /**
     * List reservations within a time range.
     * Get all reservations
     * @param param the request object
     */
    public listReservationsWithHttpInfo(param: ReservationsApiListReservationsRequest, options?: Configuration): Promise<HttpInfo<Array<Reservation>>> {
        return this.api.listReservationsWithHttpInfo(param.fromTime, param.untilTime, param.status, param.customerId, param.providerId, param.offerId, param.serviceId,  options).toPromise();
    }

    /**
     * List reservations within a time range.
     * Get all reservations
     * @param param the request object
     */
    public listReservations(param: ReservationsApiListReservationsRequest, options?: Configuration): Promise<Array<Reservation>> {
        return this.api.listReservations(param.fromTime, param.untilTime, param.status, param.customerId, param.providerId, param.offerId, param.serviceId,  options).toPromise();
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param param the request object
     */
    public updateReservationWithHttpInfo(param: ReservationsApiUpdateReservationRequest, options?: Configuration): Promise<HttpInfo<Reservation>> {
        return this.api.updateReservationWithHttpInfo(param.id, param.reservationUpdateChangeset,  options).toPromise();
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param param the request object
     */
    public updateReservation(param: ReservationsApiUpdateReservationRequest, options?: Configuration): Promise<Reservation> {
        return this.api.updateReservation(param.id, param.reservationUpdateChangeset,  options).toPromise();
    }

}

import { ObservableSchedulesApi } from "./ObservableAPI";
import { SchedulesApiRequestFactory, SchedulesApiResponseProcessor} from "../apis/SchedulesApi";

export interface SchedulesApiCreateScheduleRequest {
    /**
     * 
     * @type ScheduleCreateChangeset
     * @memberof SchedulesApicreateSchedule
     */
    scheduleCreateChangeset: ScheduleCreateChangeset
}

export interface SchedulesApiGetSchedulesRequest {
    /**
     * 
     * @type string
     * @memberof SchedulesApigetSchedules
     */
    providerId: string
}

export interface SchedulesApiRemoveScheduleRequest {
    /**
     * Schedule ID
     * @type string
     * @memberof SchedulesApiremoveSchedule
     */
    id: string
}

export class ObjectSchedulesApi {
    private api: ObservableSchedulesApi

    public constructor(configuration: Configuration, requestFactory?: SchedulesApiRequestFactory, responseProcessor?: SchedulesApiResponseProcessor) {
        this.api = new ObservableSchedulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
     * Create a schedule
     * @param param the request object
     */
    public createScheduleWithHttpInfo(param: SchedulesApiCreateScheduleRequest, options?: Configuration): Promise<HttpInfo<Array<Schedule>>> {
        return this.api.createScheduleWithHttpInfo(param.scheduleCreateChangeset,  options).toPromise();
    }

    /**
     * Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
     * Create a schedule
     * @param param the request object
     */
    public createSchedule(param: SchedulesApiCreateScheduleRequest, options?: Configuration): Promise<Array<Schedule>> {
        return this.api.createSchedule(param.scheduleCreateChangeset,  options).toPromise();
    }

    /**
     * Get a list of schedules for a provider.
     * Get all schedules
     * @param param the request object
     */
    public getSchedulesWithHttpInfo(param: SchedulesApiGetSchedulesRequest, options?: Configuration): Promise<HttpInfo<Array<Schedule>>> {
        return this.api.getSchedulesWithHttpInfo(param.providerId,  options).toPromise();
    }

    /**
     * Get a list of schedules for a provider.
     * Get all schedules
     * @param param the request object
     */
    public getSchedules(param: SchedulesApiGetSchedulesRequest, options?: Configuration): Promise<Array<Schedule>> {
        return this.api.getSchedules(param.providerId,  options).toPromise();
    }

    /**
     * Remove a schedule by its ID.
     * Remove a schedule
     * @param param the request object
     */
    public removeScheduleWithHttpInfo(param: SchedulesApiRemoveScheduleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeScheduleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Remove a schedule by its ID.
     * Remove a schedule
     * @param param the request object
     */
    public removeSchedule(param: SchedulesApiRemoveScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.removeSchedule(param.id,  options).toPromise();
    }

}

import { ObservableServicesApi } from "./ObservableAPI";
import { ServicesApiRequestFactory, ServicesApiResponseProcessor} from "../apis/ServicesApi";

export interface ServicesApiCreateServiceRequest {
    /**
     * 
     * @type ServiceCreateChangeset
     * @memberof ServicesApicreateService
     */
    serviceCreateChangeset: ServiceCreateChangeset
}

export interface ServicesApiGetServiceRequest {
    /**
     * Service ID
     * @type string
     * @memberof ServicesApigetService
     */
    id: string
}

export interface ServicesApiGetServicesRequest {
}

export interface ServicesApiUpdateServiceRequest {
    /**
     * Service ID
     * @type string
     * @memberof ServicesApiupdateService
     */
    id: string
    /**
     * 
     * @type ServiceUpdateChangeset
     * @memberof ServicesApiupdateService
     */
    serviceUpdateChangeset: ServiceUpdateChangeset
}

export class ObjectServicesApi {
    private api: ObservableServicesApi

    public constructor(configuration: Configuration, requestFactory?: ServicesApiRequestFactory, responseProcessor?: ServicesApiResponseProcessor) {
        this.api = new ObservableServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new service
     * Create a new service
     * @param param the request object
     */
    public createServiceWithHttpInfo(param: ServicesApiCreateServiceRequest, options?: Configuration): Promise<HttpInfo<Array<Service>>> {
        return this.api.createServiceWithHttpInfo(param.serviceCreateChangeset,  options).toPromise();
    }

    /**
     * Creates a new service
     * Create a new service
     * @param param the request object
     */
    public createService(param: ServicesApiCreateServiceRequest, options?: Configuration): Promise<Array<Service>> {
        return this.api.createService(param.serviceCreateChangeset,  options).toPromise();
    }

    /**
     * Returns a service by ID
     * Get a service
     * @param param the request object
     */
    public getServiceWithHttpInfo(param: ServicesApiGetServiceRequest, options?: Configuration): Promise<HttpInfo<Service>> {
        return this.api.getServiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns a service by ID
     * Get a service
     * @param param the request object
     */
    public getService(param: ServicesApiGetServiceRequest, options?: Configuration): Promise<Service> {
        return this.api.getService(param.id,  options).toPromise();
    }

    /**
     * Returns a list of all services
     * Get all services
     * @param param the request object
     */
    public getServicesWithHttpInfo(param: ServicesApiGetServicesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Service>>> {
        return this.api.getServicesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of all services
     * Get all services
     * @param param the request object
     */
    public getServices(param: ServicesApiGetServicesRequest = {}, options?: Configuration): Promise<Array<Service>> {
        return this.api.getServices( options).toPromise();
    }

    /**
     * Update a service by ID
     * Update a service
     * @param param the request object
     */
    public updateServiceWithHttpInfo(param: ServicesApiUpdateServiceRequest, options?: Configuration): Promise<HttpInfo<Service>> {
        return this.api.updateServiceWithHttpInfo(param.id, param.serviceUpdateChangeset,  options).toPromise();
    }

    /**
     * Update a service by ID
     * Update a service
     * @param param the request object
     */
    public updateService(param: ServicesApiUpdateServiceRequest, options?: Configuration): Promise<Service> {
        return this.api.updateService(param.id, param.serviceUpdateChangeset,  options).toPromise();
    }

}
