const convert = require('./convert')

const animate = (keyframeInput, animateEffectOrDuration, options) => {
  const {keyframs, animateEffect} = convert(keyframeInput, animateEffectOrDuration)
  return Object.assign({}, {
    animationName: keyframs
  }, animateEffect)
}

module.exports = animate
