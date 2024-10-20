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
import type { RRuleSet } from './RRuleSet';
import {
    RRuleSetFromJSON,
    RRuleSetFromJSONTyped,
    RRuleSetToJSON,
} from './RRuleSet';

/**
 * 
 * @export
 * @interface ScheduleCreateChangeset
 */
export interface ScheduleCreateChangeset {
    /**
     * 
     * @type {Date}
     * @memberof ScheduleCreateChangeset
     */
    endTime: Date;
    /**
     * 
     * @type {string}
     * @memberof ScheduleCreateChangeset
     */
    providerId: string;
    /**
     * 
     * @type {RRuleSet}
     * @memberof ScheduleCreateChangeset
     */
    rruleSet: RRuleSet;
    /**
     * 
     * @type {Date}
     * @memberof ScheduleCreateChangeset
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ScheduleCreateChangeset
     */
    startTime: Date;
    /**
     * 
     * @type {string}
     * @memberof ScheduleCreateChangeset
     */
    timezone: string;
}

/**
 * Check if a given object implements the ScheduleCreateChangeset interface.
 */
export function instanceOfScheduleCreateChangeset(value: object): value is ScheduleCreateChangeset {
    if (!('endTime' in value) || value['endTime'] === undefined) return false;
    if (!('providerId' in value) || value['providerId'] === undefined) return false;
    if (!('rruleSet' in value) || value['rruleSet'] === undefined) return false;
    if (!('startTime' in value) || value['startTime'] === undefined) return false;
    if (!('timezone' in value) || value['timezone'] === undefined) return false;
    return true;
}

export function ScheduleCreateChangesetFromJSON(json: any): ScheduleCreateChangeset {
    return ScheduleCreateChangesetFromJSONTyped(json, false);
}

export function ScheduleCreateChangesetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleCreateChangeset {
    if (json == null) {
        return json;
    }
    return {
        
        'endTime': (new Date(json['end_time'])),
        'providerId': json['provider_id'],
        'rruleSet': RRuleSetFromJSON(json['rrule_set']),
        'startDate': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'startTime': (new Date(json['start_time'])),
        'timezone': json['timezone'],
    };
}

export function ScheduleCreateChangesetToJSON(value?: ScheduleCreateChangeset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'end_time': ((value['endTime']).toISOString()),
        'provider_id': value['providerId'],
        'rrule_set': RRuleSetToJSON(value['rruleSet']),
        'start_date': value['startDate'] == null ? undefined : ((value['startDate'] as any).toISOString()),
        'start_time': ((value['startTime']).toISOString()),
        'timezone': value['timezone'],
    };
}

