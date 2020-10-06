import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "@app/core/services";
import {JsonValidator} from "@app/shared/custom-validator/json-validator";
import {throwError} from "rxjs/index";

@Component({
  selector: 'sa-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectForm: FormGroup;
  result: JSON;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.selectForm = this.formBuilder.group({
      querymain: ['accountManagement', Validators.compose([Validators.required])],
      queryname: ['SelectAllUserInfo', Validators.required],
      params: ['']
    });
  }

  onSubmit() {
    if (this.selectForm.invalid) {
      return;
    }

    // let selectData = {
    //   querymain: this.selectForm.controls.querymain.value,
    //   queryname: this.selectForm.controls.queryname.value,
    //   params: this.selectForm.controls.params.value
    // }
    console.log(this.selectForm.value);

    this.apiService.SearchMSSQLData(this.selectForm.value).subscribe(data => {
      console.log(data);
      this.result = data["returnData"];
    }, error => {
      this.result = error;
    })

  }

}
