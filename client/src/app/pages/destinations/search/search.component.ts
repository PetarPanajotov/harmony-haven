import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DestinationService } from 'src/app/core/services/destination.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  destinationList: any;
  query$ = new Subject<string>();

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.query$
      .pipe(
        debounceTime(500), // Adjust the debounce time as needed
        distinctUntilChanged(),
        switchMap(query => {
          if (query.length >= 3) {
            return this.destinationService.getDestinations(query);
          } else if(query.length < 3) {
            this.destinationList = undefined;
          }
          return [];
        })
      )
      .subscribe((destinations) => {
        this.destinationList = destinations;
      });
  }
}

