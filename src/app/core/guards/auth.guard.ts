import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs/index';
import { map, take, tap } from 'rxjs/operators';

// import * as fromAuth from '../store/auth';
import * as fromUser from '@app/core/store/user';
import { UserService, NotificationService } from "@app/core/services";
import { User } from '../models';

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UserStoreService } from '../serivces/user-store.service';
@Injectable({
    providedIn: 'root'
})

// @Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    loginStatus$: Observable<boolean>;
    currentUser$: Observable<User>;
    currentUser:User;
    // userDetails$ = new BehaviorSubject<User>(null);

    constructor(private store: Store<fromUser.UserState>, private userService: UserService, private router: Router, private notificationService: NotificationService) {
        this.loginStatus$ = store.select(fromUser.getIsLogin);
        this.currentUser$ = store.select(fromUser.getCurrentUser);
        // this.userDetails$ = userService.userDetails$;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let url: string = state.url;
        let page: string = route.data.pageTitle;
        // let url = route.data.pageTitle;
        return this.checkLogin(url, page);

        // const currentUser = this.currentUser$['_value'].Role;
        // console.log(this.currentUser$['_value']);
        // if (currentUser) {
        //     // check if route is restricted by role
        //     if (route.data.role && route.data.role.indexOf(currentUser) === -1) {
        //         // role not authorised so redirect to home page
        //         this.router.navigate(['/cga/login']);
        //         this.reLogin();
        //         return false;
        //     }
        //     // authorised so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/cga/login']);
        // return false;
    }

    canLoad(route: Route): Observable<boolean> {
        let url = `/${route.path}`;
        let page: string = route.data.pageTitle;
        // let url = route.data.pageTitle;
        return this.checkLogin(url, page);
    }

    // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {

    //     if (this.loginStatus$) {
    //         const userRole = this.loginStatus$['_value'];
    //         console.log(userRole);
    //         if (route.data.role && route.data.role.indexOf(userRole) === -1) {
    //             console.log(route.data.role);
    //             this.router.navigate(['/cga/login']);
    //             this.reLogin();
    //             return false;
    //         }
    //         return true;
    //     }

    //     this.router.navigate(['/cga/login']);
    //     return false;
    // }


    checkLogin(url: string, page: string): Observable<boolean> {
        // console.log(url);
        return this.loginStatus$.pipe(
            tap(async(status) => {

                if (!status) {
                    console.log('請重新登入')
                    this.router.navigate(['gtais/login']);
                }

                this.currentUser = await this.currentUser$.take(1).toPromise<User>();
                const permission = this.currentUser.Permission;
                const parts = url.split('/');
                const answer = parts[parts.length - 1];
                if (permission && permission.indexOf(answer) === -1) {
                    console.log('請求失敗');
                    this.router.navigate(['/administrator/notice']);
                    return false;

                } else {
                    console.log('請求成功');
                    return true;
                }
            }),
            take(1),
        );
    }

}