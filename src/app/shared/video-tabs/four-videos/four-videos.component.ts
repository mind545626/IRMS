import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'four-videos',
  templateUrl: './four-videos.component.html',
  styleUrls: ['./four-videos.component.scss']
})
export class FourVideosComponent<T> implements OnInit {

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  obs: Observable<any>;

  @Input() dataSource: MatTableDataSource<T>;
  @Input() paginationPageSizes: Array<number>;

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

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
