const calcTiming = require('./calc')
const cleanObject = (value) => {
  delete value.offset
  return value
}

const zipObject = (keys, values) => {
  return keys.reduce((prev, key, index) => {
    return Object.assign({}, prev, {
      [key]: cleanObject(values[index])
    })
  }, {})
}

const bindTiming = (keyframes) => {
  const timings = calcTiming(keyframes)
  return zipObject(timings, keyframes)
}

module.exports = bindTiming
