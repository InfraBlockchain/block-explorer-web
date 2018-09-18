import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositoriesComponent } from './depositories/depositories.component';
// import { DepositoryComponent } from './depository/depository.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DepositoriesComponent
  }
  // {
  //   path: ':id',
  //   component: DepositoryComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositoryRoutingModule { }
