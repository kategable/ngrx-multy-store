import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
 
import { of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';  
import { Store1ActionTypes } from './store1.actions';
import * as Store1StateActions from './store1.actions';

@Injectable()
export class Store1Effects {

    constructor(
        private actions$: Actions) { }

    @Effect()
    getItem$ = this.actions$.pipe(
        ofType(Store1ActionTypes.GetItems),
        exhaustMap(() =>
            of([{ id: 1, name: 'Home1' }, { id: 2, name: 'home2' }, { id: 3, name: 'home3' }, { id: 4, name: 'home4' }, { id: 5, name: '5' }]).pipe(
                map((data)=> 
                new Store1StateActions.SetItems(data)
            )
            )
        )
    );
}