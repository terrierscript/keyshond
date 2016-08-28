const { StyleSheet, css } = require('aphrodite/no-important')
const { convertMultiple, shortHand } = require('../src/index')
const FreeStyle = require('free-style')

// helpers
const createElement = (label) => {
  const dom = document.createElement('div')
  dom.innerHTML = label
  dom.style = 'width: 400px'
  append(dom)
  return dom
}

const append = (dom) => {
  document.body.appendChild(dom)
}

const elemAnimate = (label, ...props) => {
  let elem = createElement(label)
  elem.animate(...props);
}

const aphroditeAnimate = (label, ...props) => {
  let elem = createElement(label)
  let animatePropsArray = convertMultiple(...props)
  let pr = animatePropsArray.reduce( (prev, curr, index) => {
    let key = `animate-${index}`
    let a = { [key]: curr }
    return Object.assign({}, prev, a)
  }, {} )
  const style = StyleSheet.create(pr)

  const keys = Object.keys(pr).map( k => {
    return css(style[k])
  })
  const cls = keys.join(' ')

  elem.className = cls
}

const freestyleAnimate = (label, ...props) => {
  let Style = FreeStyle.create()
  let animateProps = convertMultiple(...props)
  let animations = animateProps.map( (props) => {
    let keyframe = Style.registerKeyframes(props.animationName)
    return shortHand(Object.assign(props , {
      animationName: keyframe
    }))
  })
  console.log(animations)
  let STYL = Style.registerStyle( {
    animation: animations.join('')
  })
  Style.inject()

  let elem = createElement(label)
  elem.className = STYL
}

const doAnimate = (label, ...props) => {
  createElement(`====${label}=====`)
  elemAnimate("elem.animate=" + label, ...props)
  aphroditeAnimate("aphrodite=" + label, ...props)
  // aphroditeShrothandy("aphrodite(s)=" + label, ...props)
  freestyleAnimate("freestyle=" + label, ...props)
}

doAnimate("Sample 1", {
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})
// 
// doAnimate("Easing with keyframes", {
//   opacity: [0.5, 1],
//   transform: ['scale(0.5)', 'scale(1)'],
//   easing: 'ease-in-out',
// }, {
//   direction: 'alternate',
//   duration: 500,
//   iterations: Infinity,
// })
// 
// doAnimate("keyframes as array", [{
//   opacity: 0.5,
//   transform: 'scale(0.5)',
// }, {
//   opacity: 1,
//   transform: 'scale(1)'
// }], {
//   direction: 'alternate',
//   duration: 500,
//   iterations: Infinity,
// })
// doAnimate("keyframes as multiple frame array", [{
//   opacity: 0.5,
//   transform: 'scale(0.5)',
// }, {
//   opacity: 0.7,
//   transform: 'scale(0.7)',
// }, {
//   opacity: 0.3,
//   transform: 'scale(0.3)',
// }, {
//   opacity: 1,
//   transform: 'scale(1)',
// }], {
//   direction: 'alternate',
//   duration: 500,
//   iterations: Infinity,
// })
// 
// doAnimate("keyframes with offset", [{
//   opacity: 1.2,
//   transform: 'scale(1.2)',
// }, {
//   opacity: 0.5,
//   transform: 'scale(0.5)',
//   offset: 0.3
// }, {
//   opacity: 0.7,
//   transform: 'scale(0.7)',
//   offset: 0.5,
// }, {
//   opacity: 1,
//   transform: 'scale(1)',
//   offset: 1,
// }], {
//   direction: 'alternate',
//   duration: 500,
//   iterations: Infinity,
// })
// 
// doAnimate("multiple offset no easing", [{
//   background: 'red',
//   transform: 'none',
// }, {
//   offset: 0.1,
//   transform: 'translateY(100px)',
// }, {
//   offset: 0.2,
//   transform: 'translate(100px, 100px)',
// }, {
//   offset: 0.4,
//   transform: 'translateX(100px)',
// }, {
//   background: 'blue',
//   transform: 'none',
// }], {
//   duration: 4000,
//   iterations: Infinity,
// })

doAnimate("(X)multiple offset with easing (first)", [{
  background: 'red',
  transform: 'none',
  easing: 'ease',
}, {
  offset: 0.1,
  transform: 'translateY(100px)',
  easing: 'ease-in',
}, {
  offset: 0.2,
  transform: 'translate(100px, 100px)',
  easing: 'ease-in-out',
}, {
  offset: 0.4,
  transform: 'translateX(100px)',
  easing: 'ease-out',
}, {
  offset: 1,
  background: 'blue',
  transform: 'none',

}], {
  duration: 4000,
  iterations: Infinity,
})

