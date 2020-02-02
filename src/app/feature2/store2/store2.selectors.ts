import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store2State } from "./store2.state";

const getStore2FeatureState = createFeatureSelector<Store2State>('store2');

export const getItems2 = createSelector(
    getStore2FeatureState,
    state => state.items
);
