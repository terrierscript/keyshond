const convertKeyframes = require('./keyframes')
const convertOptions = require('./options')
const calcTimings = require('./timings')

const bindTimings = (animates, timings) => {
  let result = {}
  animates.map((animate, index) => {
    let time = timings[index]
    result[time] = animate
  })
  return result
}

const convert = (keyframeInput, options) => {
  const keyfreames = convertKeyframes(keyframeInput)
  const animateOptions = convertOptions(keyframeInput, options)

  const timings = calcTimings(keyfreames)

  const keyframeProps = {
    animationName: bindTimings(keyfreames, timings)
  }

  const animation = Object.assign({}, keyframeProps, animateOptions)
  return animation
}

module.exports = convert
module.exports.default = convert