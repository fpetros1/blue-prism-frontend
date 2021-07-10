import IAction from "../../types/action.type";
import ISchedule from "../../types/schedule.type";

export default class ScheduleListProps {

    schedules: ISchedule[] = [];
    fetchAllSchedules: () => any;

}
