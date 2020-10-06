import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { JsonApiService } from "@app/core/services";
import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";

import * as moment from 'moment';

import { RepairTotal, RepairDetails } from '../audit';
import { REPAIR, REPAIRDETAILS, TITLE } from '../mock-audit';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'sa-repair-report',
  templateUrl: './repair-report.component.html',
  styleUrls: ['./repair-report.component.scss'],

})

export class RepairReportComponent implements OnInit {

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
      dataSource: new MatTableDataSource<RepairTotal>(),
      columnDefs: [
        { name: "totalHours", displayName: "影像儲存總時數" },
        { name: "noSignal", displayName: "無訊號" },
        { name: "blueImg", displayName: "藍畫面" },
        { name: "blur", displayName: "模糊" },
        { name: "offset", displayName: "偏移" },
        { name: "shadow", displayName: "遮蔽" },
        { name: "actualHours", displayName: "實際儲存總時數" }
      ],
      enableSorting: true,
      enablePaginationPage: true,
      // enableSelectAll: true,
      paginationPageSizes: [5, 10, 25, 100]
    }

    this.detailOptions = {
      dataSource: new MatTableDataSource<RepairDetails>(),
      columnDefs: [
        { name: "repairNumber", displayName: "報修單號" },
        { name: "cctvid", displayName: "攝影機編號" },
        { name: "malfunction", displayName: "故障原因" },
        { name: "errorMonth", displayName: "故障月份" },
        { name: "errorDate", displayName: "故障時間" },
        { name: "repairTime", displayName: "完修時間" },
        { name: "disconnectTime", displayName: "中斷時間" },
        { name: "rentDeduction", displayName: "應扣除月租費" },
        { name: "rentUnit", displayName: "月租單位" },
        { name: "delayPenalty", displayName: "應扣除逾期罰款" },
        { name: "penaltyUnit", displayName: "罰款單位" },
        { name: "disclaimer", displayName: "免責費用" },
        { name: "totalDeduction", displayName: "應扣除總費用" },
        { name: "excludeHours", displayName: "不計算時數" },
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
    
    this.totalOptions.dataSource.data = REPAIR;
    this.detailOptions.dataSource.data = REPAIRDETAILS;

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
      doc.save('2020年1月影像維修明細表.pdf');
    });
  }

}
