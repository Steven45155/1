import { Component, Injectable } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'vista-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  constructor ( public Injectable:DatosService ){}
}
