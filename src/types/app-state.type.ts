import IScheduleLog from "./schedule-log.type";
import ScheduleState from "../state/schedule.state";
import ISchedule from "./schedule.type";

export default class IAppState {

    schedules: ISchedule[];
    selectedSchedule: ISchedule;
    scheduleLogs: IScheduleLog[];

}