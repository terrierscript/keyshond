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
  const timings = calcTimings(keyfreames, options)
  const animationName = bindTimings(keyfreames, timings)
  const animateOptions = convertOptions(keyframeInput, options)
  const animation = Object.assign({}, {
    animationName: animationName
  }, animateOptions)
  return animation
}

module.exports = convert
module.exports.default = convert