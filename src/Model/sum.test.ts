import { expect, test } from 'vitest';
import * as testSum from './sum.ts';

test('adds 1 + 2 to equal 3', () => {
    expect(testSum.sum(1,2)).toBe(3);
});



