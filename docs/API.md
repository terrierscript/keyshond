# API

## `animate(keyframes, animateEffectOrDuration, [options])`
Same interface as [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)
### Inputs
#### `keyframes` (Object or Array)
This input support [Keyframe Formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

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
    opacity: 0, color: "#fff"
  },
  { // to
    opacity: 1, color: "#000"
  }
],
```

with offset

```js
[ { opacity: 1 },
  { opacity: 0.1, offset: 0.7 },
  { opacity: 0 } ]
```

#### `animateEffectOrDuration` (Object or Number)
You can pass number when only use duration

```js
animate([ { opacity: 1 },
  { opacity: 0.1, offset: 0.7 },
  { opacity: 0 } ]
, 200) // 200ms animation.
```

Support  [AnimationEffectTimingProperties](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties) partially.

```js
{
  delay: 100,
  // animationDelay: '100ms',

  direction: 'alternate',
  // animationDirection: 'alternate',

  duration: '300ms',
  // animationDuration: '300ms',

  easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
  // animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',

  fill: 'backwards',
  // animationFillMode: 'backwards',

  iterations: Infinity
  // animationIterationCount: 'infinite'
}
```

### `options` (Object)

```js
{
  generateAnimationName: [functtion]
}
```

#### `generateAnimationName` (Function)

Exmaple

```js
const animation = animatie(keyframeInput, keyframeOption, {
  generateAnimationName: (keyframeObject) => {
    // for Radium example.
    return Radium.keyframes(keyframeObject, "my-animation")
  }
})
```

### Outputs

Example

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

- *Notices*
  - Default easing is `linear`. This is compatible `Element.animate()`


