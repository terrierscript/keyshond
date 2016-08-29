
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
  }
}

const processObjectProperty = (options) => {
  return convertOptions(options)
}

const processNumeric = (duration) => {
  return convertOptions({duration: duration})
}

const processOption = (option) => {
  if(typeof option === "number"){
    return processNumeric(option)
  }
  return processObjectProperty(option)

}

const processEasing = (keyframeInput, options) => {
  return {
    animationTimingFunction: getEasing(keyframeInput, options)
  }
}

module.exports = (keyframeInput, options) => {
  const easing = processEasing(keyframeInput, options)
  const props = processOption(options)
  return Object.assign({}, props, easing)
}