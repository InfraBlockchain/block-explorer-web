import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './account/information/information.component';
import { ActionsComponent } from './account/actions/actions.component';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule
  ],
  declarations: [
    // AccountsComponent,
    AccountComponent,
    InformationComponent,
    ActionsComponent
  ]
})
export class AccountModule { }
