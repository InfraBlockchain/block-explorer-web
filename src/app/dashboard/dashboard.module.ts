import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { BlocksComponent } from './dashboard/blocks/blocks.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { ChainStatusComponent } from './dashboard/chain-status/chain-status.component';
import { MaintenanceComponent } from './dashboard/maintenance/maintenance.component';

@NgModule({
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    DashboardComponent,
    SearchComponent,
    BlocksComponent,
    TransactionsComponent,
    ChainStatusComponent,
    MaintenanceComponent
  ]
})
export class DashboardModule { }
