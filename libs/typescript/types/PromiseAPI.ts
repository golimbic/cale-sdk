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
import { ObservableCustomersApi } from './ObservableAPI';

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class PromiseCustomersApi {
    private api: ObservableCustomersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new customer
     * Create a customer
     * @param customerChangeset 
     */
    public createCustomerWithHttpInfo(customerChangeset: CustomerChangeset, _options?: Configuration): Promise<HttpInfo<Customer>> {
        const result = this.api.createCustomerWithHttpInfo(customerChangeset, _options);
        return result.toPromise();
    }

    /**
     * Create a new customer
     * Create a customer
     * @param customerChangeset 
     */
    public createCustomer(customerChangeset: CustomerChangeset, _options?: Configuration): Promise<Customer> {
        const result = this.api.createCustomer(customerChangeset, _options);
        return result.toPromise();
    }

    /**
     * Returns a customer by ID
     * Get a customer
     * @param id Customer ID
     */
    public getCustomerWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Customer>> {
        const result = this.api.getCustomerWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a customer by ID
     * Get a customer
     * @param id Customer ID
     */
    public getCustomer(id: string, _options?: Configuration): Promise<Customer> {
        const result = this.api.getCustomer(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all customers
     * Get all customers
     */
    public listCustomersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Customer>>> {
        const result = this.api.listCustomersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of all customers
     * Get all customers
     */
    public listCustomers(_options?: Configuration): Promise<Array<Customer>> {
        const result = this.api.listCustomers(_options);
        return result.toPromise();
    }

    /**
     * Remove a customer by ID
     * Remove a customer
     * @param id Customer ID
     */
    public removeCustomerWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeCustomerWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Remove a customer by ID
     * Remove a customer
     * @param id Customer ID
     */
    public removeCustomer(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeCustomer(id, _options);
        return result.toPromise();
    }

    /**
     * Update a customer by ID
     * Update a customer
     * @param id 
     * @param customerChangeset 
     */
    public updateCustomerWithHttpInfo(id: string, customerChangeset: CustomerChangeset, _options?: Configuration): Promise<HttpInfo<Customer>> {
        const result = this.api.updateCustomerWithHttpInfo(id, customerChangeset, _options);
        return result.toPromise();
    }

    /**
     * Update a customer by ID
     * Update a customer
     * @param id 
     * @param customerChangeset 
     */
    public updateCustomer(id: string, customerChangeset: CustomerChangeset, _options?: Configuration): Promise<Customer> {
        const result = this.api.updateCustomer(id, customerChangeset, _options);
        return result.toPromise();
    }


}



import { ObservableHealthCheckApi } from './ObservableAPI';

import { HealthCheckApiRequestFactory, HealthCheckApiResponseProcessor} from "../apis/HealthCheckApi";
export class PromiseHealthCheckApi {
    private api: ObservableHealthCheckApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthCheckApiRequestFactory,
        responseProcessor?: HealthCheckApiResponseProcessor
    ) {
        this.api = new ObservableHealthCheckApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to check if the service is healthy.
     * Check if service is healthy
     */
    public handleGetHealthWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.handleGetHealthWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This endpoint is used to check if the service is healthy.
     * Check if service is healthy
     */
    public handleGetHealth(_options?: Configuration): Promise<void> {
        const result = this.api.handleGetHealth(_options);
        return result.toPromise();
    }


}



import { ObservableOffersApi } from './ObservableAPI';

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class PromiseOffersApi {
    private api: ObservableOffersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new provider\'s offer for a service
     * Create a new offer
     * @param providerOfferCreateChangeset 
     */
    public createOfferWithHttpInfo(providerOfferCreateChangeset: ProviderOfferCreateChangeset, _options?: Configuration): Promise<HttpInfo<Array<Offer>>> {
        const result = this.api.createOfferWithHttpInfo(providerOfferCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Creates a new provider\'s offer for a service
     * Create a new offer
     * @param providerOfferCreateChangeset 
     */
    public createOffer(providerOfferCreateChangeset: ProviderOfferCreateChangeset, _options?: Configuration): Promise<Array<Offer>> {
        const result = this.api.createOffer(providerOfferCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Returns an offer by ID
     * Get an offer
     * @param id Offer ID
     */
    public getOfferWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Offer>> {
        const result = this.api.getOfferWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Returns an offer by ID
     * Get an offer
     * @param id Offer ID
     */
    public getOffer(id: string, _options?: Configuration): Promise<Offer> {
        const result = this.api.getOffer(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all offers based on the query parameters
     * Get all offers
     * @param providerId 
     * @param serviceId 
     */
    public getOffersWithHttpInfo(providerId?: string, serviceId?: string, _options?: Configuration): Promise<HttpInfo<Array<Offer>>> {
        const result = this.api.getOffersWithHttpInfo(providerId, serviceId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all offers based on the query parameters
     * Get all offers
     * @param providerId 
     * @param serviceId 
     */
    public getOffers(providerId?: string, serviceId?: string, _options?: Configuration): Promise<Array<Offer>> {
        const result = this.api.getOffers(providerId, serviceId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of available time slots for an offer
     * Get slots for an offer
     * @param id Offer ID
     * @param _from The start time to get slots from, defaults to now
     * @param until The end time to get slots until, defaults to 30 days from &#x60;from&#x60;
     */
    public getSlotsWithHttpInfo(id: string, _from?: Date, until?: Date, _options?: Configuration): Promise<HttpInfo<SlotsPayload>> {
        const result = this.api.getSlotsWithHttpInfo(id, _from, until, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of available time slots for an offer
     * Get slots for an offer
     * @param id Offer ID
     * @param _from The start time to get slots from, defaults to now
     * @param until The end time to get slots until, defaults to 30 days from &#x60;from&#x60;
     */
    public getSlots(id: string, _from?: Date, until?: Date, _options?: Configuration): Promise<SlotsPayload> {
        const result = this.api.getSlots(id, _from, until, _options);
        return result.toPromise();
    }

    /**
     * Removes an offer by ID
     * Remove an offer
     * @param id Offer ID
     */
    public removeOfferWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeOfferWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Removes an offer by ID
     * Remove an offer
     * @param id Offer ID
     */
    public removeOffer(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeOffer(id, _options);
        return result.toPromise();
    }


}



import { ObservableProvidersApi } from './ObservableAPI';

import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi";
export class PromiseProvidersApi {
    private api: ObservableProvidersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProvidersApiRequestFactory,
        responseProcessor?: ProvidersApiResponseProcessor
    ) {
        this.api = new ObservableProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new provider
     * Create a provider
     * @param providerCreateChangeset 
     */
    public createProviderWithHttpInfo(providerCreateChangeset: ProviderCreateChangeset, _options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        const result = this.api.createProviderWithHttpInfo(providerCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Create a new provider
     * Create a provider
     * @param providerCreateChangeset 
     */
    public createProvider(providerCreateChangeset: ProviderCreateChangeset, _options?: Configuration): Promise<Array<Provider>> {
        const result = this.api.createProvider(providerCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Returns a provider by ID
     * Get a provider
     * @param id Provider ID
     */
    public getProviderWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.getProviderWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a provider by ID
     * Get a provider
     * @param id Provider ID
     */
    public getProvider(id: string, _options?: Configuration): Promise<Provider> {
        const result = this.api.getProvider(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all providers
     * Get all providers
     */
    public getProvidersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        const result = this.api.getProvidersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of all providers
     * Get all providers
     */
    public getProviders(_options?: Configuration): Promise<Array<Provider>> {
        const result = this.api.getProviders(_options);
        return result.toPromise();
    }

    /**
     * Update a provider by ID
     * Update a provider
     * @param id Provider ID
     * @param providerUpdateChangeset 
     */
    public updateProviderWithHttpInfo(id: string, providerUpdateChangeset: ProviderUpdateChangeset, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.updateProviderWithHttpInfo(id, providerUpdateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Update a provider by ID
     * Update a provider
     * @param id Provider ID
     * @param providerUpdateChangeset 
     */
    public updateProvider(id: string, providerUpdateChangeset: ProviderUpdateChangeset, _options?: Configuration): Promise<Provider> {
        const result = this.api.updateProvider(id, providerUpdateChangeset, _options);
        return result.toPromise();
    }


}



import { ObservableReservationsApi } from './ObservableAPI';

import { ReservationsApiRequestFactory, ReservationsApiResponseProcessor} from "../apis/ReservationsApi";
export class PromiseReservationsApi {
    private api: ObservableReservationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReservationsApiRequestFactory,
        responseProcessor?: ReservationsApiResponseProcessor
    ) {
        this.api = new ObservableReservationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param createChangeset 
     */
    public createReservationWithHttpInfo(createChangeset: CreateChangeset, _options?: Configuration): Promise<HttpInfo<Reservation>> {
        const result = this.api.createReservationWithHttpInfo(createChangeset, _options);
        return result.toPromise();
    }

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param createChangeset 
     */
    public createReservation(createChangeset: CreateChangeset, _options?: Configuration): Promise<Reservation> {
        const result = this.api.createReservation(createChangeset, _options);
        return result.toPromise();
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param id Reservation ID
     */
    public getReservationWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Reservation>> {
        const result = this.api.getReservationWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param id Reservation ID
     */
    public getReservation(id: string, _options?: Configuration): Promise<Reservation> {
        const result = this.api.getReservation(id, _options);
        return result.toPromise();
    }

    /**
     * List reservations within a time range.
     * Get all reservations
     * @param fromTime 
     * @param untilTime 
     * @param status 
     * @param customerId 
     * @param providerId 
     * @param offerId 
     * @param serviceId 
     */
    public listReservationsWithHttpInfo(fromTime: Date, untilTime: Date, status?: Status, customerId?: string, providerId?: string, offerId?: string, serviceId?: string, _options?: Configuration): Promise<HttpInfo<Array<Reservation>>> {
        const result = this.api.listReservationsWithHttpInfo(fromTime, untilTime, status, customerId, providerId, offerId, serviceId, _options);
        return result.toPromise();
    }

    /**
     * List reservations within a time range.
     * Get all reservations
     * @param fromTime 
     * @param untilTime 
     * @param status 
     * @param customerId 
     * @param providerId 
     * @param offerId 
     * @param serviceId 
     */
    public listReservations(fromTime: Date, untilTime: Date, status?: Status, customerId?: string, providerId?: string, offerId?: string, serviceId?: string, _options?: Configuration): Promise<Array<Reservation>> {
        const result = this.api.listReservations(fromTime, untilTime, status, customerId, providerId, offerId, serviceId, _options);
        return result.toPromise();
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param id Reservation ID
     * @param reservationUpdateChangeset 
     */
    public updateReservationWithHttpInfo(id: string, reservationUpdateChangeset: ReservationUpdateChangeset, _options?: Configuration): Promise<HttpInfo<Reservation>> {
        const result = this.api.updateReservationWithHttpInfo(id, reservationUpdateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param id Reservation ID
     * @param reservationUpdateChangeset 
     */
    public updateReservation(id: string, reservationUpdateChangeset: ReservationUpdateChangeset, _options?: Configuration): Promise<Reservation> {
        const result = this.api.updateReservation(id, reservationUpdateChangeset, _options);
        return result.toPromise();
    }


}



import { ObservableSchedulesApi } from './ObservableAPI';

import { SchedulesApiRequestFactory, SchedulesApiResponseProcessor} from "../apis/SchedulesApi";
export class PromiseSchedulesApi {
    private api: ObservableSchedulesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SchedulesApiRequestFactory,
        responseProcessor?: SchedulesApiResponseProcessor
    ) {
        this.api = new ObservableSchedulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
     * Create a schedule
     * @param scheduleCreateChangeset 
     */
    public createScheduleWithHttpInfo(scheduleCreateChangeset: ScheduleCreateChangeset, _options?: Configuration): Promise<HttpInfo<Array<Schedule>>> {
        const result = this.api.createScheduleWithHttpInfo(scheduleCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
     * Create a schedule
     * @param scheduleCreateChangeset 
     */
    public createSchedule(scheduleCreateChangeset: ScheduleCreateChangeset, _options?: Configuration): Promise<Array<Schedule>> {
        const result = this.api.createSchedule(scheduleCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Get a list of schedules for a provider.
     * Get all schedules
     * @param providerId 
     */
    public getSchedulesWithHttpInfo(providerId: string, _options?: Configuration): Promise<HttpInfo<Array<Schedule>>> {
        const result = this.api.getSchedulesWithHttpInfo(providerId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of schedules for a provider.
     * Get all schedules
     * @param providerId 
     */
    public getSchedules(providerId: string, _options?: Configuration): Promise<Array<Schedule>> {
        const result = this.api.getSchedules(providerId, _options);
        return result.toPromise();
    }

    /**
     * Remove a schedule by its ID.
     * Remove a schedule
     * @param id Schedule ID
     */
    public removeScheduleWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeScheduleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Remove a schedule by its ID.
     * Remove a schedule
     * @param id Schedule ID
     */
    public removeSchedule(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeSchedule(id, _options);
        return result.toPromise();
    }


}



import { ObservableServicesApi } from './ObservableAPI';

import { ServicesApiRequestFactory, ServicesApiResponseProcessor} from "../apis/ServicesApi";
export class PromiseServicesApi {
    private api: ObservableServicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServicesApiRequestFactory,
        responseProcessor?: ServicesApiResponseProcessor
    ) {
        this.api = new ObservableServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new service
     * Create a new service
     * @param serviceCreateChangeset 
     */
    public createServiceWithHttpInfo(serviceCreateChangeset: ServiceCreateChangeset, _options?: Configuration): Promise<HttpInfo<Array<Service>>> {
        const result = this.api.createServiceWithHttpInfo(serviceCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Creates a new service
     * Create a new service
     * @param serviceCreateChangeset 
     */
    public createService(serviceCreateChangeset: ServiceCreateChangeset, _options?: Configuration): Promise<Array<Service>> {
        const result = this.api.createService(serviceCreateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Returns a service by ID
     * Get a service
     * @param id Service ID
     */
    public getServiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Service>> {
        const result = this.api.getServiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a service by ID
     * Get a service
     * @param id Service ID
     */
    public getService(id: string, _options?: Configuration): Promise<Service> {
        const result = this.api.getService(id, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all services
     * Get all services
     */
    public getServicesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Service>>> {
        const result = this.api.getServicesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of all services
     * Get all services
     */
    public getServices(_options?: Configuration): Promise<Array<Service>> {
        const result = this.api.getServices(_options);
        return result.toPromise();
    }

    /**
     * Update a service by ID
     * Update a service
     * @param id Service ID
     * @param serviceUpdateChangeset 
     */
    public updateServiceWithHttpInfo(id: string, serviceUpdateChangeset: ServiceUpdateChangeset, _options?: Configuration): Promise<HttpInfo<Service>> {
        const result = this.api.updateServiceWithHttpInfo(id, serviceUpdateChangeset, _options);
        return result.toPromise();
    }

    /**
     * Update a service by ID
     * Update a service
     * @param id Service ID
     * @param serviceUpdateChangeset 
     */
    public updateService(id: string, serviceUpdateChangeset: ServiceUpdateChangeset, _options?: Configuration): Promise<Service> {
        const result = this.api.updateService(id, serviceUpdateChangeset, _options);
        return result.toPromise();
    }


}



