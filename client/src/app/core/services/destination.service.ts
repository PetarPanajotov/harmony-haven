import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from '../types/destination';
import { api } from 'src/app/shared/constants';
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
      return this.http.get(api + `destinations?search=${searchQuery}`)
    } else if (offset !== undefined && limit !== undefined) {
      return this.http.get(api + `destinations?offset=${offset}&limit=${limit}`)
    }

    return this.http.get(api + `destinations`)
  };

  createDestination(
    destinationName: string,
    destinationLocation: string,
    imgURL: string
  ) {
    return this.http.post<any>(api + `destinations`, {
      destinationName,
      destinationLocation,
      imgURL
    });
  };
  getDestinationById(destinationId: string) {
    return this.http.get<Destination>(api + `destinations/${destinationId}`)
  };

  editDestination(
    destinationId: string,
    destinationName: string,
    destinationLocation: string,
    imgURL: string,
  ) {
    return this.http.put<any>(api + `destinations/${destinationId}`, {
      destinationName,
      destinationLocation,
      imgURL
    });
  };
  deleteDestination(
    destinationId: string
  ) {
    return this.http.delete<any>(api + `destinations/${destinationId}`)
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
    return this.http.post<any>(api + `${destinationId}/hotels`, {
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
    return this.http.get<any>(api + `${destinationId}/hotels`)
  };

  getHotelById(
    hotelId: string,
  ) {
    return this.http.get<any>(api + `hotels/${hotelId}`)
  };
  editHotel(
    hotelId: string,
    hotelName: string,
    hotelLocation: string,
    imgURL: string,
    stars: any,
    type: string,
    price: any,
    freeRooms: any,
    description: string
  ) {
    return this.http.put<any>(api + `hotels/${hotelId}`, {
      hotelName,
      hotelLocation,
      imgURL,
      stars,
      type,
      price,
      freeRooms,
      description
    });
  };

  deleteHotel(
    hotelId: string
  ) {
    return this.http.delete<any>(api + `hotels/${hotelId}`)
  }
  getIfUserHasReview(
    hotelId:string,
    ) {
    return this.http.get<any>(api + `${hotelId}/reviews/check-user`)
  }
  getReviews(
    hotelId: string,
    offset: number,
    limit: number
  ) {
    return this.http.get<any>(api + `${hotelId}/reviews?offset=${offset}&limit=${limit}`)
  };
  //reviews
  getReviewById(
    reviewId: string
  ) {
    return this.http.get<any>(api + `reviews/${reviewId}`)
  }
  createReview(
    hotelId: string,
    rating: number,
    text: string
  ) {
    return this.http.post<any>(api + `${hotelId}/reviews`, {
      rating,
      text
    });
  };
  editReview(
    reviewId: string,
    rating: number,
    text: string
  ) {
    return this.http.put<any>(api + `reviews/${reviewId}`, {
      rating,
      text
    })
  }
  deleteReview(
    reviewId: string
  ) {
    return this.http.delete<any>(api + `reviews/${reviewId}`)
  }
};

