import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {
 progreso1:number=25
 progreso2:number=50

 get getPorcentaje1(){
    return `${this.progreso1}%`
 }

 get getPorcentaje2(){
  return `${this.progreso2}%`
}

}
