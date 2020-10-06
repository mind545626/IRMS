import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.scss'],

})
export class AddDetailComponent implements OnInit {

  constructor() {
    
  }
  ngOnInit() {
  }
  close_detail(){
    $('#add_detail').hide();
  }
}
