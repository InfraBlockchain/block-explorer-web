import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TxFeeRoutingModule } from './txfee-routing.module';

import { TxFeeComponent } from './txfee.component';

@NgModule({
  imports: [
    SharedModule,
    TxFeeRoutingModule
  ],
  declarations: [
    TxFeeComponent
  ]
})
export class TxFeeModule { }
