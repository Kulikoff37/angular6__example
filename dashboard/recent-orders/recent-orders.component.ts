import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../requisites/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../models/order.interface';
import { DashboardService } from '../dashboard.service';
import { PaginationNameService } from '../../common/pagination-name.service';

export interface OrdersElement {
    uuid: string;
    date: string;
    number?: any;
    status: string;
    totalSum: string;
    customerName: string;
    shippingDate?: any;
    deliveryAddress: string;
    paid: boolean;
    shipped: boolean;
    responsibleName: string;
    responsibleUUID: string;
}

@Component({
    selector: 'app-recent-orders',
    templateUrl: './recent-orders.component.html',
    styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
    displayedColumns: string[] = [
        'number',
        'date',
        'customerName',
        'totalSum',
        'shippingDate',
        'deliveryAddress',
        'paid',
        'shipped',
        'responsibleName'];
    dataSource;
    resultCount = 0;
    tableSettings = {
        itemsPerPage: 10,
        startingPage: 0
    };
    tableItemsPaginationName = 'Заказов';
    constructor(
        private orderService: OrderService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private dashboardService: DashboardService,
        private paginationNameService: PaginationNameService
    ) { }
    ngOnInit() {
        this.onFillData();
        this.paginationNameService.onNameChange(this.tableItemsPaginationName);
    }
    createOrder() {
        this.orderService.makeOrder().subscribe((order: Order) => {
            this.router.navigate(
                ['/new-order/requisites'],
                { queryParams: { order_id: order.uuid },
                    relativeTo: this.activeRoute });
        });
        return false;
    }
    onFillData() {
        this.dashboardService.getOrdersList(this.tableSettings.startingPage, this.tableSettings.itemsPerPage).subscribe((next) => {
            this.dataSource = next.result;
            this.resultCount = next.totalElements;
        });
    }
    getUpdate(e): void {
        this.dashboardService.getOrdersList(e.pageIndex, e.pageSize).subscribe((next) => {
            this.dataSource = next.result;
        });
    }
}
