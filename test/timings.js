const timings = require('../lib/timings')
const assert = require('assert')

describe('timings', function () {
  it('Defualt array', () => {
    const result = timings([
      {color: 'red'},
      {color: 'green'},
      {color: 'blue'},
    ])
    assert.deepEqual(result, [0, 50, 100])
  })
})
