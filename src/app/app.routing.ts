import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { FormsComponent } from './forms/forms.component';
import { FormDetailComponent } from './form-detail/form-detail.component';

const appRoutes: Routes = [
  {
      path: '',
      component: ContentComponent
    },
    {
    path: 'app-content',
    component: ContentComponent
  },
  {
  path: 'form-detail/:id',
  component: FormDetailComponent
},
  {
  path: 'forms',
  component: FormsComponent
},
    {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
