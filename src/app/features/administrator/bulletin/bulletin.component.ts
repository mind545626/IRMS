import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JsonApiService } from "@app/core/services";
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '@app/core/services';
import { Observable } from 'rxjs/Observable';
import { User } from '@app/core/models';
import { Bullet } from '../administrator';
import { BULLETS } from '../mock-administrator';

import * as moment from 'moment';

import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";

@Component({
  selector: 'sa-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {
  currentUser$: Observable<User>;
  result: boolean = true;
  add: boolean = false;
  option = ['是','否'];

  searchForm = this.fb.group({
    date: [{
      StartTime: moment().format(),
      EndTime: moment().format()
    }]
  });

  // 可選擇日期為今年內
  min: moment.Moment = moment().startOf('year');
  max: moment.Moment = moment().endOf('year');

  constructor(private jsonApiService: JsonApiService, private fb: FormBuilder, private cd: ChangeDetectorRef, private userService: UserService) {
    this.currentUser$ = this.userService.userDetails$;
   }

  // 新增公告
  bulletinForm = this.fb.group({
    date: [{
      StartTime: moment().format('YYYY-MM-DD'),
      EndTime: moment().format('YYYY-MM-DD')
    }],
    subject: ['', Validators.required],
    content: ['', Validators.required],
    ontop: ['是'],
    file: [null],
    announceTime: moment().format('YYYY-MM-DD'),
    person: this.currentUser$,
    upload: []
  });

  @ViewChild('templateIsExpired', { static: true }) templateExpired: TemplateRef<any>;
  @ViewChild('templateAction', { static: true }) templateAction: TemplateRef<any>;

  tableOptions: TableOptions;



  async ngOnInit() {

    this.tableOptions = {
      dataSource: new MatTableDataSource<Bullet>(BULLETS),
      columnDefs: [
        { name: "ontop", displayName: "置頂" },
        { name: "subject", displayName: "公告主題" },
        { name: "person", displayName: "公告人員" },
        { name: "announceTime", displayName: "公告建立時間" },
        { name: "StartTime", displayName: "開始公告時間" },
        { name: "EndTime", displayName: "結束公告時間" },
        { name: "file", displayName: "附件" },
        { name: "isExpired", displayName: "過期", cellTemplate: this.templateExpired },
        { name: "options", displayName: "功能", cellTemplate: this.templateAction }
      ],
      enableSorting: true,
      enablePaginationPage: true,
      enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }
  }

  search() {
    this.tableOptions.dataSource.data = BULLETS;
  }

  onSubmit() {
    console.warn(this.bulletinForm.value);
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.bulletinForm.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  addNew() {
    this.add = true;
    this.result = false;
  }

  return() {
    this.add = false;
    this.result = true;
  }

  editBulletin(element) {
    console.log(element);
  }

  deleteBulletin(element) {
    console.log(element);
  }
  
  postBulletin() {
    const result = Object.assign({}, this.bulletinForm.value, this.bulletinForm.get('date').value['StartTime'] , this.bulletinForm.get('date').value['EndTime']);

    console.log(result);

    BULLETS.push(result);
    this.tableOptions.dataSource.data = BULLETS;
    this.add = false;
    this.result = true;
  }

}
