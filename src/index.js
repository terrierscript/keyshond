const { convertKeyframes } = require('./keyframes')

const bindTimings = (animates, timings) => {
  let result = {}
  animates.map((animate, index) => {
    let time = timings[index]
    result[`${time}%`] = animate
  })
  return result
}

const convertIterationCount = (iteration) => {
  if(iteration === Infinity){
    return 'infinite'
  }
  return null
}

const convertOptions = ({direction, duration, delay, iterations}) => {
  return {
    animationDirection: direction,
    animationDuration: duration + 'ms',
    animationDelay: delay + 'ms',
    animationIterationCount: convertIterationCount(iterations),
    animationTimingFunction: "linear" // TODO: CSS default = ease
  }
}

const convert = (keyframes, options) => {
  const timings = [0, 100]
  const animationName = bindTimings(
    convertKeyframes(keyframes),
    timings
  )
  const animateOptions = convertOptions(options)
  return Object.assign({}, {
    animationName
  }, animateOptions)
}

module.exports = {
  convert: convert,
  convertKeyframes: convertKeyframes
}