import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { Usuario } from 'src/app/models/usuario';
import { CitaService } from 'src/app/service/cita.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent {
  usuarioActual: Usuario | undefined;
  misCitas: Cita[] = [];

  constructor(private citaServicio: CitaService, private usuarioServicio: UsuarioService) { 
    this.usuarioActual = this.usuarioServicio.obtenerUsuarioDeLocalStorage();
  }

  ngOnInit(): void {
    localStorage
    this.obtenerMisCitas();
  }

  obtenerMisCitas() {
    const usuarioActual = this.usuarioServicio.obtenerUsuarioDeLocalStorage();
    console.log('Usuario actual:', usuarioActual);
        
    
      this.citaServicio.obtenerCitasPorIds(usuarioActual.id).subscribe((citas: Cita[]) => {
        this.misCitas = citas;
      });
    
    console.log(this.misCitas);
  }
}
