import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../_guards/auth-guard.service';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
    { path: '', component: DashboardComponent }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
