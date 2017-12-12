import { streamer } from '@/utils/streamerGenerator'

describe('streamer generator', () => {
  it('returns an object with the expected format', () => {
    const s = streamer();
    expect(s).toMatchObject(
      expect.objectContaining({
        username: expect.any(String),
        watching: expect.any(Number),
        followers: expect.any(Number)
      })
    );
  });
});
