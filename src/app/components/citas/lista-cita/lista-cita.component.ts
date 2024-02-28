import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.css']
})
export class ListaCitaComponent {

  citas: Cita[] = [];

  constructor(private citaService: CitaService) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas() {
    this.citaService.obtenerCitas().subscribe((citas: Cita[]) => {
      this.citas = citas;
    });
    
  }
}
