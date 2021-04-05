import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    IncrementadorComponent
  ],

  imports: [
    CommonModule,

    FormsModule     //para usar el ngModel
  ],

  exports:[
    IncrementadorComponent,

  ]
})
export class ComponentsModule { }
