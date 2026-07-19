import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';

import { HomeComponent} from './pages/home/home';






export const routes: Routes = [
  //   {
  //   path: '',
  //   component: Home ,
  //   pathMatch: 'full'
  // },

  
   {
    path: '',
    component: HomeComponent
  },

  {
    path: '**',
    component: NotFound
  }


];
