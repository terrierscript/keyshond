
const flatten = (items) => {
  return items.reduce((prev, next) => [...prev, ...next], [])
}

const parseValues = (propertyName, keyframeValues) => {
  return keyframeValues.map((value, index) => ({
    index: index,
    keyframe: {
      [propertyName]: value
    }
  }))
}


const format = (keyframes) => {
  return Object.keys(keyframes)
    .map( (key) => [key, keyframes[key]]) // Object.entries
    .filter( ([k, v]) => Array.isArray(v)) // filter like easing: property
}

const sanitizeValues = (keyframeEntries) => {
  const values = keyframeEntries.map( ([key, value]) => {
    return parseValues(key, value)
  }).filter(item => (item !== null))
  return flatten(values)
}

const indexKeyframes = (values, index) => {
  const currentItems = values.filter(item => item.index === index)
  let keyframes = {}
  for (let item of currentItems) {
    keyframes = Object.assign(keyframes, item.keyframe)
  }
  return keyframes
}

module.exports = (keyframes) => {
  const entries = format(keyframes)
  const values = sanitizeValues(entries)
  const maxIndex = Math.max.apply(null, values.map((v) => v.index))
  const frames = []
  for (let i = 0; i < maxIndex + 1; i++) {
    frames[i] = indexKeyframes(values, i)
  }
  return frames
}
