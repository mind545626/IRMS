import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NoticeService} from '@app/core/services/notice.service';
import { Notice } from '@app/shared/table-interfaces/notice';
import {FilterUtils} from 'primeng/utils';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {sharedUtils} from "@app/shared/utils/sharedUtils";

@Component({
  selector: 'sa-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})


export class NoticeComponent implements OnInit {
  notices: Notice[];
  cols: any[];

  constructor(private noticeService: NoticeService) { }

  async ngOnInit() {
    this.noticeService.getNoticeDetail().then(notices => this.notices = notices);
    this.cols = [
            { field: 'C', header: 'Department', width: '150px' },
            { field: 'CustomerID', header: 'Content', width: 'auto' },
            { field: 'FullName', header: 'Creator', width: '150px' },
            { field: 'FLFullName', header: 'CreationDate', width: '200px' },
            { field: 'CompTaxNo', header: 'File', width: '200px' },
        ];
  }

 

}
