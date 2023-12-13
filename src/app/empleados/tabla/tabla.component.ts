import { Component, EventEmitter, Input, Output } from '@angular/core';
import { empleado } from '../interface/empleado.interface';

import { v4 as Id } from 'uuid'
@Component({
  selector: 'vista-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  @Input()
  Tabla:empleado[]=[
    {
      Nombre: "Camilo",
      Id: Id(),
      Tiempo: 2023 - 2015
    },
    {
      Nombre: "Tatiana",
      Id: Id(),
      Tiempo: 2023 - 2000
    }
  ];

  @Output()
  Enviar: EventEmitter <string>=new EventEmitter()

  Enviar_Id( Id:string, Nombre:string ){
    this.Enviar.emit( Id )
    alert( "Se ha eliminado el empleado: "+Nombre )
  }
}
