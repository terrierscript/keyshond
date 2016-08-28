
const parseValues = (propertyName, keyframeValues) => {
  if(!Array.isArray(keyframeValues)){
    return null
  }
  return keyframeValues.map( (value, index) => ({
    keyframe: {
      [propertyName]: value,
    },
    index
  }))
}

const flattenValues = (keyframes) => {
  const propertyNames = Object.keys(keyframes)
  const values = propertyNames.map( (prop) => {
    return parseValues(prop, keyframes[prop])
  }).filter( item => (item !== null) )
  return values.reduce( (prev, next) => [...prev, ...next], []) // flatten
}

const indexKeyframes = (values, index) => {
  const currentItems = values.filter( item => item.index === index)
  let keyframes = {}
  for(let item of currentItems){
    keyframes = Object.assign(keyframes, item.keyframe)
  }
  return keyframes
}

const convertKeyframes = (keyframes) => {
  // FIXME: more beautify
  const values = flattenValues(keyframes)
  const maxIndex = Math.max.apply(null, values.map( (v) => v.index))
  const frames = []
  for(let i = 0; i < maxIndex + 1; i++){
    frames[i] = indexKeyframes(values, i)
  }
  return frames
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