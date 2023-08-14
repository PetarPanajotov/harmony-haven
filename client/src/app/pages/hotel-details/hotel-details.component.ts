import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{
  hotel:any;

  constructor(private destinationService: DestinationService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const hotelId: string | null = params.get('hotelId');
    this.destinationService.getHotelById(hotelId!)
      .subscribe((hotel) => console.log(hotel))
  })
}
  autoExpand(event: any) {
    const textarea = event.target;
    textarea!.style.height = 'auto';
    textarea!.style.height = (textarea.scrollHeight) + 'px'
  };
};