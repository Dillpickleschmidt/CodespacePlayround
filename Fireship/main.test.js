import {expect, test} from 'vitest';

import { cumSum } from './cumSum.js';

import { LRU } from './LRUCache.js';

test('cumulative sum of an array', () => {
    expect(cumSum([1,3,5,7])).toBe(16)
    expect(cumSum([-2, -4, -8])).toBe(-14)
})

test('most recent item in cache', () => {
    let cache = new LRU(10)

    cache.putItem('a', 1)
    cache.putItem('b', 1)
    cache.putItem('c', 1)
    cache.putItem('d', 1)
    cache.putItem('e', 1)
    cache.putItem('f', 1)
    cache.putItem('g', 1)
    cache.putItem('h', 1)
    cache.putItem('i', 1)
    cache.putItem('j', 1)
    cache.putItem('k', 1)
    expect(cache.getItem('b')).toBe(1)
    expect(cache.getItem('a')).toBe(undefined)
})