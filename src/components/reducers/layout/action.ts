import { Action } from '@ngrx/store'

export enum LayoutActionTypes {
    OpenSideCart = '[Layout] Open Side Cart',
    CloseSideCart = '[Layout] Close Side Cart'
}

export class OpenSideCart implements Action {
    readonly type = LayoutActionTypes.OpenSideCart
}

export class CloseSideCart implements Action {
    readonly type = LayoutActionTypes.CloseSideCart
}

export type LayoutAction = OpenSideCart | CloseSideCart
