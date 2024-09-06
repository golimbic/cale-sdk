// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateChangeset } from '../models/CreateChangeset';
import { Reservation } from '../models/Reservation';
import { ReservationUpdateChangeset } from '../models/ReservationUpdateChangeset';
import { Status } from '../models/Status';

/**
 * no description
 */
export class ReservationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * When a reservation is created, it is in a `hold` status. It\'s up to the application to decide when to transition the reservation to a `confirmed` status and how long to keep it in a `hold` status.
     * Create a reservation hold
     * @param createChangeset 
     */
    public async createReservation(createChangeset: CreateChangeset, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createChangeset' is not null or undefined
        if (createChangeset === null || createChangeset === undefined) {
            throw new RequiredError("ReservationsApi", "createReservation", "createChangeset");
        }


        // Path Params
        const localVarPath = '/reservations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createChangeset, "CreateChangeset", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["cale_api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a reservation by its ID.
     * Get a reservation
     * @param id Reservation ID
     */
    public async getReservation(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReservationsApi", "getReservation", "id");
        }


        // Path Params
        const localVarPath = '/reservations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["cale_api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async listReservations(fromTime: Date, untilTime: Date, status?: Status, customerId?: string, providerId?: string, offerId?: string, serviceId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromTime' is not null or undefined
        if (fromTime === null || fromTime === undefined) {
            throw new RequiredError("ReservationsApi", "listReservations", "fromTime");
        }


        // verify required parameter 'untilTime' is not null or undefined
        if (untilTime === null || untilTime === undefined) {
            throw new RequiredError("ReservationsApi", "listReservations", "untilTime");
        }







        // Path Params
        const localVarPath = '/reservations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromTime !== undefined) {
            requestContext.setQueryParam("from_time", ObjectSerializer.serialize(fromTime, "Date", "date-time"));
        }

        // Query Params
        if (untilTime !== undefined) {
            requestContext.setQueryParam("until_time", ObjectSerializer.serialize(untilTime, "Date", "date-time"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Status", ""));
        }

        // Query Params
        if (customerId !== undefined) {
            requestContext.setQueryParam("customer_id", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (providerId !== undefined) {
            requestContext.setQueryParam("provider_id", ObjectSerializer.serialize(providerId, "string", ""));
        }

        // Query Params
        if (offerId !== undefined) {
            requestContext.setQueryParam("offer_id", ObjectSerializer.serialize(offerId, "string", ""));
        }

        // Query Params
        if (serviceId !== undefined) {
            requestContext.setQueryParam("service_id", ObjectSerializer.serialize(serviceId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["cale_api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a reservation by its ID. Use this endpoint to transition a reservation from a `hold` and assign a customer to it.
     * Update a reservation
     * @param id Reservation ID
     * @param reservationUpdateChangeset 
     */
    public async updateReservation(id: string, reservationUpdateChangeset: ReservationUpdateChangeset, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReservationsApi", "updateReservation", "id");
        }


        // verify required parameter 'reservationUpdateChangeset' is not null or undefined
        if (reservationUpdateChangeset === null || reservationUpdateChangeset === undefined) {
            throw new RequiredError("ReservationsApi", "updateReservation", "reservationUpdateChangeset");
        }


        // Path Params
        const localVarPath = '/reservations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reservationUpdateChangeset, "ReservationUpdateChangeset", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["cale_api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ReservationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createReservation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createReservationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Reservation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Reservation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Reservation", ""
            ) as Reservation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Reservation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Reservation", ""
            ) as Reservation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReservation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReservationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Reservation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Reservation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Reservation", ""
            ) as Reservation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Reservation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Reservation", ""
            ) as Reservation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReservations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listReservationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Reservation> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Reservation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Reservation>", ""
            ) as Array<Reservation>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Reservation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Reservation>", ""
            ) as Array<Reservation>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateReservation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateReservationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Reservation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Reservation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Reservation", ""
            ) as Reservation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Reservation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Reservation", ""
            ) as Reservation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
