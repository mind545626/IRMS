import { Contact } from './../../features/outlook/shared/outlook-message.class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, ContactLiaison, OrderProgress, Approval} from '@app/shared/table-interfaces/customer';
import { TreeNode } from 'primeng/api';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustoemrsMedium() {
        return this.http.get<any>('assets/api/gtais/customer.json')
        .toPromise()
        .then(res => <Customer[]>res.data)
        .then(data => { return data; });
    }
    getCustoemrsQuo() {
        return this.http.get<any>('assets/api/gtais/quotation.json')
        .toPromise()
        .then(res => <Customer[]>res.data)
        .then(data => { return data; });
    }
    getCustoemrsOrder() {
        return this.http.get<any>('assets/api/gtais/transaction.json')
        .toPromise()
        .then(res => <Customer[]>res.data)
        .then(data => { return data; });
    }
    getContactLiaison() {
        return this.http.get<any>('assets/api/gtais/contactliaison.json')
        .toPromise()
        .then(res => <ContactLiaison[]>res.data)
        .then(data => { return data; });
    }
    getOrderProgress() {
        return this.http.get<any>('assets/api/gtais/order-progress.json')
        .toPromise()
        .then(res => <OrderProgress[]>res.data)
        .then(data => { return data; });
    }
    getAssignerProgress() {
        return this.http.get<any>('assets/api/gtais/assign-progress.json')
        .toPromise()
        .then(res => <TreeNode[]>res.data)
        .then(data => { return data; });
    }
    getApproval() {
        return this.http.get<any>('assets/api/gtais/approval.json')
        .toPromise()
        .then(res => <Approval[]>res.data)
        .then(data => { return data; });
    }
}