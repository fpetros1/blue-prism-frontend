import { AxiosResponse } from 'axios';
import {toastr} from 'react-redux-toastr'

import { ActionType } from '../../enum/action-type.enum';
import ISchedule from '../../types/schedule.type';
import httpClient from '../../shared/http-client';
import { clearScheduleLogs, fetchScheduleLogs } from './schedule-log.actions';
import { environment } from '../../environment/environment';

const baseUrl = `${environment.apiBaseUrl}/schedules`;

export const fetchAllSchedules = () => {
    return (dispatch: any) => {
        return httpClient.get<ISchedule[]>(baseUrl).then((response: AxiosResponse<ISchedule[]>) => {
            dispatch({type: ActionType.FETCH_SCHEDULES, payload: response.data});
        }).catch((error: Error) => {
            toastr.error('Error', 'The server might not be available');
        });
    }
};

export const selectSchedule = (schedule: ISchedule) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.SELECT_SCHEDULE,
            payload: schedule
        });
        dispatch(fetchScheduleLogs(schedule.id));
    };
};

export const unselectSchedule = (schedule: ISchedule) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.SELECT_SCHEDULE,
            payload: null
        });

        dispatch(clearScheduleLogs());
    };
}

export const toggleRetireSchedule = (schedule: ISchedule) => {
    return (dispatch: any) => {
        schedule.isRetired = !schedule.isRetired;
        const url = `${baseUrl}/${schedule.id}`
        const request = httpClient.put(url, schedule);
        return request.then((response: AxiosResponse<ISchedule>) => {
            toastr.success('Operation Sucessful', '');
            dispatch(fetchAllSchedules());
        }).catch((error: Error) => {
            toastr.error('Error', 'The server might not be available');
        });
    };
}

