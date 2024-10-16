import { Routes } from '@angular/router';

export const routes: Routes = [
    
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', loadChildren: () => import('./pages/public/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
    { path: 'error', loadChildren: () => import('./pages/public/error/error.routes').then(m => m.ERROR_ROUTES) },
    { path: 'cliente', loadChildren: () => import('./pages/private/cliente/cliente.routes').then(m => m.CLIENTE_ROUTES) },
    { path: 'user', loadChildren: () => import('./pages/private/user/user.routes').then(m => m.USER_ROUTES) },
];
