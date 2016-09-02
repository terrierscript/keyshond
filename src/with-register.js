const animate = require('./convert')

module.exports = (keyframeInput, keyframeOption, registrationFunction) => {
  const { animationName, ...animations } = animate(keyframeInput, keyframeOption)
  const keyframeObject = animationName
  const newAnimationName = registrationFunction(animationName)
  return Object.assign({}, animations, {
    animationName: newAnimationName
  })
}
