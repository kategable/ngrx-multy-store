import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { exhaustMap, switchMap, map } from 'rxjs/operators';

import { ActionTypes } from './actions';
import * as StateActions from './actions';
import { Store } from '@ngrx/store'; 
import { State } from '.';


@Injectable()
export class RootEffects {

    constructor(
        private actions$: Actions,
        private store: Store<State>,) { }

    @Effect({dispatch:false})
    init$ = this.actions$.pipe(    
        ofType(ActionTypes.Initialize),
        map(() =>
            this.store.dispatch(new StateActions.GetItems())
        )
    );
    @Effect()
    getItem$ = this.actions$.pipe(
        ofType(ActionTypes.GetItems),
        exhaustMap(() =>
            of([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }, { id: 4, name: 'name4' }, { id: 5, name: 'name5' }]).pipe(
                map((data)=> 
                    new StateActions.SetItems(data)
                )
            )
        )
    );
}