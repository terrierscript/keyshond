
const timings = (keyframes, options) => {
    return keyframes.map( (_, index) => {
    if(index === 0) return 0
    return index / (keyframes.length - 1) * 100
  })
}

module.exports = {
  keyframeTimings: timings
}