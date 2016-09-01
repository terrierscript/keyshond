# keyshond

CSS in JS friendly animation helper for convert [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) object

[![npm](https://img.shields.io/npm/v/keyshond.svg)](https://www.npmjs.com/package/keyshond)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![CircleCI](https://img.shields.io/circleci/project/inuscript/keyshond.svg)](https://circleci.com/gh/inuscript/keyshond)
# Install

```
$ npm install keyshond
```

# Usage

```js
import { animate } from 'keyshond'
// or commonjs
// const animate = require('keyshond').animate

const output = animate({
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  duration: 500,
  iterations: Infinity,
  direction: 'alternate',
})

console.log(output)
```

Output

```js
{
  keyframes: {
    '0%': {
      'opacity': 0.5,
      'transform': 'scale(0.5)'
    },
    '100%': {
      'opacity': 1,
      'transform': 'scale(1)'
    }
  },
  animations: {
    'animationTimingFunction': 'linear',
    'animationDirection': 'alternate',
    'animationDuration': '500ms',
    'animationIterationCount': 'infinite'
  }
}
```

# Example

## with [aphrodite](https://github.com/Khan/aphrodite)

```js
import { StyleSheet, css } from 'aphrodite'

const { keyframes , animations} = animate(keyframeInput, keyframeOption)
const style = StyleSheet.create({
  item: Object.assign({}, animations, { animationName: keyframes })
})

// You can write this with Object rest spread transform
// (need babel-transform-object-rest-spread or babel-preset-stage-2)
//
// const style = StyleSheet.create({
//   item: {
//     ...animations,
//     animationName: keyframes,
//   }
// }

const AnimateItem = () => {
  return <div className={css(style.item)}>Hello</div>
}
```

## with [free-style](https://github.com/Khan/free-style)
```js
import FreeStyle from 'free-style'

const Style = FreeStyle.create()
const { keyframes , animations} = animate(keyframeInput, keyframeOption)

const ANIMATION = Style.registerKeyframes(keyframes)

const style = StyleSheet.create({
  item: Object.assign({}, animations, { animationName: ANIMATION })
})

const STYLE = Style.registerStyle(props)

Style.inject()

const AnimateItem = () => {
  return <div className={STYLE}>Hello</div>
}
```

# Documents
- [API](https://github.com/inuscript/keyshond/blob/master/docs/API.md)

# Reference
- [AnimationEffectTimingProperties(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties)
- [W3C Draft)](http://w3c.github.io/web-animations/)
- [CSS animation (W3C)](https://drafts.csswg.org/css-animations/)
- [web-animations](https://github.com/web-animations/web-animations-js)

# Naming

`@keyframes` + [keeshond](https://en.wikipedia.org/wiki/Keeshond)