import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctoresRoutingModule } from './doctores-routing.module';
import { DoctoresComponent } from './doctores.component';
import { ListaDoctoresComponent } from './lista-doctores/lista-doctores.component';
import { RegistroDoctorComponent } from './registro-doctor/registro-doctor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctoresComponent,
    ListaDoctoresComponent,
    RegistroDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctoresRoutingModule,
    FormsModule
  ]
})
export class DoctoresModule { }
