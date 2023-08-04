import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destinationList: any = []
  constructor(private http: HttpClient) { }

  getDestinations() {
    return this.http.get('http://localhost:3000/destinations')
  }
}
