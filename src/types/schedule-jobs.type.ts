export default interface IScheduleJobs {

    id: number;
    startTime: Date;
    endTime: Date;
    status: string;
    serverName: string;
    scheduleId: number;

}