
const parseValues = (propertyName, keyframeValues) => {
  if(!Array.isArray(keyframeValues)){ // ignore like `easing`
    return null
  }
  return keyframeValues.map( (value, index) => ({
    keyframe: {
      [propertyName]: value,
    },
    index
  }))
}

const convertEasing = (props) => {
  let restProps = Object.assign({}, props)
  const { easing } = restProps
  delete restProps.easing
  if(!easing){
    return restProps
  }
  return Object.assign(restProps, {
    animationTimingFunction: easing
  })
}

// Filtering some properties
const filterKeyframes = (keyframes) => {
  return keyframes.map( (keyframe) => {
    return convertEasing(keyframe)
  })
}

const flatten = (items) => {
  return items.reduce( (prev, next) => [...prev, ...next], [])
}

const flattenValues = (keyframes) => {
  const propertyNames = Object.keys(keyframes)
  const values = propertyNames.map( (prop) => {
    return parseValues(prop, keyframes[prop])
  }).filter( item => (item !== null) )
  return flatten(values)
}

const indexKeyframes = (values, index) => {
  const currentItems = values.filter( item => item.index === index)
  let keyframes = {}
  for(let item of currentItems){
    keyframes = Object.assign(keyframes, item.keyframe)
  }
  return keyframes
}

// Convert keyframes array
const processKeyframes = (keyframes) => {
  if(Array.isArray(keyframes)){
    return keyframes
  }
  const values = flattenValues(keyframes)
  const maxIndex = Math.max.apply(null, values.map( (v) => v.index))
  const frames = []
  for(let i = 0; i < maxIndex + 1; i++){
    frames[i] = indexKeyframes(values, i)
  }
  return frames
}

const convertKeyframes = (keyframes) => {
  const processedKeyframes = processKeyframes(keyframes)
  return filterKeyframes(processedKeyframes)
}

module.exports = {
  keyframeProperties: convertKeyframes
}