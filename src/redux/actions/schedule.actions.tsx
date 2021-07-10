import { ActionType } from '../../enum/action-type.enum';
import ISchedule from '../../types/schedule.type';
import httpClient from '../../shared/http-client';
import { AxiosResponse } from 'axios';

export const fetchAllSchedules = () => {
    return (dispatch: any) => {
        return httpClient.get<ISchedule[]>('http://localhost:3000/schedules').then((response: AxiosResponse<ISchedule[]>) => {
            dispatch({type: ActionType.FETCH_SCHEDULES, payload: response.data});
        });
    }
};