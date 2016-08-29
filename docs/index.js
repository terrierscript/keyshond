const { StyleSheet, css } = require('aphrodite/no-important')
const { convert } = require('../lib/index')
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
  let animateProps = convert(...props)
  const style = StyleSheet.create({
    item: Object.assign({}, animateProps)
  })
  elem.className = css(style.item)
}

const freestyleAnimate = (label, ...props) => {
  let Style = FreeStyle.create()
  let animateProps = convert(...props)
  let ANIMATION = Style.registerKeyframes(animateProps.animationName)
  let STYL = Style.registerStyle(Object.assign(animateProps, {
    animationName: ANIMATION
  }))
  Style.inject()

  let elem = createElement(label)
  elem.className = STYL
}

const doAnimate = (label, ...props) => {
  createElement(`====${label}=====`)
  try{
    elemAnimate("elem.animate=" + label, ...props)
  }catch(e){
    console.warn(e)
    console.trace(e)
    createElement("failed elem" + label)
  }
  try{
    aphroditeAnimate("aphrodite=" + label, ...props)
  }catch(e){
    console.warn(e)
    console.trace(e)
    createElement("failed aphr" + label)
  }
  // aphroditeShrothandy("aphrodite(s)=" + label, ...props)
  try{
    freestyleAnimate("freestyle=" + label, ...props)
  }catch(e){
    console.warn(e)
    console.trace(e)
    createElement("failed fs" + label)
  }
}

doAnimate("Sample 1", {
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})

doAnimate("Easing with keyframes", {
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
  easing: 'ease-in-out',
}, {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})

doAnimate("Object offset", {
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
  easing: 'ease-in-out',
  offset: [0.2, 1]
}, {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})

doAnimate("keyframes as array", [{
  opacity: 0.5,
  transform: 'scale(0.5)',
}, {
  opacity: 1,
  transform: 'scale(1)'
}], {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})
doAnimate("keyframes as multiple frame array", [{
  opacity: 0.5,
  transform: 'scale(0.5)',
}, {
  opacity: 0.7,
  transform: 'scale(0.7)',
}, {
  opacity: 0.3,
  transform: 'scale(0.3)',
}, {
  opacity: 1,
  transform: 'scale(1)',
}], {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})

doAnimate("keyframes with offset", [{
  opacity: 1.2,
  transform: 'scale(1.2)',
}, {
  opacity: 0.5,
  transform: 'scale(0.5)',
  offset: 0.3
}, {
  opacity: 0.7,
  transform: 'scale(0.7)',
  offset: 0.5,
}, {
  opacity: 1,
  transform: 'scale(1)',
  offset: 1,
}], {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})

doAnimate("keyframes with offset (partial)", [{
  opacity: 1.2,
  transform: 'scale(1.2)',
}, {
  opacity: 0.5,
  transform: 'scale(0.5)',
  offset: 0.3
}, {
  opacity: 2,
  transform: 'scale(2)',
}, {
  opacity: 1,
  transform: 'scale(1)',
  offset: 1,
}], {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})

doAnimate("multiple offset no easing", [{
  background: 'red',
  transform: 'none',
}, {
  offset: 0.1,
  transform: 'translateY(100px)',
}, {
  offset: 0.2,
  transform: 'translate(100px, 100px)',
}, {
  offset: 0.4,
  transform: 'translateX(100px)',
}, {
  background: 'blue',
  transform: 'none',
}], {
  duration: 4000,
  iterations: Infinity,
})

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

