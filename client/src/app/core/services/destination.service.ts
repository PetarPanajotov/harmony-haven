import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from '../types/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destination: Destination | undefined;
  constructor(private http: HttpClient) { }

  get destinationData() {
    return this.destination;
  }

  set destinationData(data) {
    this.destination = data
  }
  
  getDestinations() {
    return this.http.get('http://localhost:3000/destinations')
  };

  createDestination(
    destinationName: string,
    destinationLocation: string,
    imgURL: string
  ) {
    return this.http.post<any>('http://localhost:3000/destinations', {
      destinationName,
      destinationLocation,
      imgURL
    });
  };
  getDestinationById(destinationId: string) {
    return this.http.get<Destination>(`http://localhost:3000/destinations/${destinationId}`)
  };

  editDestination(
    destinationId: string,
    destinationName: string,
    destinationLocation: string,
    imgURL: string,
  ) {
    return this.http.put<any>(`http://localhost:3000/destinations/${destinationId}`, {
      destinationName,
      destinationLocation,
      imgURL
    });
  };
};
