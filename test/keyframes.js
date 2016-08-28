const { convertKeyframes } = require('../src/keyframes')
const assert = require('assert')

describe('convertKeyframes', function () {
  it('convert object to array', () => {
    const input = {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }
    const expect = [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(convertKeyframes(input), expect)
  })
  // it('convert object with easing', () => {
  //   const input = {
  //     opacity: [0.5, 1],
  //     transform: ['scale(0.5)', 'scale(1)'],
  //     easing: 'ease-in-out',
  //   }
  //   console.log(convertKeyframes(input))
  // })
  it('enable array', () => {
    const input = [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(convertKeyframes(input), input)
  })
});