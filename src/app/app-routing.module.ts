import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

import { MasterpageComponent } from './shared/masterpage/masterpage.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SearchComponent } from './dashboard/search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MasterpageComponent,
    children: [
      { path: '', pathMatch: 'full', component: DashboardComponent },
      { path: 'search', component: SearchComponent },
      // { path: 'accounts', loadChildren: './account/account.module#AccountModule' },
      { path: 'blocks', loadChildren: './block/block.module#BlockModule' },
      // { path: 'actions', loadChildren: './contract/contract.module#ContractModule' },
      { path: 'producers', loadChildren: './producer/producer.module#ProducerModule' },
      { path: 'transactions', loadChildren: './transaction/transaction.module#TransactionModule' }
    ]
  }
];

@NgModule({
  imports: [
    DashboardModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }