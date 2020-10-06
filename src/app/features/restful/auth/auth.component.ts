import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@app/core/services";

enum ButtonType {
  login = "login",
  logout = "logout",
  reLoadSession = "reLoadSession",
  version = "version"
}

@Component({
  selector: 'sa-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  result: JSON;
  readonly buttonType = ButtonType;
  // buttonType: JSON = new JSON({
  //   login: "login",
  //   logout: "logout"
  // });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      U_ID: ['Administrator', Validators.compose([Validators.required])],
      U_PW: ['Admin#1', Validators.required]
    });
  }

  // onSubmit(pButtonType): void {
  //   console.log(pButtonType)

  //   if(this.buttonType.logout === pButtonType){

  //     this.authService.Logout().subscribe(data => {
  //       console.log(data);
  //       this.result = data["returnData"];
  //     }, error => {
  //       this.result = error;
  //     })
  //   }

  //   if(this.buttonType.reLoadSession === pButtonType){

  //     this.authService.ReLoadSession().subscribe(data => {
  //       console.log(data);
  //       this.result = data["returnData"];
  //     }, error => {
  //       this.result = error;
  //     })
  //   }

  //   if(this.buttonType.version === pButtonType){

  //     this.authService.Version().subscribe(data => {
  //       console.log(data);
  //       this.result = data["returnData"];
  //     }, error => {
  //       this.result = error;
  //     })
  //   }

  //   if(this.authForm.invalid) {
  //     return;
  //   }

  //   if(this.buttonType.login === pButtonType) {

  //     // let selectData = {
  //     //   querymain: this.selectForm.controls.querymain.value,
  //     //   queryname: this.selectForm.controls.queryname.value,
  //     //   params: this.selectForm.controls.params.value
  //     // }
  //     console.log(this.authForm.value);

  //     this.authService.Login(this.authForm.value).subscribe(data => {
  //       console.log(data);

  //       if(data["returnData"].length == 0){
  //         this.result = JSON.parse("\"登入失敗\"");
  //         return;
  //       }

  //       this.result = data["returnData"];
  //     }, error => {
  //       this.result = error;
  //     })
  //   }
  // }

}
