import {ColumnDefs} from "@app/shared/mat-table/kunyu-table/column-defs";
import {MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {Select} from "@app/shared/mat-table/kunyu-table/table-options-enum";

export interface TableOptions<T = any> {
    dataSource: MatTableDataSource<T>,
    columnDefs: ColumnDefs[],
    enableSorting?: boolean,
    enablePaginationPage?: boolean,
    enableSelectAll?: boolean,
    SingleOrMultiSelect?: Select,
    paginationPageSizes?: Array<number>,
    selection?: SelectionModel<ColumnDefs>
}