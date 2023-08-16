import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  @Input() hotelId: any
  reviewForm: any;

  gradeOptions: { value: number, text: string }[] = [
    { value: 10, text: 'Perfection' },
    { value: 9, text: 'Outstanding' },
    { value: 8, text: 'Excellent' },
    { value: 7, text: 'Great' },
    { value: 6, text: 'Very Good' },
    { value: 5, text: 'Good' },
    { value: 4, text: 'Average' },
    { value: 3, text: 'Fair' },
    { value: 2, text: 'Poor' },
    { value: 1, text: 'Terrible' }
  ];

  constructor(private destinationService: DestinationService) { };

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      grade: new FormControl(''),
      text: new FormControl(''),
    });
    console.log(this.hotelId)
  };

  autoExpand(event: any): void {
    const textarea = event.target;
    textarea!.style.height = 'auto';
    textarea!.style.height = (textarea.scrollHeight) + 'px';
  };

  createReview(): void {
    const { grade, text } = this.reviewForm.value
    console.log(grade, text)
    this.destinationService.createReview(this.hotelId!, grade!, text!)
      .subscribe((data) => console.log(data));
  };
};
