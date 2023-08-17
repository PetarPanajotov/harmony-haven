import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error$ = this.errorService.error$$.asObservable()
  errorMsg = ''
  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.error$.subscribe((error: any) => {
      this.errorMsg = error.message
    });
  };

};
