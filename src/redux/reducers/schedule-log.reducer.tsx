import IAction from "../../types/action.type";
import { ActionType } from "../../enum/action-type.enum";
import IScheduleLog from "../../types/schedule-log.type";

const initialState: IScheduleLog[] = [];

export const scheduleLogs = (state: IScheduleLog[] = initialState, action: IAction<any>): IScheduleLog[] => {
    switch(action.type) {
        case ActionType.FETCH_SCHEDULE_LOGS: {
            return action.payload;
        }
        case ActionType.CLEAR_SCHEDULE_LOGS: {
            return initialState;
        }
        default:
            return state;
    }
};

export default scheduleLogs