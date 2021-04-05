import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
    this.btnColor =`btn ${this.btnColor}`
  }


  @Input('valor') progreso: number = 40;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  @Input() btnColor: string = 'btn-primary';

  cambiarValor(valor: number) {
    this.progreso += valor;
    this.valorSalida.emit(this.progreso);

    if (this.progreso > 100) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    } else if (this.progreso < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    }
  }

  ingresarValor(nuevoValor: number) {
    if (nuevoValor > 100) {
      this.progreso = 100;
    } else if (nuevoValor < 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(nuevoValor);
  }
}
