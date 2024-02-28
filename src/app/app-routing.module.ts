import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './core/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent},
  { path: 'autenticacion', loadChildren: () => import('./components/autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
  { path: 'administracion', loadChildren: () => import('./components/administracion/administracion.module').then(m => m.AdministracionModule) },
  { path: 'citas', loadChildren: () => import('./components/citas/citas.module').then(m => m.CitasModule) },
  { path: 'doctores', loadChildren: () => import('./components/doctores/doctores.module').then(m => m.DoctoresModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
