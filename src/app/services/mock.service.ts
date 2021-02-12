import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JobData } from '../models/job-data';
import { MockJobsData } from '../mocks/mock-jobs-data';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  // We're not currently using the HttpClient but I've placed this here as it would be needed were the method 'getJobsData' to be switching to calling an api for data
  constructor(private http: HttpClient) { }

  getJobsData(): Observable<JobData[]> {
    return of(MockJobsData);
  }
}
