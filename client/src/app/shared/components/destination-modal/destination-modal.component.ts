import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from 'src/app/core/services/modal.service';


@Component({
  selector: 'app-destination-modal',
  templateUrl: './destination-modal.component.html',
  styleUrls: ['./destination-modal.component.css']
})

export class DestinationModalComponent implements OnInit {
  @Input() isEditMode: boolean = false;
  @Output() destinationAdded: EventEmitter<any> = new EventEmitter();
  destinationForm:any = [];

  ngOnInit(): void {
    this.destinationForm = new FormGroup({
      destinationName: new FormControl(''),
      destinationLocation: new FormControl(''),
      imgURL: new FormControl('')
    }); 
  }
  constructor(private modalService: ModalService, private destinationService: DestinationService) { };


  closeCreateModal(): void {
    this.modalService.closeModal();
    this.isEditMode = false;
  };

  createDestination(): void {
    const {
      destinationName,
      destinationLocation,
      imgURL
    } = this.destinationForm.value;

    this.destinationService.createDestination(destinationName!, destinationLocation!, imgURL!)
      .subscribe((destination) => {
        this.destinationAdded.emit(destination)
        this.modalService.closeModal();
      });
  };
}
