import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '@app/core/models';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { config } from '@app/core/app.config';
import { delay } from 'rxjs/operators';
import { catchError, map } from "rxjs/internal/operators";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  // loginStatus$ = new BehaviorSubject<boolean>(false);
  userDetails$ = new BehaviorSubject<User>(null);
  reviewer$ = new BehaviorSubject<User>(null);
  case$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  LoginServer(loginData: any): Observable<any> {
    return this.http.post<any>(config.loginUrl, loginData , httpOptions);
  };

  Logout(dataSrc: any): Observable<any> {
    // this.isLogin = false;
    // this.roleAs = '';

    return this.http.post<any>(config.logoutUrl, dataSrc , httpOptions);
  };

  // public Login(loginData: any): Observable<boolean> {
  //   return this.LoginServer(loginData)
  //     .pipe(
  //       delay(100),
  //       map((res: any) => {
  //         if (res) {
  //           localStorage.setItem('currentUser', JSON.stringify(res));
  //           this.loginStatus$.next(true);
  //           this.userDetails$.next(res);
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //         (err: HttpErrorResponse) => {
  //           if (err.error instanceof Error) {
  //             console.log('client-side error');
  //           } else {
  //             console.log('server-side error');
  //           }
  //           return of(false);
  //         }
  //       )
  //     )
  // }

  // public Logout() {
  //   localStorage.removeItem('currentUser');
  //   this.loginStatus$.next(false);
  //   this.userDetails$.next(null);
  // }

  // public getLoginStatus(): Observable<boolean> {
  //   return this.loginStatus$;
  // }

  // public getUserDetails(): Observable<User> {
  //   return this.userDetails$;
  // }

  public ReLoadSession(): Observable<any> {
    return this.http.get<any>(config.reLoadSessionUrl , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };

  public Version(): Observable<any> {
    return this.http.get<any>(config.versionUrl , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };

  public GetRoleAuthority(loginData: any): Observable<any> {
    return this.http.post<any>(config.roleUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };

  public UpdateRole(loginData: any): Observable<any> {
    return this.http.post<any>(config.updRoleUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };

  public UpdateUser(loginData: any): Observable<any> {
    return this.http.post<any>(config.updateUserUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };

  public GetReviewer(loginData: any): Observable<any> {
    return this.http.post<any>(config.getReviewerUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => {
              this.reviewer$.next(data);
            }),
            catchError(this.handleError)
        );
  };

  public GetUserCase(loginData: any): Observable<any> {
    return this.http.post<any>(config.getUserCaseUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => {
              this.case$.next(data);
              return data || data.data;
            }),
            catchError(this.handleError)
        );
  };

  public GetTeamInfo(loginData: any): Observable<any> {
    return this.http.post<any>(config.getTeamInfoUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };



  public UpdateUserRole(loginData: any): Observable<any> {
    return this.http.post<any>(config.updateUserRoleUrl, loginData , httpOptions)
        .pipe(
            delay(100),
            map((data: any) => (data || data.data)),
            catchError(this.handleError)
        );
  };

  public CreateRole(loginData: any): Observable<any> {
    return this.http.post<any>(config.crtRoleUrl, loginData , httpOptions)
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
