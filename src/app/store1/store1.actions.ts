import { Action } from '@ngrx/store';

export enum Store1ActionTypes {
    GetItems = '[store1] Get Items',
    SetItems = '[store1] Set Items'
}

export class GetItems implements Action {
    readonly type = Store1ActionTypes.GetItems;
    constructor() { }
}
export class SetItems implements Action {
    readonly type = Store1ActionTypes.SetItems;
    constructor(public payload: any ) { }
}
 
export type Store1Actions = GetItems | SetItems