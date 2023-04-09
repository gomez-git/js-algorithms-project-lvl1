import { describe, it, expect } from '@jest/globals';
import search from '../src/index.js';

describe('positive cases', () => {
  it('search a word in docs', () => {
    const doc1 = { id: 'doc1', text: 'hello world' };
    const doc2 = { id: 'doc2', text: 'Im a simple text.' };
    const doc3 = { id: 'doc3', text: 'Hello hello!' };
    const docs = [doc1, doc2, doc3];
    const result = search(docs, 'hello');

    expect(result).toEqual([doc1.id, doc3.id]);
  });
});

describe('negative cases', () => {
  const badDocs = [[{}], [1], [''], [true]];
  it.each(badDocs)('bad docs %#', (docs) => {
    expect(() => {
      search(docs, 'hello');
    }).toThrow();
  });

  const badPatterns = [[{}], [1], [[]], [true]];
  it.each(badPatterns)('bad pattern %#', (pattern) => {
    expect(() => {
      search([], pattern);
    }).toThrow();
  });
});
