import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DepositoryRoutingModule } from './depository-routing.module';

import { DepositoriesComponent } from './depositories/depositories.component';
// import { DepositoryComponent } from './depository/depository.component';
// import { InformationComponent } from './depository/information/information.component';

@NgModule({
  imports: [
    SharedModule,
    DepositoryRoutingModule
  ],
  declarations: [
    DepositoriesComponent
    //DepositoryComponent,
    // InformationComponent
  ]
})
export class DepositoryModule { }
