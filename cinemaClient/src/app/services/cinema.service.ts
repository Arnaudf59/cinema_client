import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cinema } from '../Model/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  findAllCinema = () => {
    return this.http.get<Cinema[]>(`${environment.apiUrl}/cinemas`);
  }

  findById = (idCinema: String) =>{
    return this.http.get<Cinema>(`${environment.apiUrl}/cinemas/${idCinema}`);
  }
  

}
