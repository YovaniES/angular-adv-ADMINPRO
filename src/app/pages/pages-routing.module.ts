import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
     /*  { path: '', component: DashboardComponent }, */
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Grafica1Component },

    ],
  },
];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
