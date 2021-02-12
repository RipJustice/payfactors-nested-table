import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { JobsTableComponent } from '../../components/jobs-table/jobs-table.component';

@NgModule({
  declarations: [
    MainComponent,
    JobsTableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
