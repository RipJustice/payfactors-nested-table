import { JobPercentages } from './job-percentages';

export interface NestedData {
  SID: string;
  SJtitle: string;
  SName: string;
  NCode: number;
  Orgs?: number;
  Incs?: number;
  Base: JobPercentages;
  TC: JobPercentages;
}
