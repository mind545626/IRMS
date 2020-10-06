export interface Customer {
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
    date?: string;
}

export interface ContactLiaison {
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
    ContactDate?: string;
}

export interface OrderProgress {
    QuoID?: number;
    OrderNo?: number;
    CustomerID?: number;
    OrderDate?: string;
    date?: string;
}

export interface AssignProgress {
    QuoID?: number;
    OrderNo?: number;
    CustomerID?: number;
    OrderDate?: string;
    date?: string;
}

export interface Approval{
    QuoID?: number;
    OrderNo?: number;
    CustomerID?: number;
    OrderDate?: string;
    date?: string;
}
