import IAction from "../../types/action.type";
import { ActionType } from "../../enum/action-type.enum";
import ISchedule from "../../types/schedule.type";

const initialState: ISchedule[] = [];

export const schedules = (state: ISchedule[] = initialState, action: IAction<any>): ISchedule[] => {
    switch(action.type) {
        case ActionType.FETCH_SCHEDULES: {
            return action.payload;
        }
        default:
            return state;
    }
};

export default schedules