import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStatus$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public modalStatus$: Observable<boolean> = this.modalStatus$$.asObservable();
  constructor() { }

  openModal() {
    this.modalStatus$$.next(true);
  }

  closeModal() {
    this.modalStatus$$.next(false);
  };
};
