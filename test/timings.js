const timings = require('../src/convert/timings')
const calcTimings = timings.calcPrecentageTimings
const assert = require('assert')

describe('timings', function () {
  it('array keyframes to regular interval', () => {
    const result = calcTimings([
      {color: 'red'},
      {color: 'green'},
      {color: 'blue'}
    ])
    assert.deepEqual(result, ['0%', '50%', '100%'])
  })
  it('use offset if array has property', () => {
    const result = calcTimings([
      {color: 'red'},
      {color: 'yellow', offset: 0.235},
      {color: 'green', offset: 0.9},
      {color: 'blue', offset: 1}
    ])
    assert.deepEqual(result, ['0%', '23.5%', '90%', '100%'])
  })
  it('ignore first keyframe offset', () => {
    const result = calcTimings([
      {color: 'red', offset: 0.2}, // ignore
      {color: 'yellow', offset: 0.23},
      {color: 'green', offset: 0.9},
      {color: 'blue', offset: 1}
    ])
    assert.deepEqual(result, ['0%', '23%', '90%', '100%'])
  })
})
