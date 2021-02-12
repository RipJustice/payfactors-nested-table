import { JobPercentages } from './job-percentages';

export interface NestedData {
  SJtitle: string;
  SName: string;
  JC: number;
  Orgs?: number;
  Incs?: number;
  Base: JobPercentages;
  TC: JobPercentages;
}
