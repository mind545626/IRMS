import { Component, OnInit, Input, ViewChild , AfterViewInit} from '@angular/core';
import { FormBuilder , FormControl } from '@angular/forms';
import {MatOption, MatSelect} from "@angular/material";


import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss']
})
export class MultipleSelectComponent implements OnInit {

  // label的值
  @Input() label: string;

  // 多選的FormControl
  @Input() multiCtrl: FormControl;

  // 篩選的FormControl
  @Input() multiFilterCtrl: FormControl;

  // 篩選後的下拉選項
  @Input() filteredItemsMulti: ReplaySubject<string[]>;

  // 所有的下拉選項
  @Input() selectItem: string[];

  // placeholder
  @Input() placeholder?: string = "Please Choice";

  // 物件的key
  @Input() key: string;

  // 物件的value
  @Input() value: string;

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit() {
    // 初始下拉選單
    this.filteredItemsMulti.next(this.selectItem.slice());

    // 監聽mat-select-search
    this.multiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterMulti();
      });
  }

  ngAfterViewInit() {
    this.filteredItemsMulti.pipe(take(1), takeUntil(this._onDestroy))
        .subscribe(() => {
          this.multiSelect.compareWith = (a: any, b: any) => a && b && a[this.key] === b[this.key];
        });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private filterMulti() {
    if (!this.selectItem) {
      return;
    }

    // get the search keyword
    let search = this.multiFilterCtrl.value;

    if (!search) {
      this.filteredItemsMulti.next(this.selectItem.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the areas
    this.filteredItemsMulti.next(
      this.selectItem.filter(item => item[this.value].toLowerCase().indexOf(search) > -1)
    );
  }

}
