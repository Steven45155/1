import { NgModule } from "@angular/core";
import { CrearComponent } from "./crear/crear.component";
import { DatosComponent } from "./datos/datos.component";
import { TablaComponent } from "./tabla/tabla.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    CrearComponent,
    DatosComponent,
    TablaComponent
  ],
  exports:[
    CrearComponent,
    DatosComponent,
    TablaComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})

export class EmpleadosModule{}
