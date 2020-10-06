import { Component, OnInit, Injectable, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import { ROLES, MEMBERS } from '../mock-administrator'
import { Role, Member } from '../administrator'

import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { TableOptions } from "@app/shared/mat-table/kunyu-table/table-options";
import { UserService } from "@app/core/services";
import { User } from '@app/core/models';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'sa-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUser$: Observable<User>;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.currentUser$ = this.userService.userDetails$;
  }

  ngOnInit() {
  }

}
