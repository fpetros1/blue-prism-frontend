import IScheduleLog from "../../types/schedule-log.type";
import ISchedule from "../../types/schedule.type";

export default class IScheduleLogListProps {

    scheduleLogs: IScheduleLog[] = [];
    selectedSchedule?: ISchedule;
    fetchScheduleLogs: (scheduleId: number) => void;

}
