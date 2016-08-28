
const parseValues = (propertyName, keyframeValues) => {
  if(!Array.isArray(keyframeValues)){
    return null
  }
  return keyframeValues.map( (value, index) => ({
    keyframe: {
      [propertyName]: value,
    },
    index
  }))
}

const flattenValues = (keyframes) => {
  const propertyNames = Object.keys(keyframes)
  const values = propertyNames.map( (prop) => {
    return parseValues(prop, keyframes[prop])
  }).filter( item => (item !== null) )
  return values.reduce( (prev, next) => [...prev, ...next], []) // flatten
}

const indexKeyframes = (values, index) => {
  const currentItems = values.filter( item => item.index === index)
  let keyframes = {}
  for(let item of currentItems){
    keyframes = Object.assign(keyframes, item.keyframe)
  }
  return keyframes
}

const convertKeyframes = (keyframes) => {
  // FIXME: more beautify
  const values = flattenValues(keyframes)
  const maxIndex = Math.max.apply(null, values.map( (v) => v.index))
  const frames = []
  for(let i = 0; i < maxIndex + 1; i++){
    frames[i] = indexKeyframes(values, i)
  }
  return frames
}

module.exports = {
  convertKeyframes: convertKeyframes
}