
const num = (num) => {
  if(num === Infinity){
    return 'infinite'
  }
  if(!isNaN(num)){
    return num + 'ms'
  }
  return null
}


const getEasing = (keyframes, options) => {
  if(!Array.isArray(keyframes) && keyframes.easing){
    return keyframes.easing
  }
  // TODO: CSS default = ease. but Element.animate default is linear
  if(Array.isArray(keyframes)){
    // let current = 'linear'
    let easings = keyframes.map( (k) => {
      return k.easing || 'linear'
    })
    return easings.filter(k => !!k).join(',')
  }
  return 'linear'
}

const convertOptions = ({direction, duration, delay, iterations, fillMode, playState}) => {
  return {
    animationDirection: direction,
    animationDuration: num(duration),
    animationDelay: num(delay),
    animationIterationCount: num(iterations),
    animationFillMode: fillMode,
    animationPlayState: playState
  }
}

const processObjectProperty = (keyframeInput, options) => {
  const easing = {
    animationTimingFunction: getEasing(keyframeInput, options)
  }

  const animateOptions = Object.assign({},
    convertOptions(options), easing
  )
  return animateOptions
}
const processNumeric = (duration) => {
  return convertOptions({duration: duration})
}

module.exports = (keyframeInput, options) => {
  if(typeof options === "object"){
    return processObjectProperty(keyframeInput, options)
  }
  return processNumeric(options)
}