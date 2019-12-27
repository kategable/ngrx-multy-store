
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeature from './state' 
import * as fromRedFeature from './reducer'  

export interface State {
    app: fromFeature.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    app: fromRedFeature.filteredReducer,
  };
  
  const getFeatureState = createFeatureSelector<fromFeature.State>('app');
  
  export const getItems = createSelector(
    getFeatureState,
    state => state.items
);

 
