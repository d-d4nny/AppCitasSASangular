// detalle-cita.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/service/cita.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaComponent implements OnInit {
  cita: Cita | undefined;

  constructor(
    private citaService: CitaService,
    private route: ActivatedRoute,
    private notificacionesServicio: NotificacionesService
  ) { }

  ngOnInit(): void {
    const citaId = this.route.snapshot.params['id'];

    this.citaService.obtenerCita(citaId).subscribe(cita => {
      this.cita = cita;
    });
  }


  cancelarCita(citaId: string, fechaCita: Date) {
    const fechaActual = new Date();
    const fechaCitaDate = new Date(fechaCita);

    // Verifica si la fecha actual es posterior a la fecha de la cita
    if (this.cita?.fechaHora && fechaActual >= fechaCitaDate) {
      console.log(
        'La fecha de la cita ya ha pasado',
        this.cita?.fechaHora,
        fechaActual
      );
      // Muestra un mensaje indicando que la fecha de la cita ha pasado y no se puede cancelar
      this.notificacionesServicio.mostrarNotificacion(
        'No puede cancelar la cita',
        'La fecha de la cita ya ha pasado. En este caso solo puede marcarla como completada o cancelada',
        'info'
      );
      return; // Sale del método y no permite cancelar la cita
    }

    // Si llega a este punto quiere decir que la fecha de la cita
    // no ha pasado todavía y se puede cancelar
    this.citaService.cancelarCita(citaId).then(() => {
      this.notificacionesServicio.mostrarNotificacion(
        'Cita cancelada',
        'La cita ha sido cancelada correctamente',
        'success'
      );
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }).catch(error => {
      console.error('Error al cancelar la cita:', error);
      this.notificacionesServicio.mostrarNotificacion(
        'Error al cancelar la cita',
        'Ha ocurrido un error al cancelar la cita. Por favor, inténtalo de nuevo más tarde',
        'error'
      );
    });
  }

  completarCita(citaId: string, fechaCita: Date) {
    const fechaActual = new Date();
    const fechaCitaDate = new Date(fechaCita);

    // Verifica si la fecha actual es posterior a la fecha de la cita
    if (this.cita?.fechaHora && fechaActual >= fechaCitaDate) {
      console.log(
        'La fecha de la cita ya ha pasado',
        this.cita?.fechaHora,
        fechaActual
      );
      // Muestra un mensaje indicando que la fecha de la cita ha pasado y no se puede completar
      this.notificacionesServicio.mostrarNotificacion(
        'No puede completar la cita',
        'La fecha de la cita ya ha pasado. En este caso solo puede marcarla como completada o cancelada',
        'info'
      );
      return; // Sale del método y no permite completar la cita
    }

    // Si llega a este punto quiere decir que la fecha de la cita
    // no ha pasado todavía y se puede completar
    this.citaService.completarCita(citaId).then(() => {
      this.notificacionesServicio.mostrarNotificacion(
        'Cita completada',
        'La cita ha sido completada correctamente',
        'success'
      );
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }).catch(error => {
      console.error('Error al completar la cita:', error);
      this.notificacionesServicio.mostrarNotificacion(
        'Error al completar la cita',
        'Ha ocurrido un error al completar la cita. Por favor, inténtalo de nuevo más tarde',
        'error'
      );
    });
  }
}
