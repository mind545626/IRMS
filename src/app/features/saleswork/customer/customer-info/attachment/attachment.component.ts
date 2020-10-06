import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'attachment-content',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
  providers: [MessageService]

})
export class AttachmentComponent implements OnInit {
    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    files5: TreeNode[];


    cols: any[];
 
  constructor(private nodeService: NodeService, private messageService: MessageService) {
    
  }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files1 = files);
    this.nodeService.getFilesystem().then(files => this.files2 = files);
    this.nodeService.getFilesystem().then(files => this.files3 = files);
    this.nodeService.getFilesystem().then(files => this.files4 = files);
    this.nodeService.getFilesystem().then(files => this.files5 = files);

    this.cols = [
        { field: 'name', header: '檔案名稱' },
        { field: 'size', header: '檔案大小' },
        { field: 'type', header: '檔案類型' }
    ];
  }
  serializedDate = new FormControl((new Date()).toISOString());
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
 
  
}
