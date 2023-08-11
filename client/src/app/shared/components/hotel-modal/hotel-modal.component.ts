import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.css']
})
export class HotelModalComponent implements OnInit {
  @Input() destinationId: string | undefined;
  hotelForm: any;
  constructor(private modalService: ModalService, private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.hotelForm = new FormGroup({
      hotelName: new FormControl(''),
      hotelLocation: new FormControl(''),
      imgURL: new FormControl(''),
      stars: new FormControl(''),
      type: new FormControl(''),
      rating: new FormControl(''),
      freeDate: new FormControl('')
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
      rating,
      freeDate
    } = this.hotelForm.value
    this.destinationService.createHotel(this.destinationId!, hotelName!, hotelLocation!, imgURL!, stars!, type!, rating!, freeDate!)
      .subscribe((hotel) => console.log(hotel))
  };
}