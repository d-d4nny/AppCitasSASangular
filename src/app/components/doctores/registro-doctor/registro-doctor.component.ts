import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-registro-doctor',
  templateUrl: './registro-doctor.component.html',
  styleUrls: ['./registro-doctor.component.css']
})
export class RegistroDoctorComponent {
  
  nuevoDoctor: Doctor = {
    nombre: '',
    especialidad: '',
    consulta: 0,
  };

  constructor(private doctorService: DoctorService) {}

  registrarDoctor(): void {
    this.doctorService.registrarDoctor(this.nuevoDoctor).then(() => {
      // Lógica adicional después de registrar el doctor
      console.log('Doctor registrado correctamente');
      // Puedes realizar alguna redirección o limpiar los campos del formulario si lo deseas
    }).catch(error => {
      console.error('Error al registrar el doctor:', error);
    });
  }
}
