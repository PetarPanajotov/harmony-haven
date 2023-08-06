import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStatus = new BehaviorSubject<boolean>(false);
  public modalStatus$ = this.modalStatus.asObservable();
  constructor() { }

  openModal() {
    this.modalStatus.next(true);
  }

  closeModal() {
    this.modalStatus.next(false);
  };
};
