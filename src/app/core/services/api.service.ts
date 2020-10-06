import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {config} from '@app/core/app.config';
import { throwError } from 'rxjs';
import {catchError, delay, map, switchMap, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public SearchMSSQLData(dataSrc:any) : Observable<any> {
    return this.http.get<any>(config.apiUrl, { params: dataSrc })
        .pipe(
            delay(100),
            // map((data: any)=>(data || data.data)),
            map((data: any)=>{
              console.log(data);
              return data || data.data;
            }),
            catchError(this.handleError)
        );
  };

  public InsertMSSQLData(dataSrc:any) : Observable<any> {
    return this.http.post<any>(config.apiUrl, dataSrc)
        .pipe(
            delay(100),
            map((data: any)=>(data || data.data)),
            catchError(this.handleError)
        );
  };

  public UpdateMSSQLData(dataSrc:any) : Observable<any> {
    return this.http.put<any>(config.apiUrl, dataSrc)
        .pipe(
            delay(100),
            map((data: any)=>(data || data.data)),
            catchError(this.handleError)
        );
  };

  public DeleteMSSQLData(dataSrc:any) : Observable<any> {
    return this.http.delete<any>(config.apiUrl, { params: dataSrc } )
        .pipe(
            delay(100),
            map((data: any)=>(data || data.data)),
            catchError(this.handleError)
        );
  };

  private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    // let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead

    return throwError(error)
  }

}
