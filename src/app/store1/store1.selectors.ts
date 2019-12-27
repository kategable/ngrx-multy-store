import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store1State } from "./store1.state";

const getStore1FeatureState = createFeatureSelector<Store1State>('store1');

export const getItems1 = createSelector(
    getStore1FeatureState,
    state => state.items
);
