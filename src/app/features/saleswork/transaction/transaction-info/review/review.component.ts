import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'tr-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})

export class ReviewComponent implements OnInit {
  val1: number;

  val2: number = 10;

  val3: number = 10;

  val5: number;
  constructor() {
   
  }
  items: MenuItem[];
  ngOnInit() {
   
  }
  
}
