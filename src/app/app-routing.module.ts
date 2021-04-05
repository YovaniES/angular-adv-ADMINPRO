import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
//import { PagesRoutingModule } from './pages/pages.routing';

import { Pages404Component } from './pages404/pages404.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },

  { path: '**', component: Pages404Component },
 /*  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
