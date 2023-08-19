import { Component, Input, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/core/services/destination.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() hotelId: any;
  @Input() hotelReviewsCount: any;
  reviews: any = [];
  hasReview: boolean = false;
  reviewToEdit: any;
  pagination = {
    offset: 0,
    limit: 5
  };

  constructor(
    private destinationService: DestinationService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.destinationService.getReviews(this.hotelId, this.pagination.offset, this.pagination.limit)
      .subscribe((reviewData) => {
        (this.reviews = reviewData).map((review: any) => review.editing = false)
      });
      if (this.userService.isLogged && !this.reviewToEdit) {
        this.destinationService.getIfUserHasReview(this.hotelId)
          .subscribe((isUserHasReview) => this.hasReview = isUserHasReview)
      }
  };

  handleReviewListUpdate(updatedList: any, review?: any) {
    this.reviews = updatedList;
    this.hasReview = true;
    if (review) {
      review.editing = false;
    }
  };

  onEditClicked(review: any): void {
    this.destinationService.getReviewById(review._id)
      .subscribe((reviewData) => {
        this.reviewToEdit = reviewData;
        review.editing = true;
      })
  };

  onDeleteClicked(review: any): void {
    this.destinationService.deleteReview(review._id)
      .subscribe((reviewData) => {
        this.reviews = this.reviews.filter((review:any) => review._id !== reviewData._id )
        this.hasReview = false;
      });
  };

  loadMoreReviews(): void {
    this.pagination.offset += 5;
    this.destinationService.getReviews(this.hotelId, this.pagination.offset, this.pagination.limit)
      .subscribe((reviewData) => {
        this.reviews.push(...reviewData)
      });
  };
};
