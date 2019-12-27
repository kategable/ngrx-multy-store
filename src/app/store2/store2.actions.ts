import { Action } from '@ngrx/store';

export enum Store2ActionTypes {
    GetItems = '[store2] Get Items',
    SetItems = '[store2] Set Items'
}

export class GetItems implements Action {
    readonly type = Store2ActionTypes.GetItems;
    constructor() { }
}
export class SetItems implements Action {
    readonly type = Store2ActionTypes.SetItems;
    constructor(public payload: any ) { }
}
 
export type Store2Actions = GetItems | SetItems