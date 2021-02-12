import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
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
    MainRoutingModule,
    ButtonModule
  ]
})
export class MainModule { }
