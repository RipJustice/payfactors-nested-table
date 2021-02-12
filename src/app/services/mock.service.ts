import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobData } from '../models/job-data';
import { MockJobsData } from '../mocks/mock-jobs-data';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }
}
