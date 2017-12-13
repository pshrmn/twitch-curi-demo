import { word, sentence, paragraphs } from '@/utils/loremIpsum';

describe('loremIpsum', () => {
  describe('word', () => {
    it('returns a string between 1 and 6 characters long', () => {
      for (let i=0; i<100; i++) {
        const w = word();
        expect(w.length).toBeGreaterThanOrEqual(1);
        expect(w.length).toBeLessThanOrEqual(6);
      }
    });
  });

  describe('sentence', () => {
    it('returns a string that begins with a capital letter', () => {
      const s = sentence();
      expect(s.charAt(0)).toEqual(s.charAt(0).toUpperCase());
    });

    it('returns a string that ends with a period', () => {
      const s = sentence();
      expect(s.charAt(s.length-1)).toBe('.');
    });
  });

  describe('paragraphs', () => {
    it('returns a string with one paragraph', () => {
      const paragraph = paragraphs();
      expect(paragraph.split('\n').length).toBe(1);
    });
  
    it('returns a string with requested number of paragraphs', () => {
      const paragraph = paragraphs(3);
    });
  });
});
