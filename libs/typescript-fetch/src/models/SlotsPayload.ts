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
import type { Slot } from './Slot';
import {
    SlotFromJSON,
    SlotFromJSONTyped,
    SlotToJSON,
} from './Slot';

/**
 * 
 * @export
 * @interface SlotsPayload
 */
export interface SlotsPayload {
    /**
     * 
     * @type {number}
     * @memberof SlotsPayload
     */
    duration: number;
    /**
     * 
     * @type {string}
     * @memberof SlotsPayload
     */
    offer: string;
    /**
     * 
     * @type {Array<Slot>}
     * @memberof SlotsPayload
     */
    slots: Array<Slot>;
}

/**
 * Check if a given object implements the SlotsPayload interface.
 */
export function instanceOfSlotsPayload(value: object): value is SlotsPayload {
    if (!('duration' in value) || value['duration'] === undefined) return false;
    if (!('offer' in value) || value['offer'] === undefined) return false;
    if (!('slots' in value) || value['slots'] === undefined) return false;
    return true;
}

export function SlotsPayloadFromJSON(json: any): SlotsPayload {
    return SlotsPayloadFromJSONTyped(json, false);
}

export function SlotsPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): SlotsPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'offer': json['offer'],
        'slots': ((json['slots'] as Array<any>).map(SlotFromJSON)),
    };
}

export function SlotsPayloadToJSON(value?: SlotsPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'duration': value['duration'],
        'offer': value['offer'],
        'slots': ((value['slots'] as Array<any>).map(SlotToJSON)),
    };
}

