import {TemplateRef} from "@angular/core";

export interface ColumnDefs {
    name: string;
    displayName?: string;
    width?: string;
    cellTemplate?: TemplateRef<any>;
}