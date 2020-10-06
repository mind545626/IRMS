import { Component, OnInit } from '@angular/core';
import {ApiService, NotificationService, ToolboxService, UserService} from "@app/core/services";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface UploadFile {
  UF_ID: number;
  UF_O_FILENAME: string;
  UF_R_FILENAME: string;
  UF_FILESIZE: number;
  UF_SOFT_DELETE: boolean;
  UF_CR_USER: string;
  UF_CR_DATETIME: Date;
  UF_UP_USER: string;
  UF_UP_DATETIME: Date;
}

@Component({
  selector: 'sa-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public user: any;

  uploadForm: FormGroup;
  uploadResponse= { status: '', message: '' };
  uploadFiles: UploadFile[];

  constructor(private notificationService: NotificationService, private formBuilder: FormBuilder, private toolboxService: ToolboxService, private apiService: ApiService, private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.user$.value;
    // this.userService.user$.subscribe((user)=>{
    //   console.log(user);
    //   this.user = user
    // })
    console.log(this.user);

    this.uploadForm = this.formBuilder.group({
      uploadFile: ['', Validators.compose([Validators.required])],
    });

    this.selectData();
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
        (res) => {
          console.log(res);
          this.uploadResponse = res
        },
        (err) => {
          console.log(err);
          this.uploadFail();
        },
        () => {
          this.insertData(this.uploadResponse);
        }
    );
  }

  deleteData(pUploadFile: UploadFile) {
    console.log(pUploadFile);

    let data = {
      updatename: 'Update',
      table: 7,
      params: {
        UF_SOFT_DELETE: true
      },
      condition: {
        UF_ID: pUploadFile.UF_ID
      }
    }

    this.apiService.UpdateMSSQLData(data).subscribe(data => {
      console.log(data);
      this.updateSuccess()
    }, error => {
      console.log(error);
    }, () => {
      this.selectData();
    })
  }

  restoreData(pUploadFile: UploadFile) {
    console.log(pUploadFile);

    let data = {
      updatename: 'Update',
      table: 7,
      params: {
        UF_SOFT_DELETE: false
      },
      condition: {
        UF_ID: pUploadFile.UF_ID
      }
    }

    this.apiService.UpdateMSSQLData(data).subscribe(data => {
      console.log(data);
      this.updateSuccess()
    }, error => {
      console.log(error);
    }, () => {
      this.selectData();
    })
  }

  private selectData(){

    let data = {
      querymain: 'demo',
      queryname: 'SelectUploadFile'
    };

    this.apiService.SearchMSSQLData(data).subscribe(data => {
      this.uploadFiles = data["returnData"] as UploadFile[];
      console.log(this.uploadFiles);
    }, error => {
      console.log(error);
      // this.result = error;
    })
  }

  private insertData(pData) {

    let data = {
      insertname: 'Insert',
      table: 7,
      params: {
        UF_O_FILENAME: pData.oFilename,
        UF_R_FILENAME: pData.rFilename,
        UF_FILESIZE: pData.Filesize,
        UF_FILEPATH: pData.Filepath,
        UF_CR_USER: 'Test',
        UF_CR_DATETIME: new Date()
      }
    };

    this.apiService.InsertMSSQLData(data).subscribe(data => {
      console.log(data);
      this.uploadForm.reset();
      this.uploadSuccess();
    }, error => {
      console.log(error);
      this.uploadFail();
    }, () => {
      this.selectData();
    })
  }

  private uploadSuccess() {
    this.notificationService.smallBox({
      title: "上傳成功",
      content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
      color: "#739e73",
      iconSmall: "fa fa-thumbs-up bounce animated",
      timeout: 4000
    });
  }

  private uploadFail() {
    this.notificationService.smallBox({
      title: "上傳失敗",
      content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
      color: "#c26565",
      iconSmall: "fa fa-thumbs-down bounce animated",
      timeout: 4000
    });
  }

  private updateSuccess() {
    this.notificationService.smallBox({
      title: "更新成功",
      content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
      color: "#739e73",
      iconSmall: "fa fa-thumbs-up bounce animated",
      timeout: 4000
    });
  }

}
