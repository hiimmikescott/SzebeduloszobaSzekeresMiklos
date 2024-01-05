import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  rooms: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/foglalasok').subscribe(
      (data) => {
        this.rooms = data;
      },
      (error) => {
        console.error('Nem jön át az adat az Api-ból:', error);
      }
    );
  }
}
