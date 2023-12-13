

import { Injectable } from '@angular/core';
import { empleado } from '../interface/empleado.interface';

import { v4 as Id } from 'uuid'
@Injectable({providedIn: 'root'})
export class DatosService {

  Empleados:empleado[]=[
    {
      Nombre: "Mateo",
      Id: Id(),
      Tiempo: 2023 - 2000
    },
    {
      Nombre: "karolina",
      Id: Id(),
      Tiempo: 2023 - 2022
    },
    {
      Nombre: "mariana",
      Id: Id(),
      Tiempo: 2023 - 2017
    }
  ];

  Eliminar( Id:string ){
    this.Empleados=this.Empleados.filter( empleado=>empleado.Id !=Id)
  }

  Crear( datos:empleado ){
    this.Empleados.push( datos )
  }

  constructor() { }

}
