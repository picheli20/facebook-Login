import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';

export const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home TCC' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile TCC' }
  },
  {
    path: 'callback',
    component: CallbackComponent,
    data: { title: 'Callback' }
  },
//   { path: '**', component: PageNotFoundComponent }
];