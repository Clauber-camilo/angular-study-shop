import { LayoutActionTypes, LayoutAction, OpenSideCart } from './action'

export interface State {
    showSideCart: boolean
}

const initialState:State = {
    showSideCart: false
}

export function reducer (state:State = initialState, action: LayoutAction ):State {
    switch (action.type) {
        case LayoutActionTypes.OpenSideCart:
            return {
                showSideCart: true
            };

        case LayoutActionTypes.CloseSideCart:
            return {
                showSideCart: false
            }

        default:
            return state
    }
}

export const getShowSideCart = (state:State) => state.showSideCart