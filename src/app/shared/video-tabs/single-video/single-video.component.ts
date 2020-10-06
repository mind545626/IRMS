import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, Input,ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss']
})
export class SingleVideoComponent<T> implements OnInit {

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  obs: Observable<any>;

  @Input() dataSource: MatTableDataSource<T>;
  @Input() paginationPageSizes: Array<number>;

  @ViewChild('videoEl', { static: false }) private videoElRef: ElementRef;
  @ViewChild('videoContainerEl', { static: false }) private videoContainerElRef: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    // this.loadIframe();

    this.changeDetectorRef.detectChanges();
    this.obs = this.dataSource.connect();
  }

  async ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = '每頁顯示筆數';
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
  
  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
