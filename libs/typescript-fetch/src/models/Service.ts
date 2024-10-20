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
import type { Status } from './Status';
import {
    StatusFromJSON,
    StatusFromJSONTyped,
    StatusToJSON,
} from './Status';

/**
 * 
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * 
     * @type {Date}
     * @memberof Service
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    name: string;
    /**
     * 
     * @type {Status}
     * @memberof Service
     */
    status: Status;
    /**
     * 
     * @type {Date}
     * @memberof Service
     */
    updatedAt: Date;
}



/**
 * Check if a given object implements the Service interface.
 */
export function instanceOfService(value: object): value is Service {
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ServiceFromJSON(json: any): Service {
    return ServiceFromJSONTyped(json, false);
}

export function ServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Service {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'status': StatusFromJSON(json['status']),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function ServiceToJSON(value?: Service | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['createdAt']).toISOString()),
        'id': value['id'],
        'name': value['name'],
        'status': StatusToJSON(value['status']),
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

