import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CitasComponent } from './citas.component';
import { CitasRoutingModule} from './citas-routing.module'

import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';
import { ListaCitaComponent } from './lista-cita/lista-cita.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitasComponent,
    MisCitasComponent,
    RegistroCitaComponent,
    ListaCitaComponent,
    DetalleCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule
  ]
})
export class CitasModule { }
