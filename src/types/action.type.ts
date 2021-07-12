import { ActionType } from "../enum/action-type.enum";

export default interface IAction<T> {

    payload?: T;
    type: ActionType;

}
