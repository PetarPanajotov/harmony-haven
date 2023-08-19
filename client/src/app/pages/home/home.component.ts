import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destinationList: any = []
  pagination = {
    offset: 0,
    limit: 4
  };

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations(undefined, this.pagination.offset, this.pagination.limit)
      .subscribe((destinationData) => this.destinationList = destinationData);
  };
};
