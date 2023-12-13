import { Component, EventEmitter, Output } from '@angular/core';
import { empleado } from '../interface/empleado.interface';

import { v4 as Id } from 'uuid'
@Component({
  selector: 'vista-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  crear:empleado={
    Nombre: "",
    Id: Id(),
    Tiempo: 0
  };

  @Output("pas")
  Enviar: EventEmitter <empleado>=new EventEmitter();

  Crear_Empleado(){
    const { Nombre, Tiempo }=this.crear
    if ( Nombre=="" || Tiempo==0) {
      alert( "No se permiten valores nulos")
    } else {
      this.crear.Tiempo=2023 - Tiempo
      this.Enviar.emit( this.crear )
      this.crear={ Nombre:"", Id:Id(), Tiempo:0};
    }
  }
}
