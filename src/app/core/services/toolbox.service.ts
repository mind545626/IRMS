import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ToolboxService {

  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // public upload(data) {
  public upload(data: any): Observable <any> {
    let uploadURL = `${this.baseUrl}toolbox/uploadFile`;

    return this.http.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }
}
