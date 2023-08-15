import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() hotelId:any
  reviewForm: any;
  constructor(private destinationService: DestinationService) {}
  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      grade: new FormControl(''),
      text: new FormControl(''),
    });
    console.log(this.hotelId)
  };
  autoExpand(event: any) {
    const textarea = event.target;
    textarea!.style.height = 'auto';
    textarea!.style.height = (textarea.scrollHeight) + 'px'
  };
  
  createReview():void {
      const {grade, text} = this.reviewForm.value
      this.destinationService.createReview(this.hotelId!, grade!, text!)
        .subscribe((data) => console.log(data))
  }
}
