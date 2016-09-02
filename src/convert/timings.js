const zipObject = (keys, values) => {
  return keys.reduce((prev, key, index) => {
    return Object.assign({}, prev, {
      [key]: values[index]
    })
  }, {})
}

const calcTiming = (keyframes) => {
  return keyframes.map((frame, index) => {
    if (index === 0) return 0
    if (frame.offset !== undefined && frame.offset <= 1 && frame.offset >= 0) {
      return frame.offset
    }
    return index / (keyframes.length - 1)
  })
}

const calcPrecentageTimings = (keyframes) => {
  return calcTiming(keyframes)
    .map(offset => offset * 100)
    .map(precentage => `${precentage}%`)
}

const bindTiming = (keyframes) => {
  const timings = calcPrecentageTimings(keyframes)
  return zipObject(timings, keyframes)
}

module.exports.bindTiming = bindTiming
module.exports.calcPrecentageTimings = calcPrecentageTimings
