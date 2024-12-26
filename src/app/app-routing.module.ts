import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AbautPageComponent } from './shared/pages/abaut-Page/abaut-page.component';
import { ContactPageComponent } from './shared/pages/contact/contact.component';
import { CountryPageComponent } from './country/pages/country-page/country-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'abaut',
    component: AbautPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./country/country.module').then( m => m.CountryModule )
  },
  {
    path: '**',
    redirectTo: 'countries'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
