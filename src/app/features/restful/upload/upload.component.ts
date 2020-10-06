import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToolboxService } from "@app/core/services";

@Component({
  selector: 'sa-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  error: string;
  uploadResponse= { status: '', message: '' };

  constructor(private formBuilder: FormBuilder, private toolboxService: ToolboxService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      uploadFile: ['', Validators.compose([Validators.required])],
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('uploadFile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('uploadFile').value);

    this.toolboxService.upload(formData).subscribe(
        (res) => this.uploadResponse = res,
        (err) => this.error = err
    );
  }

}
