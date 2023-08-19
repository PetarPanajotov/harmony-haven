import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';
import { Destination } from 'src/app/core/types/destination';
import { ValidatorService } from 'src/app/core/services/validator.service';

@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.css']
})
export class HotelModalComponent implements OnInit {
  @Input() destination: Destination | undefined;
  @Output() hotelListUpdated: EventEmitter<any> = new EventEmitter()
  hotelForm: any = [];

  constructor(
    private modalService: ModalService,
    private destinationService: DestinationService,
    private validatorService: ValidatorService) { }
    
    ngOnInit(): void {
    this.hotelForm = new FormGroup({
      hotelName: new FormControl("", [Validators.required, this.validatorService.customHotelNameValidator()]),
      hotelLocation: new FormControl('', [Validators.required, this.validatorService.customHotelLocationValidator()]),
      imgURL: new FormControl('', [Validators.required, this.validatorService.customHotelImgURLValidator()]),
      stars: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, this.validatorService.customHotelPriceValidator()]),
      freeRooms: new FormControl('', [Validators.required, this.validatorService.customHotelFreeRoomsValidator()]),
      description: new FormControl('', [Validators.required, Validators.minLength(50)])
    });
  };

  closeHotelModal(): void {
    this.modalService.closeModal();
  }
  createHotel(): void {
    if(this.hotelForm.invalid) {
      return
    }
    const {
      hotelName,
      hotelLocation,
      imgURL,
      stars,
      type,
      price,
      freeRooms,
      description
    } = this.hotelForm.value;

    this.destinationService.createHotel(this.destination?._id!, hotelName!, hotelLocation!, imgURL!, stars!, type!, price!, freeRooms!, description)
      .subscribe((createdHotel) => {
        this.destination!.hotels = [createdHotel, ...this.destination?.hotels];
        this.hotelListUpdated.emit(this.destination);
        this.modalService.closeModal();
      });
  };
}