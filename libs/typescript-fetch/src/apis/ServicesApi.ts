/* tslint:disable */
/* eslint-disable */
/**
 * Cale API
 *  # About cale.app provides a scheduling API that helps developers to integrate scheduling features into their applications. 
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Service,
  ServiceCreateChangeset,
  ServiceUpdateChangeset,
} from '../models/index';
import {
    ServiceFromJSON,
    ServiceToJSON,
    ServiceCreateChangesetFromJSON,
    ServiceCreateChangesetToJSON,
    ServiceUpdateChangesetFromJSON,
    ServiceUpdateChangesetToJSON,
} from '../models/index';

export interface CreateServiceRequest {
    serviceCreateChangeset: ServiceCreateChangeset;
}

export interface GetServiceRequest {
    id: string;
}

export interface UpdateServiceRequest {
    id: string;
    serviceUpdateChangeset: ServiceUpdateChangeset;
}

/**
 * 
 */
export class ServicesApi extends runtime.BaseAPI {

    /**
     * Creates a new service
     * Create a new service
     */
    async createServiceRaw(requestParameters: CreateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Service>>> {
        if (requestParameters['serviceCreateChangeset'] == null) {
            throw new runtime.RequiredError(
                'serviceCreateChangeset',
                'Required parameter "serviceCreateChangeset" was null or undefined when calling createService().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // cale_api_key authentication
        }

        const response = await this.request({
            path: `/services`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ServiceCreateChangesetToJSON(requestParameters['serviceCreateChangeset']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ServiceFromJSON));
    }

    /**
     * Creates a new service
     * Create a new service
     */
    async createService(requestParameters: CreateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Service>> {
        const response = await this.createServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a service by ID
     * Get a service
     */
    async getServiceRaw(requestParameters: GetServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Service>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getService().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // cale_api_key authentication
        }

        const response = await this.request({
            path: `/services/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceFromJSON(jsonValue));
    }

    /**
     * Returns a service by ID
     * Get a service
     */
    async getService(requestParameters: GetServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Service> {
        const response = await this.getServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all services
     * Get all services
     */
    async getServicesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Service>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // cale_api_key authentication
        }

        const response = await this.request({
            path: `/services`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ServiceFromJSON));
    }

    /**
     * Returns a list of all services
     * Get all services
     */
    async getServices(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Service>> {
        const response = await this.getServicesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update a service by ID
     * Update a service
     */
    async updateServiceRaw(requestParameters: UpdateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Service>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateService().'
            );
        }

        if (requestParameters['serviceUpdateChangeset'] == null) {
            throw new runtime.RequiredError(
                'serviceUpdateChangeset',
                'Required parameter "serviceUpdateChangeset" was null or undefined when calling updateService().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // cale_api_key authentication
        }

        const response = await this.request({
            path: `/services/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ServiceUpdateChangesetToJSON(requestParameters['serviceUpdateChangeset']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceFromJSON(jsonValue));
    }

    /**
     * Update a service by ID
     * Update a service
     */
    async updateService(requestParameters: UpdateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Service> {
        const response = await this.updateServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
