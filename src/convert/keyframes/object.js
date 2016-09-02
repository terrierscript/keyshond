
const flatten = (items) => {
  return items.reduce((prev, next) => [...prev, ...next], [])
}

const parseValues = (propertyName, keyframeValues) => {
  if (!Array.isArray(keyframeValues)) { // ignore like `easing`
    return null
  }
  return keyframeValues.map((value, index) => ({
    index: index,
    keyframe: {
      [propertyName]: value
    }
  }))
}

const sanitizeValues = (keyframes) => {
  const propertyNames = Object.keys(keyframes)
  const values = propertyNames.map((prop) => {
    return parseValues(prop, keyframes[prop])
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
  const values = sanitizeValues(keyframes)
  const maxIndex = Math.max.apply(null, values.map((v) => v.index))
  const frames = []
  for (let i = 0; i < maxIndex + 1; i++) {
    frames[i] = indexKeyframes(values, i)
  }
  return frames
}
