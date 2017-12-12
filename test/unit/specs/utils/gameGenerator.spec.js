import { game } from '@/utils/gameGenerator'

describe('game generator', () => {
  it('returns a string with three words', () => {
    const g = game();
    expect(typeof g).toBe('string');
    console.log("GAME:", g);
    expect(g.split(' ').length).toBe(3);
  });
});
