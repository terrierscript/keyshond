# keyshond
> CSS in JS friendly animation helper for convert `Element.animate()` object

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
  "animationName": {
    "0%": {
      "opacity": 0.5,
      "transform": "scale(0.5)"
    },
    "100%": {
      "opacity": 1,
      "transform": "scale(1)"
    }
  },
  "animationTimingFunction": "linear",
  "animationDirection": "alternate",
  "animationDuration": "500ms",
  "animationIterationCount": "infinite"
}
```

# Example

## with [aphrodite](https://github.com/Khan/aphrodite)

```js
import { StyleSheet, css } from 'aphrodite'
const style = StyleSheet.create({
  item: animate(keyframeInput, keyframeOption)
})

const AnimateItem = () => {
  return <div className={css(style.item)}>Hello</div>
}
```

## with [free-style](https://github.com/Khan/free-style)
```js
import FreeStyle from 'free-style'

const Style = FreeStyle.create()
const animationProps = animate(keyframeInput, keyframeOption)
const ANIMATION = Style.registerKeyframes(animationProps.animationName)

// Overwrite animationName
const props = Object.assign(animationProps, {
  animationName: ANIMATION,
})

const STYLE = Style.registerStyle(props)

Style.inject()

const AnimateItem = () => {
  return <div className={STYLE}>Hello</div>
}
```

# API

## `animate(keyframes, options)`
Same interface as [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)

### `keyframes` (Object or Array)
See: [Keyframe Formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

Object

```js
{
  opacity: [ 0, 1 ],          // [ from, to ]
  color:   [ "#fff", "#000" ] // [ from, to ]  
}
```
Array

```js
[ 
  { // from
    opacity: 0,
    color: "#fff"
  }, 
  { // to
    opacity: 1,
 ​   color: "#000"
  }
],
```

with offset

```js
[ { opacity: 1 },
  { opacity: 0.1, offset: 0.7 },
  { opacity: 0 } ]
```

### `options`

Support some options

```js
{
  delay: 100,
  // animationDelay: '100ms',

  direction: "alternate",
  // animationDirection: "alternate",

  duration: "300ms",
  // animationDuration: '300ms',

  easing: "cubic-bezier(0.42, 0, 0.58, 1)",
  // animationTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)",

  fill: "backwards",
  // animationFillMode: "backwards",

  iterations: Infinity
  // animationIterationCount: "infinite"
}
```

# Reference
- [AnimationEffectTimingProperties(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties)
- [W3C Draft)](http://w3c.github.io/web-animations/)
- [CSS animation (W3C)](https://drafts.csswg.org/css-animations/)
- [web-animations](https://github.com/web-animations/web-animations-js)

# Naming

keyframe + [keeshond](https://en.wikipedia.org/wiki/Keeshond)(very cute dog)