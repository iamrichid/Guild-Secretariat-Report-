
export type ReportStatus = 'Submitted' | 'Draft' | 'Pending' | 'Approved' | 'Archived';

export interface Report {
  id: string;
  title: string;
  presbytery: string;
  district?: string;
  branch?: string;
  period: string;
  status: ReportStatus;
  date: string;
  editedTime?: string;
  size?: string;
  type?: string;
  content?: {
    preamble?: string;
    introduction?: string;
    kras?: Array<{
      id: string;
      label: string;
      objective: string;
      strategy: string;
      targets: string;
      results: string;
    }>;
  };
}

export type View = 'LOGIN' | 'SETUP' | 'DASHBOARD' | 'ALL_REPORTS' | 'ARCHIVED' | 'CREATE' | 'EXPORT' | 'REPORT_VIEWER' | 'PROFILE';

export interface UserContext {
  name: string;
  role: string;
  presbytery: string;
  district: string;
  year: string;
  term: string;
}
