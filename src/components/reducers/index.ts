import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromLayout from './layout/layout'


export interface State {
    layout: fromLayout.State
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer
}


/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSideCart = createSelector(
    getLayoutState,
    fromLayout.getShowSideCart
)