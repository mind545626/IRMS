import { Action } from "@ngrx/store";
import { User } from '@app/core/models';

// define action types
export enum UserActionTypes {
    Login = "[user] Login",
    LoginSuccess = "[user] Login Success",
    LoginFail = "[user] Login Fail",
    Logout = "[user] Logout",
    LogoutSuccess = "[user] Logout Success",
    LogoutFail = "[user] Logout Fail",
    UpdateUser = "[user] Update User",
    UpdateUserSuccess = "[user] Update User Success",
    UpdateUserFail = "[user] Update User Fail",
}

// define Actions class
export class LoginAction implements Action {
    readonly type = UserActionTypes.Login;
    constructor(public payload: User) { }
}
export class LoginSuccessAction implements Action {
    readonly type = UserActionTypes.LoginSuccess;
    constructor(public payload: User) { }
}
export class LoginFailAction implements Action {
    readonly type = UserActionTypes.LoginFail;
    constructor(public payload: any) { }
}
export class LogoutAction implements Action {
    readonly type = UserActionTypes.Logout;
    constructor(public payload: User) { }
}
export class LogoutSuccessAction implements Action {
    readonly type = UserActionTypes.LogoutSuccess;
}
export class LogoutFailAction implements Action {
    readonly type = UserActionTypes.LogoutFail;
}
export class UpdateUserAction implements Action {
    readonly type = UserActionTypes.UpdateUser;
    constructor(public payload: User) { }
}
export class UpdateUserSuccessAction implements Action {
    readonly type = UserActionTypes.UpdateUserSuccess;
    constructor(public payload: User) { }
}
export class UpdateUserFailAction implements Action {
    readonly type = UserActionTypes.UpdateUserFail;
}

export type UserActions =
    | LoginAction
    | LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | LogoutSuccessAction
    | LogoutFailAction
    | UpdateUserAction
    | UpdateUserSuccessAction
    | UpdateUserFailAction;
