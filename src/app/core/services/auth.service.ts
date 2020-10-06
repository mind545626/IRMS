import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { config } from '@app/core/app.config';
import { User } from '@app/core/models';
import { catchError, map } from "rxjs/internal/operators";
import { UserService } from '@app/core/services';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/x-www-form-urlencoded',
//   }),
// };

@Injectable()
export class AuthService {

  isLogin: boolean = false;
  roleAs: string;

  constructor(private http: HttpClient) { }

  public Login(dataSrc: any): Observable<any> {

    return this.http.post<any>(config.loginUrl, dataSrc)
      .pipe(
        delay(100),
        map((data: any) => (data || data.data)),
        catchError(this.handleError)
      ),
      of({ success: this.isLogin, role: this.roleAs });
  };


  public Logout(): Observable<any> {
    this.isLogin = false;
    this.roleAs = '';

    return this.http.post<any>(config.logoutUrl, {})
      .pipe(
        delay(100),
        map((data: any) => (data || data.data)),
        catchError(this.handleError)
      ),
      of({ success: this.isLogin, role: '' });
  };

  // public isLoggedIn() {
  //   const loggedIn = localStorage.getItem('STATE');
  //   if (loggedIn == 'true')
  //     this.isLogin = true;
  //   else
  //     this.isLogin = false;
  //   return this.isLogin;
  // }

  // public getRole() {
  //   this.roleAs = localStorage.getItem('ROLE');
  //   return this.roleAs;
  // }

  public ReLoadSession(): Observable<any> {
    return this.http.get<any>(config.reLoadSessionUrl)
      .pipe(
        delay(100),
        map((data: any) => (data || data.data)),
        catchError(this.handleError)
      );
  };

  public Version(): Observable<any> {
    return this.http.get<any>(config.versionUrl)
      .pipe(
        delay(100),
        map((data: any) => (data || data.data)),
        catchError(this.handleError)
      );
  };

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    // let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead

    return throwError(error)
  }
}

// export class AuthService {

//   //This will be used as a source for various observables
//   private authState$: Observable<any>;

//   //Have an observable which will tell if user is loggedin or not
//   isUserLoggedIn$: Observable<boolean>;
//   userDetails$: Observable<User>;

//   // public userProfileRef: firebase.database.Reference;

//   constructor(private userService: UserService, private router: Router) {
//     // this.userProfileRef = firebase.database().ref('/userProfile');
//     this.setupObserables();
//   }

//   setupObserables() {

//     // this observable will broadcast the emited values to multiple subscribers [or composed/dependent observables]
//     this.authState$ = this.userService.currentUser$
//       // .publishReplay(1)
//       // .refCount();

//     // lets componse/derive different observables required by the consumer of this service

//     // This observable's emitted value will tell if user is logged in or not
//     this.isUserLoggedIn$ = this.userService.loginStatus$
//       // .map(user => {
//       //   return user ? true : false;
//       // });

//     // This observable's emited value will return the user's detail [NOTE If user is not logged in then the emitted value will be NULL
//     // i.e. userDetail is NULL; Your consumer of this observable should decide what to do with NULL/NOT NULL Value]        
//     this.userDetails$ = this.authState$
//       // .map(user => user);
//   }

//   doSignOut() {
//     this.userService.Logout();
//   }
  
// }
