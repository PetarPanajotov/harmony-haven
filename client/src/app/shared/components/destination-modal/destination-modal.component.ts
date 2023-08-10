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
  @Input() editDestinationData: any = undefined;
  @Output() destinationAdded: EventEmitter<any> = new EventEmitter();
  @Output() destinationEdited: EventEmitter<any> = new EventEmitter();
  destinationForm: any = [];

  ngOnInit(): void {
    if (!this.isEditMode) {
      this.destinationForm = new FormGroup({
        destinationName: new FormControl(''),
        destinationLocation: new FormControl(''),
        imgURL: new FormControl('')
      })
    } else {
      this.destinationForm = new FormGroup({
        destinationName: new FormControl(this.editDestinationData.destinationName),
        destinationLocation: new FormControl(this.editDestinationData.destinationLocation),
        imgURL: new FormControl(this.editDestinationData.imgURL)
      })
    };
  }
  constructor(private modalService: ModalService, private destinationService: DestinationService) { };


  closeDestinationModal(): void {
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

  editDestination(): void {
    const {
      destinationName,
      destinationLocation,
      imgURL
    } = this.destinationForm.value;

    const destinationId = this.editDestinationData._id;
    this.destinationService.editDestination(destinationId!, destinationName!, destinationLocation!, imgURL!)
      .subscribe((destination) => {
        this.destinationEdited.emit(destination);
        this.modalService.closeModal();
      }); 
  };
};
