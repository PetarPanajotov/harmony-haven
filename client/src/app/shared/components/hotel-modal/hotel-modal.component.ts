import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';
import { Destination } from 'src/app/core/types/destination';

@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.css']
})
export class HotelModalComponent implements OnInit {
  @Input() destination: Destination | undefined;
  @Output() hotelListUpdated: EventEmitter<any> = new EventEmitter()
  hotelForm: any;

  constructor(private modalService: ModalService, private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.hotelForm = new FormGroup({
      hotelName: new FormControl(''),
      hotelLocation: new FormControl(''),
      imgURL: new FormControl(''),
      stars: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl(''),
      freeRooms: new FormControl(''),
      description: new FormControl('')
    });
  };

  closeHotelModal(): void {
    this.modalService.closeModal();
  }
  createHotel(): void {
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