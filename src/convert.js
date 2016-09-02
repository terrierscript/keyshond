const convertKeyframes = require('./keyframes')
const convertEffect = require('./effects')
const calcTimings = require('./timings')

const zipObject = (keys, values) => {
  return keys.reduce((prev, key, index) => {
    return Object.assign({}, prev, {
      [key]: values[index]
    })
  }, {})
}

const convert = (keyframeInput, animateEffect) => {
  const keyfreames = convertKeyframes(keyframeInput)
  const animateEffectResult = convertEffect(keyframeInput, animateEffect)

  const timings = calcTimings(keyfreames)

  const keyframeProps = {
    animationName: zipObject(timings, keyfreames)
  }

  return Object.assign({}, keyframeProps, animateEffectResult)
}

module.exports = convert
