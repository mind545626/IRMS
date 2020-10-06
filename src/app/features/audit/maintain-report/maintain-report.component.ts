import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";
import { JsonApiService } from "@app/core/services";
import * as moment from 'moment';

import { MaintainTotal, MaintainDetails } from '../audit';
import { MAINTAIN, MAINTAINDETAILS } from '../mock-audit';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'sa-maintain-report',
  templateUrl: './maintain-report.component.html',
  styleUrls: ['./maintain-report.component.scss'],
})

export class MaintainReportComponent implements OnInit {

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
  result: boolean = false; // 顯示查詢結果

  totalOptions: TableOptions;
  detailOptions: TableOptions;

  constructor(private jsonApiService: JsonApiService, private fb: FormBuilder) { }

  async ngOnInit() {

    this.totalOptions = {
      dataSource: new MatTableDataSource<MaintainTotal>(),
      columnDefs: [
        { name: "repairNumber", displayName: "需保養支數" },
        { name: "completeRepair", displayName: "已完成保養支數" },
        { name: "noncompleteRepair", displayName: "未完成保養支數" },
        { name: "repairDelay", displayName: "保養逾期天數" }
      ],
      enableSorting: true,
      enablePaginationPage: true,
      // enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }



    this.detailOptions = {
      dataSource: new MatTableDataSource<MaintainDetails>(),
      columnDefs: [
        { name: "cctvid", displayName: "攝影機編號" },
        { name: "intersection", displayName: "裝機地址" },
        { name: "repairQuarter", displayName: "保養季" },
        { name: "repairDate", displayName: "保養時間" },
        { name: "contractDate", displayName: "契約期限" },
        { name: "isDelay", displayName: "是否逾期" },
        { name: "delayDays", displayName: "逾期幾日" },
        { name: "extensionDate", displayName: "展延期限" },
        { name: "reason", displayName: "原因" }
      ],
      enableSorting: true,
      enablePaginationPage: true,
      // enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }

  }

  search() {
    this.result = true;
    this.totalOptions.dataSource.data = MAINTAIN;
    this.detailOptions.dataSource.data = MAINTAINDETAILS;
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
      doc.save('2020年1月保養明細表.pdf');
    });
  }

}
