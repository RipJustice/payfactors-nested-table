import { NestedData } from './nested-data';
import { JobPercentages } from './job-percentages';

// note - not sure what the data would look like for other nested tables so just using the same interface for all possible nested tables for now
export interface JobData {
  ID: string;
  Title: string;
  DCuts?: NestedData[];
  Emp?: NestedData[];
  Hist?: NestedData[];
  Structures?: NestedData[];
  Info?: NestedData[];
  Notes?: NestedData[];
  Code: string;
  Orgs?: number;
  Inc?: number;
  Base: JobPercentages;
  TC: JobPercentages;
}
