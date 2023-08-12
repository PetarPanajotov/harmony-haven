import { Component, Output } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-add-hotel-card',
  templateUrl: './add-hotel-card.component.html',
  styleUrls: ['./add-hotel-card.component.css']
})
export class AddHotelCardComponent {
  constructor(private modalService: ModalService) {}

  onCreateHotelClicked(): void {
    this.modalService.openModal()
  };
};
