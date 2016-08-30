const convertOptions = require('../lib/options')
const assert = require('assert')

describe('convertOptions', function () {
  it('only number', () => {
    let result = convertOptions({}, 2000)
    assert.deepEqual(result, {
      animationDuration: '2000ms',
      animationTimingFunction: 'linear'
    })
  })
  it('full options', () => {
    let result = convertOptions({}, {
      delay: 100,
      direction: "alternate",
      duration: "300ms",
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
      fill: "backwards",
      iterations: Infinity
    })
    assert.deepEqual(result, {
      animationDelay: '100ms',
      animationDirection: "alternate",
      animationDuration: '300ms',
      animationTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)",
      animationFillMode: "backwards",
      animationIterationCount: "infinite"
    })
  })
  it('convert Number', () => {
    let result = convertOptions({}, {
      delay: 123,
      duration: 456,
    })
    assert.deepEqual(result, {
      animationDelay: "123ms",
      animationDuration: "456ms",
      animationTimingFunction: "linear"
    })
  })
})
