import { word, sentence, paragraphs } from '@/utils/loremIpsum';

describe('loremIpsum', () => {
  describe('word', () => {
    it('returns a non-empty string', () => {
      for (let i=0; i<100; i++) {
        const w = word();
        expect(typeof w).toBe('string');
        expect(w).not.toBe('');
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
