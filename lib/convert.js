const keyframeProperties = require('./keyframeProperties')
const keyframeOptions = require('./keyframeOptions')
const keyframeTimings = require('./timings')

const bindTimings = (animates, timings) => {
  let result = {}
  animates.map((animate, index) => {
    let time = timings[index]
    result[`${time}%`] = animate
  })
  return result
}


const convert = (keyframeInput, options) => {
  const keyfreames = keyframeProperties(keyframeInput)
  const kfTimings = keyframeTimings(kfProperties, options)
  const animationName = bindTimings(kfProperties, kfTimings)
  const animateOptions = keyframeOptions(keyframes, options)
  const animation = Object.assign({}, {
    animationName: animationName
  }, animateOptions)
  return animation
}

module.exports = convert
module.exports.default = convert