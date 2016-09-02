
const replaceProperty = (props, targetProp, replaceProp) => {
  if (!props[targetProp]) {
    return props
  }
  const targetValue = props[targetProp]
  let restProps = Object.assign({}, props) // copy
  delete restProps[targetProp]
  return Object.assign(restProps, {
    [replaceProp]: targetValue
  })
}

// Filtering some properties
const filterKeyframes = (keyframes) => {
  return keyframes.map((keyframe) => {
    // easing => animationTimingFunction
    // see: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
    return replaceProperty(keyframe, 'easing', 'animationTimingFunction')
  })
}

module.exports = filterKeyframes
