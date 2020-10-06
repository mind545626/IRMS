
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, Input, ElementRef } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'one-video',
  templateUrl: './one-video.component.html',
  styleUrls: ['./one-video.component.scss']
})
export class OneVideoComponent<T> implements OnInit {

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  obs: Observable<any>;

  @Input() dataSource: MatTableDataSource<T>;
  @Input() paginationPageSizes: Array<number>;

  @ViewChild('videoEl', { static: false }) private videoElRef: ElementRef;
  @ViewChild('videoContainerEl', { static: false }) private videoContainerElRef: ElementRef;

  constructor(public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    // this.loadIframe();

    this.changeDetectorRef.detectChanges();
    this.obs = this.dataSource.connect();
  }

  get video(): HTMLVideoElement {
    return this.videoElRef.nativeElement;
  }

  get videoContainer(): HTMLElement {
    return this.videoContainerElRef.nativeElement;
  }

  onPlay() {
    this.video.play();
  }

  onPause() {
    this.video.pause();
  }

  skip(value) {
    this.video.currentTime += value;
  }

  restart() {
    this.video.currentTime = 0;
  }

  async ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = '每頁顯示筆數';
  }

  loadIframe() {
    //pre-authenticate
    const req = new XMLHttpRequest();
    const iframeURL = 'http://110.25.89.239/GetData.cgi?CH=3';
    const iframeID = 'MyIFrame';

    req.open("POST", iframeURL, false, "user1", "user1"); //use POST to safely send combination
    req.send(null); //here you can pass extra parameters through

    //setiFrame's SRC attribute
    const iFrameWin = <HTMLVideoElement>(document.getElementById(iframeID));
    iFrameWin.src = iframeURL + "?extraParameters=true";
  }

  // 申請調閱表單框
  openForm(): void {
    const dialogRef = this.dialog.open(FormDialog, {
      width: '700px',
      height: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}


export interface ApplyForm {
  formNumber: string; // 表單編號
  userUnit: string; // 申請人單位
  user: string; // 申請人
  applyDate: string; // 申請時間
  applyCase: string[]; // 調閱案由
  cctvName: string; // 調閱攝影機名稱
  videoName: string; // 下載影像影像名稱
  caseSituation: string[]; // 下載影像偵辦進度
  output: string[]; // 輸出格式
  formReviewer: string[]; // 表單批核
  other: string[] // 其他機關調閱
}

@Component({
  selector: 'form-dialog',
  templateUrl: 'formdialog.component.html',
  styleUrls: ['formdialog.component.scss'],
  providers: [DatePipe]
})


export class FormDialog {

  apply: ApplyForm = {
    formNumber: 'CGA010101', // 表單編號
    userUnit: '偵防分署', // 申請人單位
    user: 'XXX', // 申請人
    applyDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'), // 申請時間
    applyCase: ['毒品', '槍砲', '非法入出國', '人口販運', '走私菸酒', '走私農漁畜', '其他案件'], // 調閱案由
    cctvName: '(YL0912001-D001)石城漁港濱海路七段往石城漁港(雙向)', // 調閱攝影機名稱
    videoName: '2019051500 0000.mp4', // 下載影像名稱
    caseSituation: ['偵破', '偵辦中', '其他'], // 下載影像偵辦進度
    output: ['mp4', 'avi'], // 輸出格式
    formReviewer: ['隊長', '副隊長', '一組組主任', '二組組主任', '專員'], // 表單批核
    other: ['服務單位', '職稱', '姓名', '連絡電話', '申請公文號'] // 其他機關調閱
  }


  // 新增申請表單
  applyForm = this.fb.group({
    formNumber: [''], //表單編號（自動生成）
    userUnit: ['', Validators.required], // 申請人單位
    user: ['', Validators.required], // 申請人
    applyDate: [''], // 申請時間（預設）
    applyCase: [''], // 調閱案由
    cctvName: ['', Validators.required], // 調閱攝影機名稱
    videoName: ['', Validators.required], // 下載影像影像名稱
    caseSituation: [''], // 下載影像偵辦進度
    output: ['', Validators.required], // 輸出格式
    formReviewer: ['', Validators.required], // 表單批核
    other: this.fb.group({ // 其他機關調閱
      otherUnit: [''],
      otherTitlte: [''],
      otherName: [''],
      otherPhone: [''],
      otherDocument: ['']
    }),
  });

  constructor(public dialogRef: MatDialogRef<FormDialog>, private fb: FormBuilder, private datePipe: DatePipe) { }

  onSubmit() {
    console.warn(this.applyForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}