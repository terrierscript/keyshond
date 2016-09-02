// https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes

// see: https://github.com/jedmao/parse-css-dimension/blob/master/index.js#L25-L30
const tryParsePercentage = (value) => {
  if (!/%$/.test(value)) {
    return null
  }
  const float = parseFloat(value)
	return isNaN(float) ? null : float
}

const toPercentage = (value) => {
  switch (value) {
    case 'from': return 0
    case 'to': return 100
  }
  return tryParsePercentage(value)
}

const flatten = (items) => items.reduce((prev, next) => [...prev, ...next], [])

const convert = (props, value) => {
  const percentages = props.split(',').map(v => v.trim())
  return percentages.map( p => {
    return { percentage: toPercentage(p), value: value}
  })
}

const convertPercentages = (keyframes) => {
  const parse = Object.keys(keyframes).map( (k) => {
    return convert(k, keyframes[k])
  })
  return flatten(parse).sort( (a, b) => a.percentage - b.percentage)
}

const isValidValue = (num) => {
  return (!isNaN(num) && num >= 0 && num <= 100)
}
const isValid = (arr) => {
  return arr.every( ({ percentage }) => {
    return isValidValue(percentage)
  })
}
const convertCssKeyframe = (keyframes) => {
  const arr = convertPercentages(keyframes)
  if (!isValid(arr)){
    return null
  }
  const r = arr.map( ({ percentage, value}) => {
    return Object.assign({}, value, {
      offset: percentage / 100
    })
  })
  return r
}

module.exports = (keyframes) => {
  return convertCssKeyframe(keyframes)
}
