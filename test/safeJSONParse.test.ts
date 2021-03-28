import { safeJSONParse } from '../src/safeJSONParse';

describe('safeJSONParse', () => {
  it('解析 JSON 字符串', () => {
    expect(safeJSONParse('[]')).toStrictEqual([]);
    expect(safeJSONParse('abc', false)).toBe(false);
    expect(safeJSONParse('{"a": 1}')).toStrictEqual({a: 1});
  });
});
