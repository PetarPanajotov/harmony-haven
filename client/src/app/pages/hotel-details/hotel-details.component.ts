import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  autoExpand(event: any) {
    const textarea = event.target;
    textarea!.style.height = 'auto';
    textarea!.style.height = (textarea.scrollHeight) + 'px'
  };
};