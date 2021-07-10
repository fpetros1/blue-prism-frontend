export default interface ISchedule {
    
    id: number;
    name: string;
    description: string;
    isRetired: boolean;
    tasksCound: number;
    startPoint: Date;
    endPoint: Date;
    dayOfWeek: number;
    dayOfMonth: number;
    startDate: Date;
    endDate: Date;
    intervalType: string;
    timePeriod: string;

}