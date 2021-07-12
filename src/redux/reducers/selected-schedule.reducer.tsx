import IAction from "../../types/action.type";
import { ActionType } from "../../enum/action-type.enum";
import ISchedule from "../../types/schedule.type";

const initialState: ISchedule = null;

export const selectedSchedule = (state: ISchedule = initialState, action: IAction<ISchedule>): ISchedule => {
    switch(action.type) {
        case ActionType.SELECT_SCHEDULE: {
            return action.payload;
        }
        default:
            return state;
    }
};

export default selectedSchedule