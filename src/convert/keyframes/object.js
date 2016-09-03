

// Convert object.entries and sanitize non keyframe value
const format = (keyframes) => {
  return Object.keys(keyframes)
    .map( (key) => [key, keyframes[key]]) // Object.entries
    .filter( ([k, v]) => Array.isArray(v)) // filter like easing: property
}

// { opacity: [0.5, 1] } 
// => [ {index: 0, keyframes: {opacity: 0.5} , {index: 1, keyframes: {opacity: 1} ]
const parseValues = (propertyName, keyframeValues) => {
  return keyframeValues.map((value, index) => ({
    index: index,
    keyframe: {
      [propertyName]: value
    }
  }))
}

const parseObject = (keyframeEntries) => {
  return format(keyframeEntries)
    .map( ([key, value]) => parseValues(key, value) )
    .reduce((prev, next) => [...prev, ...next], []) // flatten
}

const indexKeyframes = (values, index) => {
  const currentItems = values.filter(item => item.index === index)
  let keyframes = {}
  for (let item of currentItems) {
    keyframes = Object.assign(keyframes, item.keyframe)
  }
  return keyframes
}

module.exports = () => {
  const values = parseObject(keyframes)
  const maxIndex = Math.max.apply(null, values.map((v) => v.index))
  const frames = []
  for (let i = 0; i < maxIndex + 1; i++) {
    frames[i] = indexKeyframes(values, i)
  }
  return frames
}
