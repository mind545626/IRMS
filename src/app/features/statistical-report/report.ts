
export interface Report {
    department: string;
    month: number;
    userCount: number;
    RecordCount: number;
    status: string;
}
export interface ReportLog {
    user: string;
    log: string;
    ip: string;
    record: string;
}
export interface Department {
    name?: string;
    id?: string;
}
