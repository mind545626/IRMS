
export interface Record {
    department: string;
    user: string;
    cctvid: string;
    name: string;
    ip: string;
    log: string;
    device: string;
    filename?: string;
    caseid?: string;
    record: string;
}

export interface Bullet {
    department: string;
    ontop: string;
    isExpired: string;
    StartTime: string;
    EndTime: string;
    announceTime: string;
    subject: string;
    person: string;
    content: string;
    file?: string;
}

export interface Role {
    name: string;
    id: number;
}

export interface Member {
    id: number;
    title: string;
    unit: string;
    group: string;
    name: string;
    account: string;
    role: string;
    phone: number;
}

export interface Department {
    name: string;
    id: string;
}

export interface RouteNode {
    name: string;
    id?: string;
    selected?: boolean;
    indeterminate?: boolean;
    ok?: boolean;
}
