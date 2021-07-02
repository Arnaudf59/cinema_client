import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema } from 'src/app/Model/cinema';
import { Film } from 'src/app/Model/film';
import { Seance } from 'src/app/Model/seance';
import { CinemaService } from 'src/app/services/cinema.service';
import { SeancesService } from 'src/app/services/seances.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  cinema: Cinema;
  seances: Seance[];
  films : Film[];

  constructor(
    private service: CinemaService,
    private service2: SeancesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cinemaChoix();
    this.listeSeances();
    this.listeFilm();
  }

  cinemaChoix = () => {
    let cinemaId = this.route.snapshot.params.id;
    this.service.findById(cinemaId).subscribe(data =>{
      this.cinema = data;
      console.log(this.cinema);
    })
  }

  listeSeances = () => {
    let cinemaId = this.route.snapshot.params.id;
    this.service2.findByCinema(cinemaId).subscribe(data =>{
      this.seances = data;
    })
  }

  listeFilm = () => {
    let cinemaId = this.route.snapshot.params.id;
    this.service2.findFilmByCinema(cinemaId).subscribe(data => {
      this.films = data;
      console.log(this.films)
    })
  }

}
