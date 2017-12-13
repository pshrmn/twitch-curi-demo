import { weightedRandomNumberGenerator } from '@/utils/random';

describe('weightedRandomNumberGenerator', () => {
  const gen = weightedRandomNumberGenerator([
    { w: 1, range: [0,5] },
    { w: 2, range: [5,10] },
    { w: 3, range: [10,20] },
  ]);

  it('returns a function returns a random number within the range', () => {
    const n = gen();
    expect(typeof n).toBe('number');
    expect(n).toBeGreaterThan(0);
    expect(n).toBeLessThan(20);
  });

  it('returns random numbers with approximately expected frequency', () => {
    let buckets = [0, 0, 0];
    let delta = 0.3;
    function withinDelta(expected, actual, delta) {
      return (expected-delta) < actual && actual < (expected + delta)
    }

    for (let i=0; i<10000; i++) {
      const n = gen();
      if (n < 5) {
        buckets[0]++;
      } else if (n < 10) {
        buckets[1]++;
      } else if (n < 20) {
        buckets[2]++;
      } else {
        console.error('This should not happen');
      }
    }
    let ratios = buckets.map(b => b/buckets[0]);
  
    expect(withinDelta(1, ratios[0], delta)).toBe(true);
    expect(withinDelta(2, ratios[1], delta)).toBe(true);
    expect(withinDelta(3, ratios[2], delta)).toBe(true);
  });
});
