import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-create-destination-modal',
  templateUrl: './create-destination-modal.component.html',
  styleUrls: ['./create-destination-modal.component.css']
})
export class CreateDestinationModalComponent {
  constructor(private modalService: ModalService) { }


  closeCreateModal(): void {
    this.modalService.closeModal()
  }
}
