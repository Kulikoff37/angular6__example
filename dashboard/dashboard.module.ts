import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { HeaderDashboardBottomComponent } from './header-dashboard-bottom/header-dashboard-bottom.component';
import { HeaderDashboardTopComponent } from './header-dashboard-top/header-dashboard-top.component';
import { DashboardRouting } from './dashboard.routing';
import { UserInfoComponent } from '../common/user-info/user-info.component';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatSortModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    MatChipsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatPaginatorIntl,
    MatAutocompleteModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        DashboardRouting,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCardModule,
        MatChipsModule,
        MatTableModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
    ],
    declarations: [
        DashboardComponent,
        HeaderDashboardComponent,
        RecentOrdersComponent,
        HeaderDashboardTopComponent,
        HeaderDashboardBottomComponent,
        UserInfoComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
