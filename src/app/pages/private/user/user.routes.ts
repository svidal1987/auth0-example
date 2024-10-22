import { Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthGuard } from '../../../service/auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';

export const USER_ROUTES: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateUserComponent, canActivate: [AuthGuard] },
  
];
