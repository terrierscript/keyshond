const keyframeProperties = require('../src/convert/keyframes')
const assert = require('assert')

describe('keyframeProperties', function () {
  describe('Object', function () {
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
  })
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
  describe('css @keyframes', () => {
    it('Convert from and to ', () => {
      const input = {
        from: { marginTop: '50px' },
        to: { marginTop: '100px' }
      }
      const expect = [{
        marginTop: '50px',
        offset: 0
      }, {
        opacity: 1,
        marginTop: '100px',
        offset: 1
      }]

      assert.deepEqual(keyframeProperties(input), expect)
    })
    it('Convert percentages', () => {
      const input = {
        '0% ': { top: 0, left: 0 },
        ' 30%': { top: '50px' },
        '68%, 72%': { left: '50px' },
        '100%': { top: '100px', left: '100%' }
      }
      const expect = [
        { top: 0, left: 0, offset: 0 },
        { top: '50px', offset: 0.3 },
        { left: '50px', offset: 0.68 },
        { left: '50px', offset: 0.72 },
        { top: '100px', left: '100%', offset: 1 }
      ]
      assert.deepEqual(keyframeProperties(input), expect)
    })
  })
})
