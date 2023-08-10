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
    return this.http.get(`http://localhost:3000/destinations/${destinationId}`)
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
