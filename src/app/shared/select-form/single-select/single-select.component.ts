import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect, MatOption } from '@angular/material';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {

  // label的值
  @Input() label: string;

  // 單選的FormControl
  @Input() ctrl: FormControl;

  // 篩選的FormControl
  @Input() filterCtrl: FormControl;

  // 篩選後的下拉選項
  @Input() filteredItems: ReplaySubject<string[]>;

  // 所有的下拉選項
  @Input() selectItem: string[];

  // placeholder
  @Input() placeholder?: string = "Please Choice";

  // 物件的key
  @Input() key: string;

  // 物件的value
  @Input() value: string;

  @ViewChild('singleSelect', { static: false }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit() {
    // load the initial item list
    this.filteredItems.next(this.selectItem.slice());

    // listen for search field value changes
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterItems();
      });
  }

  ngAfterViewInit() {
    this.filteredItems.pipe(take(1), takeUntil(this._onDestroy))
        .subscribe(() => {
          this.singleSelect.compareWith = (a: any, b: any) => a && b && a[this.key] === b[this.key];
        });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private filterItems() {
    if (!this.selectItem) {
      return;
    }
    // get the search keyword
    let search = this.filterCtrl.value;
    if (!search) {
      this.filteredItems.next(this.selectItem.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the items
    this.filteredItems.next(
      this.selectItem.filter(item => item[this.value].toLowerCase().indexOf(search) > -1)
    );
  }

}
