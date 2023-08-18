import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  apiError$ = this.errorService.apiError$$.asObservable()
  errorMsg = '';

  apiErrorSubscription: Subscription | undefined;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.apiErrorSubscription = this.apiError$.subscribe((error: any) => {
      this.errorMsg = error?.error || ""

      if (error) {
        setTimeout(() => {
          this.errorMsg = ''
          this.errorService.removeError()
        }, 5000)
      }
    });
  };
  ngOnDestroy(): void {
    this.apiErrorSubscription?.unsubscribe()
  };
};
