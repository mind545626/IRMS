import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";

import { JsonApiService } from "@app/core/services";

import * as moment from 'moment';

import { HistoryDetails } from '../audit';
import { HISTORYDETAILS } from '../mock-audit';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'sa-history-report',
  templateUrl: './history-report.component.html',
  styleUrls: ['./history-report.component.scss'],

})
export class HistoryReportComponent implements OnInit {

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

  detailOptions: TableOptions;

  constructor(private jsonApiService: JsonApiService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.detailOptions = {
      dataSource: new MatTableDataSource<HistoryDetails>(),
      columnDefs: [
        { name: "cctvid", displayName: "攝影機編號" },
        { name: "intersection", displayName: "裝機地址" },
        { name: "videoError", displayName: "影像資料是否損毀" },
        { name: "dataError", displayName: "辨識資料是否損毀" },
        { name: "errorDays", displayName: "損毀天數" },
        { name: "recordIncorrect", displayName: "儲存記錄不正確" },
        { name: "carplateIncorrect", displayName: "車牌辨識資料不正確" },
        { name: "positionIncorrect", displayName: "前端監控設備點位不正確" }
      ],
      enableSorting: true,
      enablePaginationPage: true,
      // enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }

  }

  search() {
    this.result = true;
    this.detailOptions.dataSource.data = HISTORYDETAILS;
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
      doc.save('2020年1月歷史儲檔明細表.pdf');
    });
  }

}
