const convertOptions = require('../lib/options')
const assert = require('assert')

describe('convertOptions', function () {
  it('only number', () => {
    let result = convertOptions([], 2000)
    console.log(result)
    assert.deepEqual(result, {
      animationDelay: '2000ms',
      animateTimingFunction: 'linear'
    })
  })
})
