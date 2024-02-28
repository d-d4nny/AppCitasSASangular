import { Component} from '@angular/core';
import { CitaService } from 'src/app/service/cita.service';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/service/doctor.service';
import { Cita } from 'src/app/models/cita';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-cita',
  templateUrl: './registro-cita.component.html',
  styleUrls: ['./registro-cita.component.css'],
})
export class RegistroCitaComponent{
  idUsuario: string = ''; 
  usuarioId: string = '';
  motivo: string = '';
  fechaHora: string = '';
  doctorId: string = '';
  doctores: Doctor[] = [];

  constructor(private citaService: CitaService, private usuarioServicio: UsuarioService, private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.paramMap.get('id') || '';

    this.obtenerDoctores();
  }

  obtenerDoctores(): void {
    this.doctorService.obtenerDoctores().subscribe(doctores => {
      this.doctores = doctores;
    });
  }

  registrarCita(): void {
    // Validar los campos necesarios antes de enviar la solicitud
    if (this.motivo && this.fechaHora && this.doctorId) {
      const nuevaCita: Cita = {
        usuarioId: this.idUsuario,  // Aquí debes proporcionar el ID del usuario correspondiente
        doctorId: this.doctorId,
        motivo: this.motivo,
        fechaHora: new Date(this.fechaHora),
        estado: 'pendiente'
      };
  
      this.citaService.registrarCita(nuevaCita, this.idUsuario).then(() => {
        // Lógica adicional después de registrar la cita (por ejemplo, redirección o limpiar campos)
        console.log('Cita registrada correctamente');
      }).catch(error => {
        console.error('Error al registrar la cita:', error);
      });
    } else {
      console.warn('Por favor, complete todos los campos antes de registrar la cita.');
    }
  }
}