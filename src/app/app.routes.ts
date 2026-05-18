import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jobs } from './pages/jobs/jobs';
import { Categories } from './pages/categories/categories';
import { VacancyPage } from './pages/vacancy-page/vacancy-page';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'jobs',
    component: Jobs
  },

  {
    path: 'jobs/:id',
    component: VacancyPage
  },

  {
    path: 'categories',
    component: Categories
  },


];
