const convert = require('./convert')
const defaultOptions = {
  generateAnimationName: (keyframes) => keyframes
}

const animate = (keyframeInput, animateEffectOrDuration, opt = {}) => {
  const options = Object.assign({}, defaultOptions, opt)
  const {keyframs, animateEffect} = convert(keyframeInput, animateEffectOrDuration)
  const animationName = options.generateAnimationName(keyframs)
  const animationNameOption = animationName ? { animationName: animationName } : {}
  return Object.assign({},
    animationNameOption,
    animateEffect
  )
}

module.exports = animate