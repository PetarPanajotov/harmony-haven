import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from '../types/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  getDestinations(searchQuery?: string) {
    if (searchQuery) {
      return this.http.get(`http://localhost:3000/destinations?search=${searchQuery}`)
    }
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
  deleteDestination(
    destinationId: string
  ) {
    return this.http.delete<any>(`http://localhost:3000/destinations/${destinationId}`)
  }

  createHotel(
    destinationId: string,
    hotelName: string,
    hotelLocation: string,
    imgURL: string,
    stars: number,
    type: string,
    rating: number,
    freeDate: number
  ) {
    return this.http.post<any>(`http://localhost:3000/${destinationId}/hotels`, {
      hotelName,
      hotelLocation,
      imgURL,
      stars,
      type,
      rating,
      freeDate
    })
  }
  getHotels(
    destinationId: string
  ) {
    return this.http.get<any>(`http://localhost:3000/${destinationId}/hotels`)
  };
};

