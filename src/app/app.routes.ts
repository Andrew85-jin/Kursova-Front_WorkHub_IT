import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jobs } from './pages/jobs/jobs';
import { VacancyPage } from './pages/vacancy-page/vacancy-page';
import { Companies } from './pages/companies/companies';
import { CompanyPage } from './pages/company-page/company-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'jobs',
    component: Jobs,
  },

  {
    path: 'jobs/:id',
    component: VacancyPage,
  },


  {
    path: 'companies',
    component: Companies,
  },
  {
    path: 'companies/:id',
    component: CompanyPage,
  },
];
