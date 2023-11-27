import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciasService } from '../conferencias.service';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {
  conferencias: Array<Conferencia> = [];
  conferenciasFuturas: number = 0;

  constructor(private conferenciasService: ConferenciasService) { }

  getConferencias(): void {
    this.conferenciasService.getCOnferencias().subscribe((conferencias) => {
      const currentDate = new Date();
      this.conferencias = conferencias;
      this.conferenciasFuturas = conferencias.filter(conferencia => 
        new Date(conferencia.starts) > currentDate
      ).length;
    });
  }

  ngOnInit() {
    this.getConferencias();
  }
}
