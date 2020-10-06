import {NotificationService, UserService, AuthService} from "@app/core/services";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Action} from "@ngrx/store";
import * as actions from './user.actions';
import {User} from "@app/core/models";
import {map, switchMap, filter, catchError, tap, exhaustMap} from "rxjs/internal/operators";
import { of } from 'rxjs/observable/of';
import {Router} from "@angular/router";

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private router: Router,
        private userService: UserService,
        private notificationService: NotificationService
    ) { }

    @Effect()
    login$: Observable<Action> = this.action$.pipe(
        ofType(actions.UserActionTypes.Login),
        // map((action: actions.LoginAction) => action.payload),
        exhaustMap((action: actions.LoginAction) => {
        // switchMap((action: actions.LoginAction) => {
            return this.userService.LoginServer(action.payload).pipe(
                map((res: User) => {
                    if(res.UserId) {
                        return new actions.LoginSuccessAction(res);
                    }else {
                        return new actions.LoginFailAction(res);
                    }
                }),
                catchError((err) => of(new actions.LoginFailAction(err)))
            )
        })
    );

    @Effect({ dispatch: false })
    loginSuccess$: Observable<Action> = this.action$.pipe(
        ofType(actions.UserActionTypes.LoginSuccess),
        tap((user: actions.LoginSuccessAction) => {

            this.notificationService.smallBox({
                title: "登入成功",
                content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
                color: "#739e73",
                iconSmall: "fa fa-thumbs-up bounce animated",
                timeout: 2000
            });

            // console.log("Success:", user);
            this.router.navigateByUrl('/administrator/notice');
        })
    );

    @Effect({ dispatch: false })
    loginFail$: Observable<Action> = this.action$.pipe(
        ofType(actions.UserActionTypes.LoginFail),
        tap((user) => {

            this.notificationService.smallBox({
                title: "登入失敗，請確認使用者名稱及密碼是否正確",
                content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
                color: "#c26565",
                iconSmall: "fa fa-thumbs-down bounce animated",
                timeout: 2000
            });

            // console.log("Fail:", user);
            // this.router.navigateByUrl('cga/login');
        })
    );

    @Effect()
    logout$: Observable<Action> = this.action$.pipe(
        ofType(actions.UserActionTypes.Logout),
        exhaustMap((action: actions.LogoutAction) => {
            // switchMap((action: actions.LoginAction) => {
                return this.userService.Logout(action.payload).pipe(
                    map((res) => {
                        console.log(res);
                        // if(res.UserId) {
                        //     return new actions.LoginSuccessAction(res);
                        // }else {
                        //     return new actions.LoginFailAction(res);
                        // }
                    }),
                    // catchError((err) => of(new actions.LoginFailAction(err)))
                )
            }),
        map(() => {
            return (new actions.LogoutSuccessAction());
        })
    );

    @Effect({ dispatch: false })
    logoutSuccess$: Observable<Action> = this.action$.pipe(
        ofType(actions.UserActionTypes.LogoutSuccess),
        tap((user: actions.LogoutSuccessAction) => {
            this.router.navigateByUrl('/gtais/login');
        })
    );

    @Effect()
    updateUser$: Observable<Action> = this.action$.pipe(
        ofType(actions.UserActionTypes.UpdateUser),
        // map((action: actions.LoginAction) => action.payload),
        exhaustMap((action: actions.LoginAction) => {
            // switchMap((action: actions.LoginAction) => {
            return this.userService.LoginServer(action.payload).pipe(
                map((res: User) => {
                    if(res.UserId) {
                        return new actions.UpdateUserSuccessAction(res);
                    }else {
                        return new actions.UpdateUserFailAction();
                    }
                }),
                catchError((err) => of(new actions.UpdateUserFailAction()))
            )
        })
    );

}
