import { AxiosResponse } from 'axios';
import {toastr} from 'react-redux-toastr'

import { ActionType } from '../../enum/action-type.enum';
import IScheduleLog from '../../types/schedule-log.type';
import httpClient from '../../shared/http-client';
import { environment } from '../../environment/environment';

const baseUrl = `${environment.apiBaseUrl}/scheduleLogs`;

export const fetchAllScheduleLogs = () => {
    return (dispatch: any) => {
        return httpClient.get<IScheduleLog[]>(baseUrl).then((response: AxiosResponse<IScheduleLog[]>) => {
            dispatch({type: ActionType.FETCH_SCHEDULE_LOGS, payload: response.data});
        }).catch((error: Error) => {
            toastr.error('Error', 'The server might not be available')
        });
    }
};

export const fetchScheduleLogs = (scheduleId: number) => {
    return (dispatch: any) => {

        const request = httpClient.get<IScheduleLog[]>(baseUrl, {
            scheduleId
        });

        return request.then((response: AxiosResponse<IScheduleLog[]>) => {
            dispatch({type: ActionType.FETCH_SCHEDULE_LOGS, payload: response.data});
        }).catch((error: Error) => {
            toastr.error('Error', 'The server might not be available')
        });
    }
};

export const clearScheduleLogs = () => {
    return {
        type: ActionType.CLEAR_SCHEDULE_LOGS
    };
}