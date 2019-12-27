import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
 
import { of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';  
import { Store2ActionTypes } from './store2.actions';
import * as Store2StateActions from './store2.actions';

@Injectable()
export class Store2Effects {

    constructor(
        private actions$: Actions) { }

    @Effect()
    getItem$ = this.actions$.pipe(
        ofType(Store2ActionTypes.GetItems),
        exhaustMap(() =>
            of([{ id: 1, name: '11' }, { id: 2, name: '22' }, { id: 3, name: '33' }, { id: 4, name: '44' }, { id: 5, name: '55' }]).pipe(
                map((data)=> 
                new Store2StateActions.SetItems(data)
            )
            )
        )
    );
}