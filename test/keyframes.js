const keyframeProperties = require('../src/keyframes')
const assert = require('assert')

describe('keyframeProperties', function () {
  it('Convert object keyframes to array', () => {
    const input = {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)']
    }
    const expect = [{
      opacity: 0.5,
      transform: 'scale(0.5)'
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(keyframeProperties(input), expect)
  })
  it('Ignore and convert object with easing', () => {
    const input = {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
      easing: 'ease-in-out'
    }
    const expect = [{
      opacity: 0.5,
      transform: 'scale(0.5)'
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }]
    assert.deepEqual(keyframeProperties(input), expect)
  })
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
  it('Convert from and to ', () => {
    const input = {
      from: {
        opacity: 0.5,
        transform: 'scale(0.5)',
      },
      to: {
        opacity: 1,
        transform: 'scale(1)',
      }
    }
    const expect = [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)',
    }]

    assert.deepEqual(keyframeProperties(input), expect)
  })
})
