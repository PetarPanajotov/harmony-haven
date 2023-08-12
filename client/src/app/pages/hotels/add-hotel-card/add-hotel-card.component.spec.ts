import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelCardComponent } from './add-hotel-card.component';

describe('AddHotelCardComponent', () => {
  let component: AddHotelCardComponent;
  let fixture: ComponentFixture<AddHotelCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHotelCardComponent]
    });
    fixture = TestBed.createComponent(AddHotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
