import { Router, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/userDashboard/userDashboard.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { AdminDashboardComponent } from './components/adminDashboard/adminDashboard.component';
import { inject } from '@angular/core';
import { UserPermissionService } from './services/userPermission.service';

export const routes: Routes = [
    { path: "", component: HomeComponent },

    {
        path: "dashboard",
        component: AdminDashboardComponent,
        canMatch: [() => {
            const router = inject(Router);
            const isAdmin = inject(UserPermissionService).isAdmin();
            return isAdmin || router.navigate([""]);
        }]
    },
    {
        path: "dashboard",
        component: UserDashboardComponent,
        canMatch: [() => true]
    },
    { path: "**", component: NotFoundComponent },
];
