import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { UserPage } from './user/userPage';
export const routes: Routes = [
  {
    path: '',
    title: 'App homepage',
    component: HomePage,
  },
  {
    path: 'user',
    title: 'User page',
    component: UserPage,
  },
];
