import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProducerRoutingModule } from './producer-routing.module';

import { ProducersComponent } from './producers/producers.component';
import { ProducerComponent } from './producer/producer.component';
import { InformationComponent } from './producer/information/information.component';

@NgModule({
  imports: [
    SharedModule,
    ProducerRoutingModule
  ],
  declarations: [
    ProducersComponent,
    ProducerComponent,
    InformationComponent
  ]
})
export class ProducerModule { }
