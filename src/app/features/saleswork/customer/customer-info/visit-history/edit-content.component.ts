import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp  } from '@ag-grid-community/angular';
@Component({
  selector: 'editContent',
  template: `
    <span>
      <button
        class="btn btn-warning"
        style="line-height: .5; height: 30px"
      >
        <i class="fa  fa-pencil"></i>編輯
        </button>
      </span>
  `,
  styles: [
    `.fa-pencil{
      margin-right: 10px;
    }`
  ],

})
export class EditContentComponent implements ICellRendererAngularComp  {
  public params: any;
  agInit(params: any): void {
    this.params = params;
  }
  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(
      `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
    );
  }
  refresh(): boolean {
    return false;
  }
  
}
