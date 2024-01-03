import { Routes } from '@angular/router';
import { userResolver } from './user.resolver';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/user/3",
        pathMatch: "full"
    },
    {
        path: "user/:id",
        title: "User",
        loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
        resolve: {
            data: () => "fff",
            user: userResolver
        }
    },

];
