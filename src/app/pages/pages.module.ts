import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pages404Component } from './pages404/pages404.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Pages404Component,
    ProgressComponent,
    Grafica1Component,

    PagesComponent


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    SharedModule
  ],

  exports:[
    DashboardComponent,
    Pages404Component,
    ProgressComponent,
    Grafica1Component,
  ]
})
export class PagesModule { }
