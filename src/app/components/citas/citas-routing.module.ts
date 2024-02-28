import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';
import { ListaCitaComponent } from './lista-cita/lista-cita.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';
import { CitasComponent } from './citas.component';

const routes: Routes = [
  { path: '', component: CitasComponent, children:[
    { path: 'mis-citas', component: MisCitasComponent },
    { path: 'registro-cita/:id', component: RegistroCitaComponent },
    { path: 'lista-cita', component: ListaCitaComponent },
    { path: 'detalle-cita/:id', component: DetalleCitaComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }