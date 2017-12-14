import { stream } from '@/utils/streamGenerator'

describe('stream generator', () => {
  it('returns an object with the expected format', () => {
    const s = stream();
    expect(s).toMatchObject(
      expect.objectContaining({
        username: expect.any(String),
        watching: expect.any(Number),
        followers: expect.any(Number)
      })
    );
  });
});
