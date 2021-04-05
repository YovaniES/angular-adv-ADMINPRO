import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PagesRoutingModule } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { Pages404Component } from '../pages404/pages404.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Pages404Component } from '../pages404/pages404.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,

    PagesComponent,


    Pages404Component,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    SharedModule,
    ComponentsModule
  ],

  exports:[
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,

    Pages404Component,
  ]
})
export class PagesModule { }
