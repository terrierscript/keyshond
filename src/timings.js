
const timings = (keyframes, options) => {
  return keyframes.map( (frame, index) => {
    if(index === 0) return 0
    if(frame.offset !== undefined && frame.offset <= 1 && frame.offset >= 0){
      return frame.offset * 100
    }
    return index / (keyframes.length - 1) * 100
  })
}

module.exports = {
  keyframeTimings: timings
}