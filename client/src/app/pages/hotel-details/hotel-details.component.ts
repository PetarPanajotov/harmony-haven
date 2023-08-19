import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: any | undefined;
  hotelId: any;
  hotelToEdit: any;
  pagination = {
    offset: 0,
    limit: 5
  }

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private router: Router,
    public modalService: ModalService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => this.hotelId = params.get('hotelId'));
    this.destinationService.getHotelById(this.hotelId)
      .subscribe((hotelData) => this.hotel = hotelData);
  };

  handleHotelUpdate(updatedHotel: any) {
    this.hotel = updatedHotel;
    this.modalService.closeModal()
  };

  onEditClicked(): void {
    this.destinationService.getHotelById(this.hotelId)
      .subscribe((hotel) => {
        this.hotelToEdit = hotel
        this.modalService.openModal()
      })
  };
  onDeleteClicked(): void {
    this.destinationService.deleteHotel(this.hotelId)
      .subscribe((hotel) => {
        const name = this.route
        this.router.navigate(['destinations'])
      });
  };
};