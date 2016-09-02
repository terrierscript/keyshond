const convert = require('./convert')

const defaultOptions = {
  generateAnimationName: (keyframes) => keyframes
}

const animate = (keyframeInput, animateEffectOrDuration, options = defaultOptions) => {
  const {keyframs, animateEffect} = convert(keyframeInput, animateEffectOrDuration)
  const animationName = options.generateAnimationName(keyframs)
  const animationNameOption = animationName ? { animationName: animationName } : {}
  return Object.assign({},
    animationNameOption,
    animateEffect
  )
}

module.exports = animate
