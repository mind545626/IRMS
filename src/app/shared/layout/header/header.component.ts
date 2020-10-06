import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService, UserService } from '@app/core/services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { User } from '@app/core/models';

import { CountdownComponent } from 'ngx-countdown';
import {Store} from "@ngrx/store";
import * as fromUser from '@app/core/store/user';
import {element} from "protractor";

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<User>;
  currentUser: User;

  @ViewChild('countdown', { static: true }) countdown: CountdownComponent;
  // 可使用秒數
  leftTime:number = 1800;
  // 警示秒數
  notify:number = 300;
  countdownConfig = {
    leftTime: this.leftTime,
    notify: [ this.notify ] ,
    format: '登出倒數：m分s秒',
    demand: false
  };

  constructor(private router: Router, private store: Store<fromUser.UserState>, private notificationService: NotificationService, private userService: UserService) {
    this.currentUser$ = store.select(fromUser.getCurrentUser);
  }

  async ngOnInit() {
    this.currentUser = await this.currentUser$.take(1).toPromise<User>();

    this.countdown.begin();
  }

  handleEvent(e: Event) {
    switch (e["action"]){
      case "notify":
        this.reLogin();
        break;
      case "done":
        this.logout();
        break;
    }
  }

  reLogin() {
    this.notificationService.smartMessageBox({
      title: `登出倒數即將結束，系統將在${Math.floor(this.notify / 60)}分鐘後自動登出`,
      content: "若要繼續使用，請按確認",
      buttons: '[取消][確認]',
    }, (ButtonPressed) => {
      if(this.countdown.left === 0){
        this.notificationService.smallBox({
          title: "時間到已登出",
          content: "<i class='fa fa-clock-o'></i> <i>若要繼續使用請重新登入...</i>",
          color: "#C46A69",
          iconSmall: "fa fa-times fa-2x fadeInRight animated",
          timeout: 2000
        });

        return;
      }
      if (ButtonPressed === "確認") {
        this.notificationService.smallBox({
          title: "請繼續使用",
          content: `<i id='myModal' class='fa fa-clock-o'></i> <i>系統將自動延長${Math.floor(this.leftTime / 60)}分鐘...</i>`,
          color: "#659265",
          iconSmall: "fa fa-check fa-2x fadeInRight animated",
          timeout: 2000
        });

        this.countdown.restart(); // 重新倒數
      }

    });
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

  searchMobileActive = false;

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  onSubmit() {
    this.router.navigate(['/miscellaneous/search']);
  }

  onToggle() {
    var $body = $('body');
    var documentMethods = {
      enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
      exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
    };

    if (!$body.hasClass("full-screen")) {
      $body.addClass("full-screen");
      document.documentElement[documentMethods.enter.filter((method) => {
        return document.documentElement[method]
      })[0]]()
    } else {
      $body.removeClass("full-screen");
      document[documentMethods.exit.filter((method) => {
        return document[method]
      })[0]]()
    }
  }
}
