import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  @Input() hotelId:any
  @Input() reviews: any;
  constructor(private destinationService: DestinationService) {}
};
