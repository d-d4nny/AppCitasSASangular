import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-lista-doctores',
  templateUrl: './lista-doctores.component.html',
  styleUrls: ['./lista-doctores.component.css']
})
export class ListaDoctoresComponent {
  doctores: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  obtenerDoctores(): void {
    this.doctorService.obtenerDoctores().subscribe((doctores) => {
      this.doctores = doctores;
    });
  }
}
