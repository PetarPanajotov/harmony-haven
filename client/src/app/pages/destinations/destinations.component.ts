import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/core/services/destination.service';
import { PopularFilterPipe } from 'src/app/shared/pipes/popular-filter.pipe';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  providers: [PopularFilterPipe]
})
export class DestinationsComponent implements OnInit {
  destinationList: any = []
  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.destinationService.getDestinations()
      .subscribe({
        next: (destinations) => {
          this.destinationList = destinations;
        }
      })
  }

}
