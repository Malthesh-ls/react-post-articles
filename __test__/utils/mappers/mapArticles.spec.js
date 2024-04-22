import { mapArticles } from '../../../src/utils/mappers/mapArticles';
import { mockArticles } from '../../test-helpers/mockData';

describe('Map Articles Tests', () => {
  it('should map and return the empty details', () => {
    const res = mapArticles([]);
    expect(res).toStrictEqual([]);
  });
  it('should map and return the details', () => {
    const res = mapArticles(mockArticles);
    expect(res).not.toBe([]);
  });
});
