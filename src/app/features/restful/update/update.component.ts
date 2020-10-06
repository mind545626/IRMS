import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "@app/core/services";
import {ObjectEmptyValidator} from "@app/shared/custom-validator/objectEmpty-validator";
import {JsonValidator} from "@app/shared/custom-validator/json-validator";

@Component({
  selector: 'sa-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  result: JSON;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      updatename: ['UpdateByEncrypt', Validators.compose([Validators.required])],
      table: ['0', Validators.required],
      params: ['{\
        "U_NAME":"Test"\
      }', Validators.compose([Validators.required, JsonValidator, ObjectEmptyValidator])],
      condition: ['{\
        "U_ID":"Test"\
      }', Validators.compose([Validators.required, JsonValidator, ObjectEmptyValidator])],
    });
  }

  onSubmit() {
    if (this.updateForm.invalid) {
      return;
    }

    console.log(this.updateForm.value);

    this.apiService.UpdateMSSQLData(this.updateForm.value).subscribe(data => {
      console.log(data);
      this.result = data["returnData"];
    }, error => {
      this.result = error;
    })
  }

}
