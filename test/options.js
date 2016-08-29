const convertOptions = require('../lib/options')
const assert = require('assert')

describe('convertOptions', function () {
  it('only number', () => {
    let result = convertOptions({}, 2000)
    assert.deepEqual(result, {
      animationDuration: '2000ms',
      animateTimingFunction: 'linear'
    })
  })
})
