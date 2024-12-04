import { Routes } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { authGuardGuard } from './common/guards/auth-guard.guard';
import { LoginComponent } from './core/pages/login/login.component';

export const routes: Routes = [
    //dashboard
    //#region DASHBOARD
    {
        path: '',
        component: DashboardComponent,
        // canActivate: [authGuardGuard],
        title: 'DashBoard'
    },
    //#endregion
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: '404 - PageNotFound'
    }

    //reports


];
