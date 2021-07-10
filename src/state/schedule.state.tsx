import ISchedule from '../types/schedule.type';

export default class ScheduleState {

    private _schedules: ISchedule[];

    constructor(schedules?: ISchedule[]) {
        this._schedules = schedules || [];
    }

    public get schedules(): ISchedule[] {
        return this._schedules;
    }

}
