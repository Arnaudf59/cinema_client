import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ticket } from '../Model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  createTicket(id: String){
    return this.http.post<Ticket>(`${environment.apiUrl}/tickets`, id);
  }
}
