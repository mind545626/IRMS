import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AgGridModule } from 'ag-grid-angular';
import { CustomeInfoComponent } from './customer-info.component';
import { MatDatepickerModule,MatRadioModule,MatTabsModule,MatExpansionModule,MatNativeDateModule, MatTableModule,MatRippleModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatInputModule}  from '@angular/material/input';

// PrimeNG
import { NodeService } from './attachment/nodeservice';


//Sub-component
import { LiaisonComponent} from './liaison/liaison.component';
import { AddLiaisonComponent } from './liaison/add-liaison/add-liaison.component';
import { LiaisonInfoComponent } from './liaison/liaison-info/liaison-info.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { EditContentComponent } from './visit-history/edit-content.component';
import { OrderPriceComponent} from './order-price/order-price.component';
import { AttachmentComponent } from './attachment/attachment.component';


@NgModule({
  imports: [
   
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatNativeDateModule,
    MatRippleModule,
    MatRadioModule,
    MatExpansionModule,
    MatMomentDateModule,
    AgGridModule.withComponents([
      CustomeInfoComponent,
      EditContentComponent
    ]),
    RouterModule.forChild([{
      path: '', component: CustomeInfoComponent
    }])
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    NodeService
  ],
  declarations: [
    CustomeInfoComponent,
    LiaisonComponent,
    AddLiaisonComponent,
    LiaisonInfoComponent,
    VisitHistoryComponent,
    EditContentComponent,
    OrderPriceComponent,
    AttachmentComponent
  ]
})
export class CustomerInfoModule { }
