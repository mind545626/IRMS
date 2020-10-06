import { Component, OnInit, Injectable, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import { ROLES, MEMBERS, TREE_DATA, ROUTE_DATA, FoodNode } from '../mock-administrator'
import { Role, Member, RouteNode  } from '../administrator'

import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";
import { UserService } from "@app/core/services";
import { User } from '@app/core/models';
import { map, take } from 'rxjs/operators';

// 樹狀
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { SelectionModel } from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'sa-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.scss']
})
export class AuthorityComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  data = new MatTreeNestedDataSource<FoodNode>();

  currentUser$: Observable<User>;
  roles = ROLES;
  auth = TREE_DATA;
  AllRole: string[];
  selectedOptions: [];
  result: boolean = false; // 顯示查詢結果

  tableOption: TableOptions;

  // 新增searchbox表單控制
  searchForm = this.fb.group({
    roleCtrl: [''],
    roleFilterCtrl: [''],
    G_Permission: [this.selectedOptions]
  });

  /** list of members filtered by search keyword for -selection */
  public filteredRole: ReplaySubject<Role[]> = new ReplaySubject<Role[]>(1);
  private _onDestroy = new Subject<void>();

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.currentUser$ = this.userService.userDetails$;
    this.data.data = ROUTE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  async ngOnInit() {

    this.tableOption = {
      dataSource: new MatTableDataSource<Member>(MEMBERS),
      columnDefs: [
        { name: "id", displayName: "編號" },
        { name: "title", displayName: "職稱" },
        { name: "unit", displayName: "單位" },
        { name: "role", displayName: "群組" },
        { name: "account", displayName: "帳號" },
        { name: "name", displayName: "姓名" },
        { name: "phone", displayName: "手機" },

      ],
      enableSorting: true,
      enablePaginationPage: true,
      paginationPageSizes: [5, 10, 25, 100]
    }

    this.AllRole = await this.userService.GetRoleAuthority('').toPromise();
  }

  getRole() {
    const i = this.searchForm.get('roleCtrl').value['id']
    return this.AllRole[i];
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  search() {
    this.result = true;
    const data = this.getRole();
    console.log(data);
    // this.selectedOptions = data['G_Permission'];
  }

  onNgModelChange(event){
    console.log(this.selectedOptions);
    console.log('已選擇', event);
  }

  checkAllParents(node) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected = descendants.every(child => child.selected);
      node.parent.indeterminate = descendants.some(child => child.selected);
      this.checkAllParents(node.parent);
    }
  }
  todoItemSelectionToggle(checked, node) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach(x => {
        this.todoItemSelectionToggle(checked, x);
      });
    }
    this.checkAllParents(node);
  }

  setChildOk(text: string, node: any) {
    node.forEach(x => {
      x.ok = x.name.indexOf(text) >= 0;
      if (x.parent) this.setParentOk(text, x.parent, x.ok);
      if (x.children) this.setChildOk(text, x.children);
    });
  }
  setParentOk(text, node, ok) {
    node.ok = ok || node.ok || node.name.indexOf(text) >= 0;
    if (node.parent) this.setParentOk(text, node.parent, node.ok);
  }

  submit() {
    let result = [];
    this.data.data.forEach(node => {
      result = result.concat(
        this.treeControl
          .getDescendants(node)
          .filter(x => x.selected && x.id)
          .map(x => x.id)
      );
    });
    console.log(result);
  }

}

