const convertKeyframes = require('./keyframes')
const convertOptions = require('./options')
const calcTimings = require('./timings')

const zipObject = (keys, values) => {
  return keys.reduce((prev, key, index) => {
    return Object.assign({}, prev, {
      [key]: values[index]
    })
  }, {})
}

const convert = (keyframeInput, options) => {
  const keyfreames = convertKeyframes(keyframeInput)
  const animateOptions = convertOptions(keyframeInput, options)

  const timings = calcTimings(keyfreames)

  const keyframeProps = {
    animationName: zipObject(timings, keyfreames)
  }

  return Object.assign({}, keyframeProps, animateOptions)
}

module.exports = convert
