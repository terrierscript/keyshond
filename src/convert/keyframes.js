const cssKeyframe = require('./keyframes-css')
const objectKeyframe = require('keyframe-transpose')
const filter = require('./filter')

const arrayKeyframe = (keyframes) => {
  if (!Array.isArray(keyframes)) {
    return null
  }
  return keyframes
}

const convertKeyframes = (keyframes) => {
  const processedKeyframes = (
    arrayKeyframe(keyframes) ||
    cssKeyframe(keyframes) ||
    objectKeyframe(keyframes)
  )
  return filter(processedKeyframes)
}

module.exports = convertKeyframes
