import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Film } from '../Model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  findById = (id : String) => {
    return this.http.get<Film>(`${environment.apiUrl}/films/${id}`);
  }
}
