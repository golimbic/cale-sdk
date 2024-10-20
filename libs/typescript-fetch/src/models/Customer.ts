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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {Date}
     * @memberof Customer
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    tenantId: string;
}

/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): value is Customer {
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('tenantId' in value) || value['tenantId'] === undefined) return false;
    return true;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'email': json['email'] == null ? undefined : json['email'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'id': json['id'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'tenantId': json['tenant_id'],
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['createdAt']).toISOString()),
        'email': value['email'],
        'first_name': value['firstName'],
        'id': value['id'],
        'last_name': value['lastName'],
        'phone': value['phone'],
        'tenant_id': value['tenantId'],
    };
}

