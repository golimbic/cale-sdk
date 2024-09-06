import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class ObservableCustomersApi {
    private requestFactory: CustomersApiRequestFactory;
    private responseProcessor: CustomersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApiResponseProcessor();
    }

    /**
     * Create a new customer
     * Create a customer
     * @param customerChangeset 
     */
    public createCustomerWithHttpInfo(customerChangeset: CustomerChangeset, _options?: Configuration): Observable<HttpInfo<Customer>> {
        const requestContextPromise = this.requestFactory.createCustomer(customerChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new customer
     * Create a customer
     * @param customerChangeset 
     */
    public createCustomer(customerChangeset: CustomerChangeset, _options?: Configuration): Observable<Customer> {
        return this.createCustomerWithHttpInfo(customerChangeset, _options).pipe(map((apiResponse: HttpInfo<Customer>) => apiResponse.data));
    }

    /**
     * Returns a customer by ID
     * Get a customer
     * @param id Customer ID
     */
    public getCustomerWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Customer>> {
        const requestContextPromise = this.requestFactory.getCustomer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a customer by ID
     * Get a customer
     * @param id Customer ID
     */
    public getCustomer(id: string, _options?: Configuration): Observable<Customer> {
        return this.getCustomerWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Customer>) => apiResponse.data));
    }

    /**
     * Returns a list of all customers
     * Get all customers
     */
    public listCustomersWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Customer>>> {
        const requestContextPromise = this.requestFactory.listCustomers(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all customers
     * Get all customers
     */
    public listCustomers(_options?: Configuration): Observable<Array<Customer>> {
        return this.listCustomersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Customer>>) => apiResponse.data));
    }

    /**
     * Remove a customer by ID
     * Remove a customer
     * @param id Customer ID
     */
    public removeCustomerWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeCustomer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a customer by ID
     * Remove a customer
     * @param id Customer ID
     */
    public removeCustomer(id: string, _options?: Configuration): Observable<void> {
        return this.removeCustomerWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a customer by ID
     * Update a customer
     * @param id 
     * @param customerChangeset 
     */
    public updateCustomerWithHttpInfo(id: string, customerChangeset: CustomerChangeset, _options?: Configuration): Observable<HttpInfo<Customer>> {
        const requestContextPromise = this.requestFactory.updateCustomer(id, customerChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a customer by ID
     * Update a customer
     * @param id 
     * @param customerChangeset 
     */
    public updateCustomer(id: string, customerChangeset: CustomerChangeset, _options?: Configuration): Observable<Customer> {
        return this.updateCustomerWithHttpInfo(id, customerChangeset, _options).pipe(map((apiResponse: HttpInfo<Customer>) => apiResponse.data));
    }

}

import { HealthCheckApiRequestFactory, HealthCheckApiResponseProcessor} from "../apis/HealthCheckApi";
export class ObservableHealthCheckApi {
    private requestFactory: HealthCheckApiRequestFactory;
    private responseProcessor: HealthCheckApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthCheckApiRequestFactory,
        responseProcessor?: HealthCheckApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthCheckApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthCheckApiResponseProcessor();
    }

    /**
     * This endpoint is used to check if the service is healthy.
     * Check if service is healthy
     */
    public handleGetHealthWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.handleGetHealth(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.handleGetHealthWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is used to check if the service is healthy.
     * Check if service is healthy
     */
    public handleGetHealth(_options?: Configuration): Observable<void> {
        return this.handleGetHealthWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class ObservableOffersApi {
    private requestFactory: OffersApiRequestFactory;
    private responseProcessor: OffersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OffersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OffersApiResponseProcessor();
    }

    /**
     * Creates a new provider\'s offer for a service
     * Create a new offer
     * @param providerOfferCreateChangeset 
     */
    public createOfferWithHttpInfo(providerOfferCreateChangeset: ProviderOfferCreateChangeset, _options?: Configuration): Observable<HttpInfo<Array<Offer>>> {
        const requestContextPromise = this.requestFactory.createOffer(providerOfferCreateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new provider\'s offer for a service
     * Create a new offer
     * @param providerOfferCreateChangeset 
     */
    public createOffer(providerOfferCreateChangeset: ProviderOfferCreateChangeset, _options?: Configuration): Observable<Array<Offer>> {
        return this.createOfferWithHttpInfo(providerOfferCreateChangeset, _options).pipe(map((apiResponse: HttpInfo<Array<Offer>>) => apiResponse.data));
    }

    /**
     * Returns an offer by ID
     * Get an offer
     * @param id Offer ID
     */
    public getOfferWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Offer>> {
        const requestContextPromise = this.requestFactory.getOffer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an offer by ID
     * Get an offer
     * @param id Offer ID
     */
    public getOffer(id: string, _options?: Configuration): Observable<Offer> {
        return this.getOfferWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Offer>) => apiResponse.data));
    }

    /**
     * Returns a list of all offers based on the query parameters
     * Get all offers
     * @param providerId 
     * @param serviceId 
     */
    public getOffersWithHttpInfo(providerId?: string, serviceId?: string, _options?: Configuration): Observable<HttpInfo<Array<Offer>>> {
        const requestContextPromise = this.requestFactory.getOffers(providerId, serviceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOffersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all offers based on the query parameters
     * Get all offers
     * @param providerId 
     * @param serviceId 
     */
    public getOffers(providerId?: string, serviceId?: string, _options?: Configuration): Observable<Array<Offer>> {
        return this.getOffersWithHttpInfo(providerId, serviceId, _options).pipe(map((apiResponse: HttpInfo<Array<Offer>>) => apiResponse.data));
    }

    /**
     * Returns a list of available time slots for an offer
     * Get slots for an offer
     * @param id Offer ID
     * @param _from The start time to get slots from, defaults to now
     * @param until The end time to get slots until, defaults to 30 days from &#x60;from&#x60;
     */
    public getSlotsWithHttpInfo(id: string, _from?: Date, until?: Date, _options?: Configuration): Observable<HttpInfo<SlotsPayload>> {
        const requestContextPromise = this.requestFactory.getSlots(id, _from, until, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSlotsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of available time slots for an offer
     * Get slots for an offer
     * @param id Offer ID
     * @param _from The start time to get slots from, defaults to now
     * @param until The end time to get slots until, defaults to 30 days from &#x60;from&#x60;
     */
    public getSlots(id: string, _from?: Date, until?: Date, _options?: Configuration): Observable<SlotsPayload> {
        return this.getSlotsWithHttpInfo(id, _from, until, _options).pipe(map((apiResponse: HttpInfo<SlotsPayload>) => apiResponse.data));
    }

    /**
     * Removes an offer by ID
     * Remove an offer
     * @param id Offer ID
     */
    public removeOfferWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeOffer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an offer by ID
     * Remove an offer
     * @param id Offer ID
     */
    public removeOffer(id: string, _options?: Configuration): Observable<void> {
        return this.removeOfferWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi";
export class ObservableProvidersApi {
    private requestFactory: ProvidersApiRequestFactory;
    private responseProcessor: ProvidersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProvidersApiRequestFactory,
        responseProcessor?: ProvidersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProvidersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProvidersApiResponseProcessor();
    }

    /**
     * Create a new provider
     * Create a provider
     * @param providerCreateChangeset 
     */
    public createProviderWithHttpInfo(providerCreateChangeset: ProviderCreateChangeset, _options?: Configuration): Observable<HttpInfo<Array<Provider>>> {
        const requestContextPromise = this.requestFactory.createProvider(providerCreateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProviderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new provider
     * Create a provider
     * @param providerCreateChangeset 
     */
    public createProvider(providerCreateChangeset: ProviderCreateChangeset, _options?: Configuration): Observable<Array<Provider>> {
        return this.createProviderWithHttpInfo(providerCreateChangeset, _options).pipe(map((apiResponse: HttpInfo<Array<Provider>>) => apiResponse.data));
    }

    /**
     * Returns a provider by ID
     * Get a provider
     * @param id Provider ID
     */
    public getProviderWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Provider>> {
        const requestContextPromise = this.requestFactory.getProvider(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProviderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a provider by ID
     * Get a provider
     * @param id Provider ID
     */
    public getProvider(id: string, _options?: Configuration): Observable<Provider> {
        return this.getProviderWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Provider>) => apiResponse.data));
    }

    /**
     * Returns a list of all providers
     * Get all providers
     */
    public getProvidersWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Provider>>> {
        const requestContextPromise = this.requestFactory.getProviders(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProvidersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all providers
     * Get all providers
     */
    public getProviders(_options?: Configuration): Observable<Array<Provider>> {
        return this.getProvidersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Provider>>) => apiResponse.data));
    }

    /**
     * Update a provider by ID
     * Update a provider
     * @param id Provider ID
     * @param providerUpdateChangeset 
     */
    public updateProviderWithHttpInfo(id: string, providerUpdateChangeset: ProviderUpdateChangeset, _options?: Configuration): Observable<HttpInfo<Provider>> {
        const requestContextPromise = this.requestFactory.updateProvider(id, providerUpdateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProviderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a provider by ID
     * Update a provider
     * @param id Provider ID
     * @param providerUpdateChangeset 
     */
    public updateProvider(id: string, providerUpdateChangeset: ProviderUpdateChangeset, _options?: Configuration): Observable<Provider> {
        return this.updateProviderWithHttpInfo(id, providerUpdateChangeset, _options).pipe(map((apiResponse: HttpInfo<Provider>) => apiResponse.data));
    }

}

import { ReservationsApiRequestFactory, ReservationsApiResponseProcessor} from "../apis/ReservationsApi";
export class ObservableReservationsApi {
    private requestFactory: ReservationsApiRequestFactory;
    private responseProcessor: ReservationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReservationsApiRequestFactory,
        responseProcessor?: ReservationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReservationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReservationsApiResponseProcessor();
    }

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param createChangeset 
     */
    public createReservationWithHttpInfo(createChangeset: CreateChangeset, _options?: Configuration): Observable<HttpInfo<Reservation>> {
        const requestContextPromise = this.requestFactory.createReservation(createChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReservationWithHttpInfo(rsp)));
            }));
    }

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param createChangeset 
     */
    public createReservation(createChangeset: CreateChangeset, _options?: Configuration): Observable<Reservation> {
        return this.createReservationWithHttpInfo(createChangeset, _options).pipe(map((apiResponse: HttpInfo<Reservation>) => apiResponse.data));
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param id Reservation ID
     */
    public getReservationWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Reservation>> {
        const requestContextPromise = this.requestFactory.getReservation(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReservationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param id Reservation ID
     */
    public getReservation(id: string, _options?: Configuration): Observable<Reservation> {
        return this.getReservationWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Reservation>) => apiResponse.data));
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
    public listReservationsWithHttpInfo(fromTime: Date, untilTime: Date, status?: Status, customerId?: string, providerId?: string, offerId?: string, serviceId?: string, _options?: Configuration): Observable<HttpInfo<Array<Reservation>>> {
        const requestContextPromise = this.requestFactory.listReservations(fromTime, untilTime, status, customerId, providerId, offerId, serviceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listReservationsWithHttpInfo(rsp)));
            }));
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
    public listReservations(fromTime: Date, untilTime: Date, status?: Status, customerId?: string, providerId?: string, offerId?: string, serviceId?: string, _options?: Configuration): Observable<Array<Reservation>> {
        return this.listReservationsWithHttpInfo(fromTime, untilTime, status, customerId, providerId, offerId, serviceId, _options).pipe(map((apiResponse: HttpInfo<Array<Reservation>>) => apiResponse.data));
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param id Reservation ID
     * @param reservationUpdateChangeset 
     */
    public updateReservationWithHttpInfo(id: string, reservationUpdateChangeset: ReservationUpdateChangeset, _options?: Configuration): Observable<HttpInfo<Reservation>> {
        const requestContextPromise = this.requestFactory.updateReservation(id, reservationUpdateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateReservationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param id Reservation ID
     * @param reservationUpdateChangeset 
     */
    public updateReservation(id: string, reservationUpdateChangeset: ReservationUpdateChangeset, _options?: Configuration): Observable<Reservation> {
        return this.updateReservationWithHttpInfo(id, reservationUpdateChangeset, _options).pipe(map((apiResponse: HttpInfo<Reservation>) => apiResponse.data));
    }

}

import { SchedulesApiRequestFactory, SchedulesApiResponseProcessor} from "../apis/SchedulesApi";
export class ObservableSchedulesApi {
    private requestFactory: SchedulesApiRequestFactory;
    private responseProcessor: SchedulesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SchedulesApiRequestFactory,
        responseProcessor?: SchedulesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SchedulesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SchedulesApiResponseProcessor();
    }

    /**
     * Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
     * Create a schedule
     * @param scheduleCreateChangeset 
     */
    public createScheduleWithHttpInfo(scheduleCreateChangeset: ScheduleCreateChangeset, _options?: Configuration): Observable<HttpInfo<Array<Schedule>>> {
        const requestContextPromise = this.requestFactory.createSchedule(scheduleCreateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createScheduleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a schedule for a provider. RRULE is a string that represents a recurrence rule as defined in [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
     * Create a schedule
     * @param scheduleCreateChangeset 
     */
    public createSchedule(scheduleCreateChangeset: ScheduleCreateChangeset, _options?: Configuration): Observable<Array<Schedule>> {
        return this.createScheduleWithHttpInfo(scheduleCreateChangeset, _options).pipe(map((apiResponse: HttpInfo<Array<Schedule>>) => apiResponse.data));
    }

    /**
     * Get a list of schedules for a provider.
     * Get all schedules
     * @param providerId 
     */
    public getSchedulesWithHttpInfo(providerId: string, _options?: Configuration): Observable<HttpInfo<Array<Schedule>>> {
        const requestContextPromise = this.requestFactory.getSchedules(providerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSchedulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of schedules for a provider.
     * Get all schedules
     * @param providerId 
     */
    public getSchedules(providerId: string, _options?: Configuration): Observable<Array<Schedule>> {
        return this.getSchedulesWithHttpInfo(providerId, _options).pipe(map((apiResponse: HttpInfo<Array<Schedule>>) => apiResponse.data));
    }

    /**
     * Remove a schedule by its ID.
     * Remove a schedule
     * @param id Schedule ID
     */
    public removeScheduleWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeSchedule(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeScheduleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a schedule by its ID.
     * Remove a schedule
     * @param id Schedule ID
     */
    public removeSchedule(id: string, _options?: Configuration): Observable<void> {
        return this.removeScheduleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ServicesApiRequestFactory, ServicesApiResponseProcessor} from "../apis/ServicesApi";
export class ObservableServicesApi {
    private requestFactory: ServicesApiRequestFactory;
    private responseProcessor: ServicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ServicesApiRequestFactory,
        responseProcessor?: ServicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServicesApiResponseProcessor();
    }

    /**
     * Creates a new service
     * Create a new service
     * @param serviceCreateChangeset 
     */
    public createServiceWithHttpInfo(serviceCreateChangeset: ServiceCreateChangeset, _options?: Configuration): Observable<HttpInfo<Array<Service>>> {
        const requestContextPromise = this.requestFactory.createService(serviceCreateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createServiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new service
     * Create a new service
     * @param serviceCreateChangeset 
     */
    public createService(serviceCreateChangeset: ServiceCreateChangeset, _options?: Configuration): Observable<Array<Service>> {
        return this.createServiceWithHttpInfo(serviceCreateChangeset, _options).pipe(map((apiResponse: HttpInfo<Array<Service>>) => apiResponse.data));
    }

    /**
     * Returns a service by ID
     * Get a service
     * @param id Service ID
     */
    public getServiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Service>> {
        const requestContextPromise = this.requestFactory.getService(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a service by ID
     * Get a service
     * @param id Service ID
     */
    public getService(id: string, _options?: Configuration): Observable<Service> {
        return this.getServiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Service>) => apiResponse.data));
    }

    /**
     * Returns a list of all services
     * Get all services
     */
    public getServicesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Service>>> {
        const requestContextPromise = this.requestFactory.getServices(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all services
     * Get all services
     */
    public getServices(_options?: Configuration): Observable<Array<Service>> {
        return this.getServicesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Service>>) => apiResponse.data));
    }

    /**
     * Update a service by ID
     * Update a service
     * @param id Service ID
     * @param serviceUpdateChangeset 
     */
    public updateServiceWithHttpInfo(id: string, serviceUpdateChangeset: ServiceUpdateChangeset, _options?: Configuration): Observable<HttpInfo<Service>> {
        const requestContextPromise = this.requestFactory.updateService(id, serviceUpdateChangeset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateServiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a service by ID
     * Update a service
     * @param id Service ID
     * @param serviceUpdateChangeset 
     */
    public updateService(id: string, serviceUpdateChangeset: ServiceUpdateChangeset, _options?: Configuration): Observable<Service> {
        return this.updateServiceWithHttpInfo(id, serviceUpdateChangeset, _options).pipe(map((apiResponse: HttpInfo<Service>) => apiResponse.data));
    }

}
