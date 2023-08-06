import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestinationCardComponent } from './add-destination-card.component';

describe('AddButtonComponent', () => {
  let component: AddDestinationCardComponent;
  let fixture: ComponentFixture<AddDestinationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDestinationCardComponent]
    });
    fixture = TestBed.createComponent(AddDestinationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
