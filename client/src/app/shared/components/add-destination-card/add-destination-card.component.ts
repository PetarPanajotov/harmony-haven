import { Component, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-add-destination-card',
  templateUrl: './add-destination-card.component.html',
  styleUrls: ['./add-destination-card.component.css']
})
export class AddDestinationCardComponent {
  @Output() createDestinationClicked: EventEmitter<any> = new EventEmitter()
  constructor(private modalService: ModalService) { }

  onCreateClicked(): void {
    this.createDestinationClicked.emit(true);
    this.modalService.openModal()
  };
};
