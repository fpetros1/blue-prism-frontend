import IScheduleJobs from "./schedule-jobs.type";
import ScheduleState from "../state/schedule.state";
import ISchedule from "./schedule.type";

export default class IAppState {

    schedules: ISchedule[];
    scheduleJobs: IScheduleJobs[];

}