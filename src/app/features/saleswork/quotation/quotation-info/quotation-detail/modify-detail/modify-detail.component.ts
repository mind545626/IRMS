import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'modify-detail',
  templateUrl: './modify-detail.component.html',
  styleUrls: ['./modify-detail.component.scss'],

})
export class ModifyDetailComponent implements OnInit {

  constructor() {
    
  }
  close_detail(){
    $('#modify_detail').hide();
  }
  ngOnInit() {
  }
}
