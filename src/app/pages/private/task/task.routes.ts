import { Routes } from '@angular/router';
import { AuthGuard } from '../../../service/auth.guard';
import { TaskComponent } from './task.component';

export const TASK_ROUTES: Routes = [
  { path: '', component: TaskComponent, canActivate: [AuthGuard] },
];
