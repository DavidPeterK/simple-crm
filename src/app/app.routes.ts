import { Routes } from '@angular/router';
import { DashboardComponent } from './nav/dashboard/dashboard.component';
import { UserComponent } from './nav/user/user.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
];
