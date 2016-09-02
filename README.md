# keyshond

CSS in JS friendly animation helper support [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) object and [CSS @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

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
  'animationName': {
    '0%': {
      'opacity': 0.5,
      'transform': 'scale(0.5)'
    },
    '100%': {
      'opacity': 1,
      'transform': 'scale(1)'
    }
  },
  'animationTimingFunction': 'linear',
  'animationDirection': 'alternate',
  'animationDuration': '500ms',
  'animationIterationCount': 'infinite'
}
```

# Documents
- [API](https://github.com/inuscript/keyshond/blob/master/docs/API.md)

# Example

## with [aphrodite](https://github.com/Khan/aphrodite) (most easily)

```js
import { StyleSheet, css } from 'aphrodite'
import { animate } from 'keyshond'

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
import { animate } from 'keyshond'

const Style = FreeStyle.create()
const props = animate(keyframeInput, keyframeOption, {
  generateAnimationName: (keyframes) => Style.registerKeyframes(keyframes)
})

const STYLE = Style.registerStyle(props)

Style.inject()

const AnimateItem = () => {
  return <div className={STYLE}>Hello</div>
}
```

## with [Radium](https://github.com/formidablelabs/radium)

```js
import { animate } from 'keyshond'
import Radium, { StyleRoot } from 'radium'

const style = {
  item: animate(keyframeInput, keyframeOption, {
    generateAnimationName: (keyframes) => Radium.keyframes(keyframes, "my-animation")
  })
}

let Item = React.createClass({
  render(){
    return <div style={[style.item]}>Radium Example</div>
  }
})
Item = Radium(Item)

const AnimateItem = () => {
  return <StyleRoot><Item/></StyleRoot>
}

```

## with [jss](https://github.com/cssinjs/jss)

```js
import { animate } from 'keyshond'

import jss from 'jss'
import jssPreset from 'jss-preset-default'

jss.setup(jssPreset())

const { animationName, ...animationEffects } = animate(keyframeInput, keyframeOption)
const ruleName = `my-jss-animation`
// If you register multiple animation, you need change ruleName like `my-jss-animation-{$unique}`

const style = {
  [`@keyframes ${ruleName}`] : animationName,
  item: Object.assign({}, animationEffects, {
    animationName: ruleName
  })
}
const {classes} = jss.createStyleSheet(style).attach()

const AnimateItem = () => {
  return <div className={STYLE}>Hello</div>
}
```

# Reference
- [AnimationEffectTimingProperties(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties)
- [W3C Draft)](http://w3c.github.io/web-animations/)
- [CSS animation (W3C)](https://drafts.csswg.org/css-animations/)
- [web-animations](https://github.com/web-animations/web-animations-js)

# Naming

`@keyframes` + [keeshond](https://en.wikipedia.org/wiki/Keeshond)