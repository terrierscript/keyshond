const keyframeProperties = require('../lib/convert/keyframes')
const assert = require('assert')

describe('keyframeProperties', function () {
  describe('Array', function () {
    it('Enable array keyframes', () => {
      const input = [{
        opacity: 0.5,
        transform: 'scale(0.5)'
      }, {
        opacity: 1,
        transform: 'scale(1)'
      }]
      assert.deepEqual(keyframeProperties(input), input)
    })
    it('Convert easing property', () => {
      const input = [{
        opacity: 0.5,
        transform: 'scale(0.5)',
        easing: 'ease-in-out'
      }, {
        opacity: 1,
        transform: 'scale(1)',
        easing: 'ease-out'
      }]
      const expect = [{
        opacity: 0.5,
        transform: 'scale(0.5)',
        animationTimingFunction: 'ease-in-out'
      }, {
        opacity: 1,
        transform: 'scale(1)',
        animationTimingFunction: 'ease-out'
      }]

      assert.deepEqual(keyframeProperties(input), expect)
    })
  })
})
