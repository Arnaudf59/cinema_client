import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Film } from '../Model/film';
import { Seance } from '../Model/seance';

@Injectable({
  providedIn: 'root'
})
export class SeancesService {

  constructor(private http: HttpClient) { }

  findByCinema = (cinemaId: String) => {
    return this.http.get<Seance[]>(`${environment.apiUrl}/seances/cinema/${cinemaId}`);
  }

  findFilmByCinema = (cinemaId: String) => {
    return this.http.get<Film[]>(`${environment.apiUrl}/seances/film/cinema/${cinemaId}`);
  }
}
