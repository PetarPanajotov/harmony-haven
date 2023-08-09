import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopularFilterPipe } from 'src/app/shared/pipes/popular-filter.pipe';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  providers: [PopularFilterPipe]
})
export class DestinationsComponent implements OnInit, OnDestroy {
  destinationList: any = [];
  editDestinationData: any = {};
  isEditing: boolean = false;
  isCreating: boolean = false;

  private modalStatusSubscription: Subscription = Subscription.EMPTY;

  constructor(private destinationService: DestinationService, public modalService: ModalService) {
    
  }

  ngOnInit(): void {
    this.destinationService.getDestinations()
      .subscribe({
        next: (destinations) => {
          this.destinationList = destinations;
        }
      })
      this.modalStatusSubscription = this.modalService.modalStatus$.subscribe((modalStatus) => {
        if (!modalStatus) {
          this.isEditing = false;
          this.isCreating = false;
        }
      });;
  };

  ngOnDestroy(): void {
    this.modalStatusSubscription.unsubscribe();
  }

  onDestinationAdded(newDestination: any): void {
    this.destinationList = [newDestination, ...this.destinationList];
  };

  onDestinationEdit(destinationData : boolean): void {
    this.modalService.openModal();
    this.editDestinationData = destinationData;
    this.isEditing = !!destinationData; 
  };

  onDestinationCreate(isClicked: boolean): void {
    this.modalService.openModal();
    this.isCreating = isClicked;
  };
};
