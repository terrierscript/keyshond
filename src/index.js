
const convertEffectInput = (effectInput) => {
  let keyframes = []
  // FIXME: more beautify
  Object.keys(effectInput).map( props => {
    const values = effectInput[props]
    values.map( (value, index) => {
      let inj = keyframes[index] ? keyframes[index] : {}
      inj[props] = value
      keyframes[index] = inj
    })
  })
  return keyframes
}

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

module.exports = (effectInput, options) => {
  const timings = [0, 100]
  const animationName = bindTimings(
    convertEffectInput(effectInput),
    timings
  )
  const animateOptions = convertOptions(options)
  return Object.assign({}, {
    animationName
  }, animateOptions)
}