import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {NotificationService} from "@app/core/services/notification.service";

import {UserService} from "@app/core/services/user.service";
import {AuthService} from "@app/core/services";
import {User} from "@app/core/models";
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import * as fromUser from '@app/core/store/user';

@Component({
    selector: "sa-logout",
    template: `
    <div id="logout" (click)="showPopup()" class="btn-header transparent pull-right">
        <span> <a title="Sign Out"><i class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
    styles: []
})
export class LogoutComponent implements OnInit {
    currentUser$: Observable<User>;
    currentUser: User;

    public user

    constructor(private userService: UserService,
                private router: Router,
                private notificationService: NotificationService,
                private authService: AuthService,
                private store: Store<fromUser.UserState>) {
        this.currentUser$ = store.select(fromUser.getCurrentUser);
    }

    async ngOnInit() {
        this.currentUser = await this.currentUser$.take(1).toPromise<User>();
    }

    showPopup() {
        this.notificationService.smartMessageBox(
            {
                title: `<i class='fa fa-sign-out txt-color-yellow'></i> 是否要登出 <span class='txt-color-yellow'><strong>
                      ${this.currentUser.UserName}
                </strong></span> ?`,
                // content: "You can improve your security further after logging out by closing this opened browser",
                buttons: "[取消][確認]"
            },
            ButtonPressed => {
                if (ButtonPressed == "確認") {
                    this.logout();
                }
            }
        );
    }

    logout() {
        let input = {
            UserId: this.currentUser.UserId,
            DeptId: this.currentUser.DeptId,
        }

        // console.log(input);
        // this.authService.Logout(input).subscribe(data => console.log(data));
        let user: User = { ...input };
        // console.log(user);
        this.store.dispatch(new fromUser.LogoutAction(user));
    }
}
