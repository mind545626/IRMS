import { UserActions, UserActionTypes } from "./user.actions";
import { User } from "@app/core/models";

export interface UserState {
    isLogin: boolean;
    error: any;
    currentUser: User | null;
}

export const userInitialState: UserState = {
    isLogin: false,
    error: null,
    currentUser: null
};

export function userReducer(state:UserState = userInitialState, action: UserActions): UserState {

    switch (action.type) {
        case UserActionTypes.Logout:
            return userInitialState;
        case UserActionTypes.LoginFail:
            return {
                ...state,
                isLogin: false,
                error: action.payload,
                currentUser: null
            };
        case UserActionTypes.LoginSuccess:
            return {
                ...state,
                currentUser: action.payload,
                isLogin: true
            }
        case UserActionTypes.UpdateUserSuccess:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }

}