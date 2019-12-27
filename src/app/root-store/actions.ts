import { Action } from '@ngrx/store';

export enum ActionTypes {
    GetItems = '[store] Get Items',
    SetItems = '[store] Set Items',
    Initialize = "[store] Initialize"
}
export class Initialize implements Action {
    readonly type = ActionTypes.Initialize;    
}
export class GetItems implements Action {
    readonly type = ActionTypes.GetItems;   
}
export class SetItems implements Action {
    readonly type = ActionTypes.SetItems;
    constructor(public payload: any ) { }
}
 
export type Actions = GetItems | SetItems | Initialize