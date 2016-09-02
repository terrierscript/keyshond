const animate = require('../src/').animate
const assert = require('assert')

describe('convert', function () {
  it('generateAnimationName', () => {
    const result = animate({
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)']
    }, 200, {
      generateAnimationName: (keyframes) => {
        return 'my-registration-name'
      }
    })
    const expect = {
      'animationName': 'my-registration-name',
      'animationTimingFunction': 'linear',
      'animationDuration': '200ms'
    }
    assert.deepEqual(result, expect)
  })
})
