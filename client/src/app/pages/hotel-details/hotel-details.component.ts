import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: any | undefined;
  hotelId: any;
  pagination = {
    offset: 0,
    limit: 5
  }

  constructor(private destinationService: DestinationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.hotelId = params.get('hotelId');
      this.destinationService.getHotelById(this.hotelId)
        .subscribe((hotelData) => this.hotel = hotelData)
    });
  };
};