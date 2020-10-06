import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notice } from '@app/shared/table-interfaces/notice';

@Injectable()
export class NoticeService {

    constructor(private http: HttpClient) { }

    getNoticeDetail() {
        return this.http.get<any>('assets/api/gtais/notice.json')
        .toPromise()
        .then(res => <Notice[]>res.data)
        .then(data => { return data; });
    }
}