export default interface ISchedule {
    
    id: number;
    name: string;
    description: string;
    isRetired: boolean;
    tasksCount: number;
    startPoint: string;
    endPoint: string;
    dayOfWeek: number;
    dayOfMonth: number;
    startDate: string;
    endDate: string;
    intervalType: string;
    timePeriod: number;

}