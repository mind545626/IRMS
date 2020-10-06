import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {
  AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList,
  ViewChild
} from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material/table';
import {MatPaginator, MatSort} from "@angular/material";
import {TableOptions} from "@app/shared/mat-table/kunyu-table/table-options";
import {ColumnDefs} from "@app/shared/mat-table/kunyu-table/column-defs";
import {Select} from "@app/shared/mat-table/kunyu-table/table-options-enum";

@Component({
  selector: 'kunyu-table',
  templateUrl: './kunyu-table.component.html',
  styleUrls: ['./kunyu-table.component.scss']
})
export class KunyuTableComponent<T> implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;

  @ViewChild(MatTable, { static: true }) table: MatTable<T>;

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  @ViewChild('sort', {static: true}) sort: MatSort;

  @Input() tableOptions: TableOptions;

  private displayedColumns: string[];
  private selectedName: string = 'select';
  private selection;

  async ngOnInit() {

    this.selection = new SelectionModel<ColumnDefs>(this.singleOrMultiSelect(), [])

    // 是否要選擇欄位
    if(this.tableOptions.SingleOrMultiSelect){

      if(this.tableOptions.SingleOrMultiSelect === Select.Single){
        this.tableOptions.enableSelectAll = false;
      }

      // 給予selection的databinding
      this.tableOptions.selection = this.selection;

      // 給予selection欄位定義
      this.tableOptions.columnDefs.unshift({
        name: this.selectedName
      });

    }

    this.displayedColumns = this.tableOptions.columnDefs.map(col => col.name);

  }

  async ngAfterContentInit() {
    // this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    // this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    // this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
  }

  async ngAfterViewInit() {
    // 如果要排序
    if(this.tableOptions.enableSorting){
      this.tableOptions.dataSource.sort = this.sort;
    }

    // 如果要顯示頁數
    if(this.tableOptions.enablePaginationPage){
      this.tableOptions.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = '每頁顯示筆數';
    }

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableOptions.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.tableOptions.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(element?: ColumnDefs): string {
    if (!element) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(element) ? 'deselect' : 'select'} row ${element[this.selectedName] + 1}`;
  }

  singleOrMultiSelect(): boolean {
    return this.tableOptions.SingleOrMultiSelect === Select.Multiple ? true : false;
  }

}
