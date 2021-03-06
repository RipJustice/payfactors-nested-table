import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
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
    ButtonModule,
    TableModule,
    TriStateCheckboxModule
  ]
})
export class MainModule { }
