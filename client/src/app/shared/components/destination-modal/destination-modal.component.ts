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
  @Input() destinationList: any;
  @Input() destinationDataToEdit: any;
  @Output() destinationListUpdated: EventEmitter<any> = new EventEmitter();
  destinationForm: any = [];

  constructor(private modalService: ModalService, private destinationService: DestinationService) { };

  ngOnInit(): void {
    this.destinationForm = new FormGroup({
      destinationName: new FormControl(this.isEditMode ? this.destinationDataToEdit.destinationName : ""),
      destinationLocation: new FormControl(this.isEditMode ? this.destinationDataToEdit.destinationLocation : ""),
      imgURL: new FormControl(this.isEditMode ? this.destinationDataToEdit.imgURL : "")
    })
  }

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
      .subscribe((createdDestination) => {
        this.destinationList = [createdDestination, ...this.destinationList];
        this.destinationListUpdated.emit(this.destinationList);
        this.modalService.closeModal();
      });
  };

  editDestination(): void {
    const {
      destinationName,
      destinationLocation,
      imgURL
    } = this.destinationForm.value;

    const destinationId = this.destinationDataToEdit!._id;
    this.destinationService.editDestination(destinationId!, destinationName!, destinationLocation!, imgURL!)
      .subscribe((editDestination) => {
        this.destinationList = this.destinationList.map((destination: any) =>
        destination._id === editDestination._id ? editDestination : destination);
        this.destinationListUpdated.emit(this.destinationList);
        this.modalService.closeModal();
      });
  };
};
