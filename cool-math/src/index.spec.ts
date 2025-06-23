import { expect, test } from 'vitest'
import { sum } from './index'

test('add 1 and 3 and expect 4', ()=>{
    // arrange
    const first = 1
    const second = 2
    // act
    const argsSum = sum(first, second)
    // assert
    const expected = 3
    expect(argsSum).toBe(expected)
})