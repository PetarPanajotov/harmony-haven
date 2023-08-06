import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDestinationModalComponent } from './create-destination-modal.component';

describe('CreateDestinationModalComponent', () => {
  let component: CreateDestinationModalComponent;
  let fixture: ComponentFixture<CreateDestinationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDestinationModalComponent]
    });
    fixture = TestBed.createComponent(CreateDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
