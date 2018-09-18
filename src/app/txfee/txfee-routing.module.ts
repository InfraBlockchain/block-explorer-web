import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxFeeComponent } from './txfee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TxFeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxFeeRoutingModule { }
