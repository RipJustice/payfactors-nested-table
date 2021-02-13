import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MockService } from '../../services/mock.service';
import { JobData } from '../../models/job-data';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss']
})
export class JobsTableComponent implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  jobsData: JobData[];

  constructor(private mSvc: MockService) { }

  ngOnInit(): void {
    this.grabTableData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  grabTableData(): void {
    this.subscriptions.push(
      this.mSvc.getJobsData().subscribe({
        next: (jData: JobData[]) => {
          this.jobsData = jData;
        },
        error: (error) => {
          console.error(error);
        }
      })
    );
  }
}
