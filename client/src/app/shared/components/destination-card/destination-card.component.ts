import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input() destination: any;
  @Output() editDestinationClicked: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: ModalService) { }

  onEditClicked(): void {
    this.editDestinationClicked.emit(true);
    this.modalService.openModal();
  };
};
