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
 * @interface ProviderCreateChangeset
 */
export interface ProviderCreateChangeset {
    /**
     * 
     * @type {string}
     * @memberof ProviderCreateChangeset
     */
    name: string;
}

/**
 * Check if a given object implements the ProviderCreateChangeset interface.
 */
export function instanceOfProviderCreateChangeset(value: object): value is ProviderCreateChangeset {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ProviderCreateChangesetFromJSON(json: any): ProviderCreateChangeset {
    return ProviderCreateChangesetFromJSONTyped(json, false);
}

export function ProviderCreateChangesetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderCreateChangeset {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function ProviderCreateChangesetToJSON(value?: ProviderCreateChangeset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

