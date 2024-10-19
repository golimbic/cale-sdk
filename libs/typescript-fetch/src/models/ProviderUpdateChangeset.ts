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
 * @interface ProviderUpdateChangeset
 */
export interface ProviderUpdateChangeset {
    /**
     * 
     * @type {string}
     * @memberof ProviderUpdateChangeset
     */
    name: string;
    /**
     * 
     * @type {Status}
     * @memberof ProviderUpdateChangeset
     */
    status: Status;
}



/**
 * Check if a given object implements the ProviderUpdateChangeset interface.
 */
export function instanceOfProviderUpdateChangeset(value: object): value is ProviderUpdateChangeset {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ProviderUpdateChangesetFromJSON(json: any): ProviderUpdateChangeset {
    return ProviderUpdateChangesetFromJSONTyped(json, false);
}

export function ProviderUpdateChangesetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderUpdateChangeset {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'status': StatusFromJSON(json['status']),
    };
}

export function ProviderUpdateChangesetToJSON(value?: ProviderUpdateChangeset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'status': StatusToJSON(value['status']),
    };
}

