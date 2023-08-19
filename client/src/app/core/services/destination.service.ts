import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from '../types/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  getDestinations(
    searchQuery?: string,
    offset?: number,
    limit?: number
    ) {
    if (searchQuery) {
      return this.http.get(`http://localhost:3000/destinations?search=${searchQuery}`)
    } else if (offset !== undefined && limit !== undefined) {
      return this.http.get(`http://localhost:3000/destinations?offset=${offset}&limit=${limit}`)
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
//hotels
  createHotel(
    destinationId: string,
    hotelName: string,
    hotelLocation: string,
    imgURL: string,
    stars: any,
    type: string,
    price: any,
    freeRooms: any,
    description: string
  ) {
    return this.http.post<any>(`http://localhost:3000/${destinationId}/hotels`, {
      hotelName,
      hotelLocation,
      imgURL,
      stars,
      type,
      price,
      freeRooms,
      description
    })
  }

  getHotels(
    destinationId: string
  ) {
    return this.http.get<any>(`http://localhost:3000/${destinationId}/hotels`)
  };

  getHotelById(
    hotelId: string,
  ) {
    return this.http.get<any>(`http://localhost:3000/hotels/${hotelId}`)
  };
  getIfUserHasReview(
    hotelId:string,
    ) {
    return this.http.get<any>(`http://localhost:3000/${hotelId}/reviews/check-user`)
  }
  getReviews(
    hotelId: string,
    offset: number,
    limit: number
  ) {
    return this.http.get<any>(`http://localhost:3000/${hotelId}/reviews?offset=${offset}&limit=${limit}`)
  };
  //reviews
  createReview(
    hotelId: string,
    rating: number,
    text: string
  ) {
    return this.http.post<any>(`http://localhost:3000/${hotelId}/reviews`, {
      rating,
      text
    });
  };
};

