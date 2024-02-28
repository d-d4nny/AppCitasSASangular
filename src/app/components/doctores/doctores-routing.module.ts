import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDoctoresComponent } from './lista-doctores/lista-doctores.component';
import { RegistroDoctorComponent } from './registro-doctor/registro-doctor.component';
import { DoctoresComponent } from './doctores.component';

const routes: Routes = [
  { path: '', component: DoctoresComponent, children:[
    { path: 'registro-doctor', component: RegistroDoctorComponent },
    { path: 'lista-doctores', component: ListaDoctoresComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctoresRoutingModule { }
