import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$$ = new BehaviorSubject(null)
  constructor() { }

  setError(error: any): void {
    this.error$$.next(error)
  };
};
