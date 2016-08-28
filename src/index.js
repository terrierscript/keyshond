const { keyframeProperties  } = require('./keyframeProperties')
const { keyframeTimings } = require('../src/timings')

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

const convertOptions = ({direction, duration, delay, iterations}) => {
  return {
    animationDirection: direction,
    animationDuration: num(duration),
    animationDelay: num(delay),
    animationIterationCount: num(iterations),
  }
}

const getEasing = (keyframes, options) => {
  if(!Array.isArray(keyframes) && keyframes.easing){
    return keyframes.easing
  }
  // TODO: CSS default = ease. but Element.animate default is linear
  if(Array.isArray(keyframes)){
    let easings = keyframes.map( (k) => {
      return k.easing || 'linear'
    })
    return easings.join(',')
  }
  return 'linear'
}

const convert = (keyframes, options) => {
  const kfProperties = keyframeProperties(keyframes)
  const kfTimings = keyframeTimings(kfProperties, options)
  const animationName = bindTimings(kfProperties, kfTimings)

  const animateOptions = Object.assign({},
    convertOptions(options),
    { animationTimingFunction: getEasing(keyframes, options) }
  )
  return Object.assign({}, {
    animationName
  }, animateOptions)
}

module.exports = {
  convert: convert,
}