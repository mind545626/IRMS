import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "@app/core/services";
import {ObjectEmptyValidator} from "@app/shared/custom-validator/objectEmpty-validator";
import {JsonValidator} from "@app/shared/custom-validator/json-validator";

@Component({
  selector: 'sa-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  deleteForm: FormGroup;
  result: JSON;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      deletename: ['Delete', Validators.compose([Validators.required])],
      table: ['0', Validators.required],
      params: ['{\
        "U_ID":"Test"\
      }', Validators.compose([Validators.required, JsonValidator, ObjectEmptyValidator])],
    });
  }

  onSubmit() {
    if (this.deleteForm.invalid) {
      return;
    }

    console.log(this.deleteForm.value);

    this.apiService.DeleteMSSQLData(this.deleteForm.value).subscribe(data => {
      console.log(data);
      this.result = data["returnData"];
    }, error => {
      this.result = error;
    })
  }

}
