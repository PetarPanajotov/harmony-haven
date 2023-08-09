import { TestBed } from '@angular/core/testing';

import { ModalInteractionService } from './modal-interaction.service';

describe('ModalInteractionService', () => {
  let service: ModalInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
