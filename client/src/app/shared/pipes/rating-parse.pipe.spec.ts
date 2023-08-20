import { RatingParsePipe } from './rating-parse.pipe';

describe('RatingParsePipe', () => {
  it('create an instance', () => {
    const pipe = new RatingParsePipe();
    expect(pipe).toBeTruthy();
  });
});
