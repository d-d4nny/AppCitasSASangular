import { BaseDatosService } from 'src/app/service/base-datos.service';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';
import { DocumentReference } from '@angular/fire/firestore';
import { CitaService } from './cita.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private baseDatosService :BaseDatosService, private citaService: CitaService) { }

  obtenerDoctor(id: string): Observable<Doctor> {
    return this.baseDatosService.obtenerPorId('doctores', id);
  }

  obtenerDoctores(): Observable<Doctor[]> {
    return this.baseDatosService.obtenerTodos('doctores');
  }

  registrarDoctor(doctor: Doctor): Promise<DocumentReference> {
    return this.baseDatosService.insertar('doctores', doctor);
  }

  actualizarDoctor(doctor: Doctor): Promise<void> {
    return this.baseDatosService.actualizar('doctores', doctor);
  }

  async borrarDoctor(doctor: Doctor): Promise<void> {
    if (doctor.id) {
      const citasDoctor = await this.citaService.obtenerCitasPorIds([doctor.id]).toPromise();
  
      if (citasDoctor && citasDoctor.length === 0) {
        return this.baseDatosService.eliminar('doctores', doctor.id);
      } else {
        return Promise.reject("No se puede eliminar el doctor. Tiene citas asignadas.");
      }
    } else {
      return Promise.reject("El doctor no tiene un ID asignado.");
    }
  }
}
