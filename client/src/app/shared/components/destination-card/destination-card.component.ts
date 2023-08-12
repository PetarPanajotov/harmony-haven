import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DestinationService } from 'src/app/core/services/destination.service';


@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input() destination: any;
  @Input() destinationList: any;
  @Output() detinationData: EventEmitter<any> = new EventEmitter();
  @Output() destinationListUpdated: EventEmitter<any> = new EventEmitter()

  constructor(private destinationService: DestinationService) { }

  onEditClicked(event: Event): void {
    //to prevent from routing;
    event.stopPropagation();
    event.preventDefault();

    const destinationId = this.destination._id;
    this.destinationService.getDestinationById(destinationId)
      .subscribe((destinationData) => this.detinationData.emit(destinationData));
  };

  onDeleteClicked(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    const destinationId = this.destination._id;
    this.destinationService.deleteDestination(destinationId)
      .subscribe((destinationData) => {
        this.destinationList = this.destinationList.filter((destination: any) => destination._id !== destinationData._id);
        console.log(this.destinationList)
        this.destinationListUpdated.emit(this.destinationList)
      });
  };
};
