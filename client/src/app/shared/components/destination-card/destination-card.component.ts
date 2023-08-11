import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DestinationService } from 'src/app/core/services/destination.service';


@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input() destination: any;
  @Output() detinationData: EventEmitter<any> = new EventEmitter();

  constructor(private destinationService: DestinationService) { }
  onEditClicked(event: Event): void {
    //to prevent from routing;
    event.stopPropagation();
    event.preventDefault();
    
    const destinationId = this.destination._id;
    this.destinationService.getDestinationById(destinationId)
      .subscribe((destinationData) => this.detinationData.emit(destinationData));
  };
};
