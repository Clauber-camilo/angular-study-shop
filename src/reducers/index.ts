import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromRouter from '@ngrx/router-store'
import * as fromLayout from './layout/layout'
import { RouterStateUrl } from '_shared/utils'


export interface State {
    layout: fromLayout.State,
    router: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
    router: fromRouter.routerReducer
}


/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSideCart = createSelector(
    getLayoutState,
    fromLayout.getShowSideCart
)