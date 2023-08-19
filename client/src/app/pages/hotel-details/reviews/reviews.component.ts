import { Component, Input, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() hotelId: any;
  @Input() hotelReviewsCount: any;
  reviews: any = [];
  pagination = {
    offset: 0,
    limit: 5
  }

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.destinationService.getReviews(this.hotelId, this.pagination.offset, this.pagination.limit)
      .subscribe((reviewData) => this.reviews = reviewData);
  };

  handleReviewListUpdate(updatedList: any) {
    this.reviews = updatedList;
  };

  loadMoreReviews(): void {
    this.pagination.offset += 5;
    this.destinationService.getReviews(this.hotelId, this.pagination.offset, this.pagination.limit)
      .subscribe((reviewData) => {
        this.reviews.push(...reviewData)
      });
  };  
};
