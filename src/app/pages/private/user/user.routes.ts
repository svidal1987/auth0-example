import { Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthGuard } from '../../../service/auth.guard';

export const USER_ROUTES: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
];
