import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelModalComponent } from './hotel-modal.component';

describe('HotelModalComponent', () => {
  let component: HotelModalComponent;
  let fixture: ComponentFixture<HotelModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelModalComponent]
    });
    fixture = TestBed.createComponent(HotelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
