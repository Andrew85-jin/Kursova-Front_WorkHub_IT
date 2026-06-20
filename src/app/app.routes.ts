import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jobs } from './pages/jobs/jobs';
import { VacancyPage } from './pages/vacancy-page/vacancy-page';
import { Companies } from './pages/companies/companies';
import { CompanyPage } from './pages/company-page/company-page';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { About } from './pages/about/about';
import { CreateResume } from './pages/create-resume/create-resume';
import { Employer } from './pages/employer/employer';
import { Help } from './pages/help/help';
import { Contacts } from './pages/contacts/contacts';
import { Privacy } from './pages/privacy/privacy';
import { CreateJob } from './pages/create-job/create-job';
import { EmployerJobs } from './pages/employer-jobs/employer-jobs';
import { EmployerApplications } from './pages/employer-applications/employer-applications';
import { EmployerCompanyProfile } from './pages/employer-company-profile/employer-company-profile';
import { Profile } from './pages/profile/profile';
import { CreateCompany } from './pages/create-company/create-company';
import { EmployerApplicationDetails } from './pages/employer-application-details/employer-application-details';
import { EditJob } from './pages/edit-job/edit-job';

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

  {
    path: 'login',
    component: Login,
  },

  {
    path: 'register',
    component: Register,
  },

  {
    path: 'about',
    component: About,
  },

  {
    path: 'create-resume',
    component: CreateResume,
  },

  {
    path: 'employer',
    component: Employer,
  },
  {
    path: 'employer/jobs',
    component: EmployerJobs,
  },

  {
    path: 'help',
    component: Help,
  },

  {
    path: 'contacts',
    component: Contacts,
  },

  {
    path: 'privacy',
    component: Privacy,
  },

  {
    path: 'create-job',
    component: CreateJob,
  },

  {
    path: 'employer/applications',
    component: EmployerApplications,
  },

  {
    path: 'employer/company-profile',
    component: EmployerCompanyProfile,
  },

  {
    path: 'profile',
    component: Profile,
  },

  {
    path: 'create-company',
    component: CreateCompany,
  },

  {
    path: 'employer/applications/:id',
    component: EmployerApplicationDetails,
  },

  {
    path: 'edit-job/:id',
    component:
    EditJob,
  },
];
