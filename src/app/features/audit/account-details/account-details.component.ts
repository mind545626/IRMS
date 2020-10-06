import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { JsonApiService } from "@app/core/services";

import { AccountTotal, AccountDetails } from '../audit';
import { ACCOUNTS, ACCOUNTDETAILS, TITLE } from '../mock-audit';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";
import * as moment from 'moment';

@Component({
  selector: 'sa-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})

export class AccountDetailsComponent implements OnInit {

  // 新增searchbox表單控制
  searchForm = this.fb.group({
    date: [{
      StartTime: moment().format(),
      EndTime: moment().format(),
    }],
  });

  // 可選擇日期為今年內
  min: moment.Moment = moment().startOf('year');
  max: moment.Moment = moment().endOf('year');
  dateLimit = 90; // 一季
  title = TITLE;
  result: boolean = false; // 顯示查詢結果

  totalOptions: TableOptions;
  detailOptions: TableOptions;
  
  displayedColumns: string[] = ['payMonth','paymentStartDate','paymentEndDate','days','startRentDate','term'];
  dataSource = new MatTableDataSource();

  constructor(private jsonApiService: JsonApiService, private fb: FormBuilder) { }

  async ngOnInit() {

    this.totalOptions = {
      dataSource: new MatTableDataSource<AccountTotal>(),
      columnDefs: [
        { name: "rentReceivable", displayName: "應收總月租費(NT$)" },
        { name: "rentDeduction", displayName: "總月租費扣款(NT$)" },
        { name: "maintainDelayPenalty", displayName: "保養逾期罰款" },
        { name: "fileDamagePenalty", displayName: "檔案損毀罰款" },
        { name: "courseDelayPenalty", displayName: "教育訓練逾期罰款" },
        { name: "dataDelayPenalty", displayName: "繳交資料逾期罰款" },
        { name: "spotcheckDeduction", displayName: "抽查扣款" },
        { name: "totalDeduction", displayName: "應扣除總費用(NT$)" },
        { name: "totalRevenue", displayName: "實收總月租費(NT$)" },
      ],
      enableSorting: true,
      enablePaginationPage: true,
      // enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }

    this.detailOptions = {
      dataSource: new MatTableDataSource<AccountDetails>(),
      columnDefs: [
        { name: "cctvid", displayName: "攝影機編號" },
        { name: "intersection", displayName: "裝機地址" },
        { name: "videoDisconnect", displayName: "影像中斷天數(時數)" },
        { name: "singleRent", displayName: "月租費" },
        { name: "singleRentDeduction", displayName: "月租費扣款" },
        { name: "singleRentRevenue", displayName: " 實收月租費" }],
      enableSorting: true,
      enablePaginationPage: true,
      // enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }

  }

  

  search() {
    this.result = true;

    this.totalOptions.dataSource.data = ACCOUNTS;
    this.detailOptions.dataSource.data = ACCOUNTDETAILS;

    this.dataSource = new MatTableDataSource(TITLE);
  }

  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  exportPDF() {

    const div = document.getElementById('pdfTable');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(div, options).then((canvas) => {

      var img = canvas.toDataURL("image/PNG");
      var doc = new jsPDF('l', 'mm', 'a4', 1);

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');

      return doc;
    }).then((doc) => {
      doc.save('2020年1月計罰與帳務明細表.pdf');
    });
  }


}
