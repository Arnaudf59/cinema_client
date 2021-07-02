import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {

  @Input() cinema;
  constructor() { }

  ngOnInit(): void {
  }

}
