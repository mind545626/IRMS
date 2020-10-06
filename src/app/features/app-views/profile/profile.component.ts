import { Component, OnInit } from '@angular/core';
import { SelectItem  } from 'primeng/api';

@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  options: SelectItem[];
  value22: string ;

  constructor() {
    this.options = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
  }

  ngOnInit() {
  }

}
