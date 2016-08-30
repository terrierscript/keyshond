const animate = require('../lib/').animate
const assert = require('assert')

describe('convert', function () {
  it('Readme example', () => {
    const result = animate({
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      duration: 500,
      iterations: Infinity,
      direction: 'alternate',
    })
    console.log(JSON.stringify(result, null, 2))
    const expect = {}
    assert.deepEqual(result, expect)

  })
  it('Complex example', () => {
    const result = animate([{
      opacity: 1.2, transform: 'scale(1.2)',
    }, {
      opacity: 0.5, transform: 'scale(0.5)', offset: 0.3
    }, {
      opacity: 2, transform: 'scale(2)',
    }, {
      opacity: 1, transform: 'scale(1)', offset: 1,
    }], {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    })
    const expect = {
      animationName:
       { '0%': { opacity: 1.2, transform: 'scale(1.2)' },
         '30%': { opacity: 0.5, transform: 'scale(0.5)', offset: 0.3 },
         '66.66666666666666%': { opacity: 2, transform: 'scale(2)' },
         '100%': { opacity: 1, transform: 'scale(1)', offset: 1 } },
      animationDirection: 'alternate',
      animationDuration: '500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear,linear,linear,linear'
    }
    assert.deepEqual(result, expect)
  })
})