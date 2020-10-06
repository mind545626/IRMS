import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Store} from "@ngrx/store";
import * as fromUser from '@app/core/store/user';
import {User} from "@app/core/models";

@Component({
  selector: 'sa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  channelArray = ['User', 'Officer', 'Admin'];

  constructor(private store: Store<fromUser.UserState>, private fb: FormBuilder) {}

  ngOnInit() {


    this.loginForm = this.fb.group({
      UserId: ['Administrator', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
      UserPW: ['Cga#12345', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')]

      // UserId: ['Administrator', Validators.required],
      // UserPW: ['Cga#12345', Validators.required]
    });

  }


  login() {
    let user: User = {...this.loginForm.value};
    this.store.dispatch(new fromUser.LoginAction(user));

    // this.userService.Login(this.loginForm.value).subscribe(res => {
    //   if (res) {
    //     this.router.navigate(['/administrator/notice']);
    //     this.loginSuccess();
    //   } else {
    //     this.loginFail();
    //     return;
    //   }
    // })
  }


}


