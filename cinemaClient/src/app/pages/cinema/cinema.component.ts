import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/Model/cinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinemas: Cinema[];

  constructor(private service: CinemaService) { }

  ngOnInit(): void {
    this.initCinema();
  }

  initCinema = () => {
    this.service.findAllCinema().subscribe(data => {
      console.log(data);
      this.cinemas = data;
    })
  }
}
