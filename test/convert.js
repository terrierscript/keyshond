const convert = require('../lib/convert')
const assert = require('assert')

describe('convert', function () {
  it('Complex example', () => {
    const result = convert([{
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
      animationDelay: null,
      animationIterationCount: 'infinite',
      animationFillMode: undefined,
      animationPlayState: undefined,
      animationTimingFunction: 'linear,linear,linear,linear'
    }
    assert.deepEqual(result, expect)
  })
})