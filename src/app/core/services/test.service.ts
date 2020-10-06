import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/internal/operators";
import { config } from '@app/core/app.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }


  public GetCCTVInfo(dataSrc: any): Observable<any> {
    return this.http.post<any>(config.cctvInfoUrl, dataSrc, httpOptions)
      .pipe(
        delay(100),
        // map((data: any)=>(data || data.data)),
        map((data: any) => {
          // console.log(data);
          return data || data.data;
        }),
        catchError(this.handleError)
      );
  }

  public GetHistoryByCar(dataSrc: any): Observable<any> {
    return this.http.post<any>(config.historyByCarUrl, dataSrc , httpOptions)
      .pipe(
        delay(100),
        map((data: any) => {
          // console.log(data);
          return data || data.data;
        }),
        catchError(this.handleError)
      )
  }

  public GetHistoryByCCTV(dataSrc: any): Observable<any> {
    return this.http.post<any>(config.historyByCCTVUrl, dataSrc , httpOptions)
      .pipe(
        delay(100),
        map((data: any) => {
          // console.log(data);
          return data || data.data;
        }),
        catchError(this.handleError)
      )
  }

  public GetCCTVImage(dataSrc: any): Observable<any> {
    return this.http.post<any>(config.cctvImg, dataSrc, httpOptions)
      .pipe(
        delay(100),
        map((data: any) => (data.data || data)),
        catchError(this.handleError)
      )
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    // let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead

    return throwError(error)
  }
}
