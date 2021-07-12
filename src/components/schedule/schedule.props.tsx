import ISchedule from "../../types/schedule.type";

export default interface IScheduleProps {

    schedule: ISchedule;
    selectedSchedule: ISchedule;

    selectSchedule: (schedule: ISchedule) => void;
    toggleRetireSchedule: (schedule: ISchedule) => void;
    unselectSchedule: () => void;

}