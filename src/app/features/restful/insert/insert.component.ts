import { Component, OnInit } from '@angular/core';
import { ApiService } from "@app/core/services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JsonValidator } from "@app/shared/custom-validator/json-validator";
import { ObjectEmptyValidator } from "@app/shared/custom-validator/objectEmpty-validator";

@Component({
  selector: 'sa-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  insertForm: FormGroup;
  result: JSON;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.insertForm = this.formBuilder.group({
      insertname: ['InsertByEncrypt', Validators.compose([Validators.required])],
      table: ['0', Validators.required],
      params: ['{\
        "U_ID":"Test",\
        "U_PW":"Test#1",\
        "U_GRADE":1,\
        "U_CR_USER":"Administrator",\
        "U_CR_DATETIME":"2019-07-15 16:25:00.0"\
      }', Validators.compose([Validators.required, JsonValidator, ObjectEmptyValidator])],
    });
  }

  onSubmit() {
    if (this.insertForm.invalid) {
      return;
    }

    console.log(this.insertForm.value);

    this.apiService.InsertMSSQLData(this.insertForm.value).subscribe(data => {
      console.log(data);
      this.result = data["returnData"];
    }, error => {
      this.result = error;
    })
  }

}
