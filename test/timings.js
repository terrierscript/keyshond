const timings = require('../lib/timings')
const assert = require('assert')

describe('timings', function () {
  it('Should normal array keyframes to regular interval', () => {
    const result = timings([
      {color: 'red'},
      {color: 'green'},
      {color: 'blue'},
    ])
    assert.deepEqual(result, [0, 50, 100])
  })
  it('Should use offset if array has property', () => {
    const result = timings([
      {color: 'red'},
      {color: 'yellow', offset: 0.23},
      {color: 'green', offset: 0.9},
      {color: 'blue', offset: 1},
    ])
    assert.deepEqual(result, [0, 23, 90, 100])
  })
})
