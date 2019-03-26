import { Component, OnInit } from '@angular/core';
import { OrderService } from '../requisites/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from './models/order.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
