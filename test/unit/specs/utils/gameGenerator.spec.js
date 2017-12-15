import { game } from '@/utils/gameGenerator'

describe('game generator', () => {
  it('returns a game object', () => {
    const g = game();
    expect(g).toMatchObject(
      expect.objectContaining({
        name: expect.any(String),
        watching: 0,
        colors: expect.objectContaining({
          top: expect.any(String),
          right: expect.any(String),
          bottom: expect.any(String),
          left: expect.any(String)
        })
      })
    )
  });
});
