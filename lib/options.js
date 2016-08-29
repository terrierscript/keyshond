// https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties

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
  // CSS default = ease
  // Element.animate default = linear
  if(Array.isArray(keyframes)){
    // let current = 'linear'
    let easings = keyframes.map( (k) => {
      return k.easing || 'linear'
    })
    return easings.filter(k => !!k).join(',')
  }
  return 'linear'
}

const finalizeOptions = (props) => {
  const {easing, direction, duration, delay, iterations, fill} = props
  let converted = {}
  if(easing){
    converted["animateTimingFunction"] = easing
  }
  if(direction){
    converted["animationDirection"] = direction
  }
  if(duration){
    converted["animationDuration"] = num(duration)
  }
  if(delay) {
    converted["animationDelay"] = num(delay)
  }
  if(iterations) {
    converted["animationIterationCount"] = num(iterations)
  }
  if(fill) {
    converted["animationFillMode"] = fill
  }
  return converted
}

const processOption = (option) => {
  if(typeof option === "number"){
    return {
      duration: option,
      iterations: 1
      // easing: 'linear'
    }
  }
  return option

}

const processEasing = (keyframeInput, options) => {
  return {
    easing: getEasing(keyframeInput, options)
  }
}

const defaultValue = {
  delay: 0,
  easing: 'linear',
  fill: "both",
  iterations: Infinity
}

module.exports = (keyframeInput, options) => {
  const easing = processEasing(keyframeInput, options)
  const props = processOption(options)
  const merged = Object.assign({}, defaultValue, easing, props)
  const animationOption = finalizeOptions(merged)
  console.log(animationOption)
  return animationOption
}