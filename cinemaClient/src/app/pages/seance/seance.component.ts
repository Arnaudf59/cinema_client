import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema } from 'src/app/Model/cinema';
import { Film } from 'src/app/Model/film';
import { Seance } from 'src/app/Model/seance';
import { CinemaService } from 'src/app/services/cinema.service';
import { FilmService } from 'src/app/services/film.service';
import { SeancesService } from 'src/app/services/seances.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  seances:  Seance[];
  film: Film;
  cinema: Cinema;

  constructor(
    private service: SeancesService,
    private serviceFilm : FilmService,
    private serviceCinema : CinemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listeSeances();
    this.filmInfo();
    this.cinemaInfo();
  }

  listeSeances = () => {
    let cinemaId = this.route.snapshot.params.id;
    let filmId = this.route.snapshot.params.idfilm;
    this.service.findByFilmAndCinema(cinemaId, filmId).subscribe(data =>{
      this.seances = data;
      console.log(this.seances);
    })
  }

  filmInfo = () => {
    let filmId = this.route.snapshot.params.idfilm;
    this.serviceFilm.findById(filmId).subscribe(data => {
      this.film = data;
    })
  }
  cinemaInfo = () => {
    let cinemaId = this.route.snapshot.params.id;
    this.serviceCinema.findById(cinemaId).subscribe(data => {
      this.cinema = data;
      console.log(this.cinema);
    })
  }

  reserve = (seance: String) => {
    console.log(seance);
  }

}
