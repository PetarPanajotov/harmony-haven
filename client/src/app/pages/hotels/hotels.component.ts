import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  destination = this.destinationService.destinationData;
  
  constructor(private route: ActivatedRoute, private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
        this.destinationService.getDestinationById(id!).subscribe((destination) => this.destination = destination)
    });
  };
};
