import { Injectable } from '@angular/core';
import { BaseDatosService } from './base-datos.service';
import { Cita } from '../models/cita';
import { Observable, map, switchMap, take } from 'rxjs';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  constructor(private baseDatosServicio: BaseDatosService) {}

  obtenerCitas(): Observable<Cita[]> {
    return this.baseDatosServicio.obtenerTodos('citas');
  }

  registrarCita(cita: Cita, usuarioId: string): Promise<DocumentReference<Cita>> {
    cita.usuarioId = usuarioId;
    return this.baseDatosServicio.insertar('citas', cita);
  }

  obtenerCita(id: string): Observable<Cita> {
    return this.baseDatosServicio.obtenerPorId('citas', id);
  }

  actualizarCita(cita: Cita): Promise<void> {
    return this.baseDatosServicio.actualizar('citas', cita);
  }

  obtenerCitasPorIds(id: string): Observable<Cita[]> {
    console.log(id)
    return this.baseDatosServicio
      .obtenerTodos('citas')
      .pipe(
        map((citas: Cita[]) =>
        citas.filter((cita) => id.includes(cita.usuarioId!)        )
        )
      );
  }

  completarCita(
    citaId: string
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.obtenerCita(citaId)
        .pipe(
          take(1),
          map((cita: Cita) => {
            // Cambia el estado de la cita a completado
            cita.estado = "completada";
            return cita;
          }),
          switchMap((cita: Cita) =>
            this.baseDatosServicio.actualizar('citas', cita)
          )
        )
        .subscribe({
          next: () => resolve(),
          error: (error) => reject(error),
        });
    });
  }

  cancelarCita(
    citaId: string
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.obtenerCita(citaId)
        .pipe(
          take(1),
          map((cita: Cita) => {
            // Cambia el estado de la cita a cancelado
            cita.estado = "cancelada";
            return cita;
          }),
          switchMap((cita: Cita) =>
            this.baseDatosServicio.actualizar('citas', cita)
          )
        )
        .subscribe({
          next: () => resolve(),
          error: (error) => reject(error),
        });
    });
  }
}
