const { convertKeyframes } = require('./keyframes')

const bindTimings = (animates, timings) => {
  let result = {}
  animates.map((animate, index) => {
    let time = timings[index]
    result[`${time}%`] = animate
  })
  return result
}

const num = (num) => {
  if(num === Infinity){
    return 'infinite'
  }
  if(!isNaN(num)){
    return num + 'ms'
  }
  return null
}

const convertOptions = ({direction, duration, delay, iterations, timingFunction}) => {
  let _timingFunction = timingFunction ? timingFunction : "linear" // TODO: CSS default = ease
  return {
    animationDirection: direction,
    animationDuration: num(duration),
    animationDelay: num(delay),
    animationIterationCount: num(iterations),
    animationTimingFunction: _timingFunction
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