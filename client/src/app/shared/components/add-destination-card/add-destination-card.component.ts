import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-add-destination-card',
  templateUrl: './add-destination-card.component.html',
  styleUrls: ['./add-destination-card.component.css']
})
export class AddDestinationCardComponent { 
  constructor(private modalService: ModalService) {}

  openCreateModal():void {
    this.modalService.openModal()
  };
};
