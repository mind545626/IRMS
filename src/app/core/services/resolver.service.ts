// import { Injectable } from '@angular/core';
// import {
//   Router, Resolve, RouterStateSnapshot,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';
//
// import { UserService, NotificationService } from "@app/core/services";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ResolverService {
//
//   constructor(private userService: UserService, private router: Router , private notificationService: NotificationService) { }
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//
//     return this.userService.getUserDetails().pipe(
//       take(1), // 可選，只發出源 Observable 最初發出的的1個值
//       map(res => {
//         const permission = res['Permission'];
//         const page = route.data.pageTitle;
//
//         if (permission && permission.indexOf(page) === -1) {
//           console.log('請求失敗');
//           // console.log(permission);
//           // console.log(permission.indexOf(page));
//           this.router.navigate(['/cga/login']);
//           this.reLogin();
//           return false;
//
//         } else {
//           console.log(permission);
//           console.log(permission.indexOf(page));
//           console.log('請求成功');
//           return true;
//         }
//       })
//     );
//   }
//
//   private reLogin() {
//     this.notificationService.smallBox({
//       title: "權限不足，請使用其他帳號登入",
//       content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
//       color: "#c26565",
//       iconSmall: "fa fa-thumbs-down bounce animated",
//       timeout: 4000
//     });
//   }
// }
