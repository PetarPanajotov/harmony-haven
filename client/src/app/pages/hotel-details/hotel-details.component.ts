import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  autoExpand(event: any) {
    const textarea = event.target;
    textarea!.style.height = 'auto';
    textarea!.style.height = (textarea.scrollHeight) + 'px'
  }
  // apiLoaded: Observable<boolean>;
  // constructor(httpClient: HttpClient) {
  //   this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=`, 'callback')
  //     .pipe(
  //       map(() => true),
  //       catchError(() => of(false)),
  //     );
  // }

}
