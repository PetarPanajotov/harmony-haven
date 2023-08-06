import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-destination-card',
  templateUrl: './add-destination-card.component.html',
  styleUrls: ['./add-destination-card.component.css']
})
export class AddDestinationCardComponent { 

  constructor(private router: Router) {}

  navigateToCreateDestination():void {
    this.router.navigate(['/destinations/create'])
  };
};
