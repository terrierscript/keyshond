const arrayKeyframe = require('./array')
const cssKeyframe = require('./css')
const objectKeyframe = require('./object')
const filter = require('./filter')

const convertKeyframes = (keyframes) => {
  const processedKeyframes = (
    arrayKeyframe(keyframes)
    || cssKeyframe(keyframes)
    || objectKeyframe(keyframes)
  )
  return filter(processedKeyframes)
}

module.exports = convertKeyframes
