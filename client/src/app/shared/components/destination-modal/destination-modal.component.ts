import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { ValidatorService } from 'src/app/core/services/validator.service';


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

  constructor(
    private modalService: ModalService,
    private destinationService: DestinationService,
    private validatorService: ValidatorService) { };

  ngOnInit(): void {
    this.destinationForm = new FormGroup({
      destinationName: new FormControl(this.isEditMode ? this.destinationDataToEdit.destinationName : "", [Validators.required, this.validatorService.customDestinationNameValidator()]),
      destinationLocation: new FormControl(this.isEditMode ? this.destinationDataToEdit.destinationLocation : "", [Validators.required, this.validatorService.customDestinationLocationValidator()]),
      imgURL: new FormControl(this.isEditMode ? this.destinationDataToEdit.imgURL : "", [Validators.required, this.validatorService.customDestinationImgURLValidator()])
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

    if (this.destinationForm.invalid) {
      return
    };

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

    if (this.destinationForm.invalid) {
      return
    };
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
