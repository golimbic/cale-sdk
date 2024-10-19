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
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    endDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    endTime: Date;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    providerId: string;
    /**
     * 
     * @type {RRuleSet}
     * @memberof Schedule
     */
    rruleSet: RRuleSet;
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    startTime: Date;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    timezone: string;
}

/**
 * Check if a given object implements the Schedule interface.
 */
export function instanceOfSchedule(value: object): value is Schedule {
    if (!('endTime' in value) || value['endTime'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('providerId' in value) || value['providerId'] === undefined) return false;
    if (!('rruleSet' in value) || value['rruleSet'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('startTime' in value) || value['startTime'] === undefined) return false;
    if (!('timezone' in value) || value['timezone'] === undefined) return false;
    return true;
}

export function ScheduleFromJSON(json: any): Schedule {
    return ScheduleFromJSONTyped(json, false);
}

export function ScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schedule {
    if (json == null) {
        return json;
    }
    return {
        
        'endDate': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
        'endTime': (new Date(json['end_time'])),
        'id': json['id'],
        'providerId': json['provider_id'],
        'rruleSet': RRuleSetFromJSON(json['rrule_set']),
        'startDate': (new Date(json['start_date'])),
        'startTime': (new Date(json['start_time'])),
        'timezone': json['timezone'],
    };
}

export function ScheduleToJSON(value?: Schedule | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'end_date': value['endDate'] == null ? undefined : ((value['endDate'] as any).toISOString()),
        'end_time': ((value['endTime']).toISOString()),
        'id': value['id'],
        'provider_id': value['providerId'],
        'rrule_set': RRuleSetToJSON(value['rruleSet']),
        'start_date': ((value['startDate']).toISOString()),
        'start_time': ((value['startTime']).toISOString()),
        'timezone': value['timezone'],
    };
}

