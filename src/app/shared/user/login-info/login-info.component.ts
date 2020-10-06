import {Component, OnInit} from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { LayoutService } from '@app/core/services/layout.service';
import {User} from "@app/core/models";
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import { Router} from "@angular/router";
import * as fromUser from '@app/core/store/user';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
  styles: [`
  .login-info>span { border: none;}
  .login-info{ border: none; background-color: #46a299; padding: 8px 0;}
  .login-info a{color: #333; }

  `]

})
export class LoginInfoComponent implements OnInit {

  currentUser$: Observable<User>;

  constructor(public us: UserService, private store: Store<fromUser.UserState>, private router:Router,private layoutService: LayoutService) {
    this.currentUser$ = store.select(fromUser.getCurrentUser);
  }

  ngOnInit() {
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }
  shortcutTo(route) {
    this.router.navigate(route);
    this.layoutService.onShortcutToggle(false);
  }

}
