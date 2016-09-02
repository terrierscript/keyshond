const convertKeyframes = require('./keyframes')
const convertEffect = require('./effects')
const { bindTiming } = require('./timings')


const convert = (keyframeInput, animateEffect) => {
  const keyframes = convertKeyframes(keyframeInput)
  const animateEffectResult = convertEffect(keyframeInput, animateEffect)
  const keyframeProps = {
    animationName: bindTiming(keyframes)
  }

  return Object.assign({}, keyframeProps, animateEffectResult)
}

module.exports = convert
