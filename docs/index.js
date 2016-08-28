const { StyleSheet, css } = require('aphrodite')
const { convert } = require('../src/index')

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

const doAnimate = (label, ...props) => {
  createElement(`====${label}=====`)
  elemAnimate("elem.animate=" + label, ...props)
  aphroditeAnimate("aphrodite=" + label, ...props)
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
doAnimate("keyframes as array (3 frames)", [{
  opacity: 0.5,
  transform: 'scale(0.5)',
}, {
  opacity: 0.7,
  transform: 'scale(0.7)',
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

doAnimate("Sample with offset", {
  opacity: [0.5, 1.2, 1],
  transform: ['scale(0.5)', 'scale(1.2)', 'scale(1)'],
}, {
  offset: [0.2, 0.5, 1], // offset object
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
})


doAnimate("Offset", [{
  background: 'red',
  transform: 'none',
  easing: 'ease-out',
}, {
  offset: 0.1,
  transform: 'translateY(100px)',
  easing: 'ease-in-out',
}, {
  offset: 0.2,
  transform: 'translate(100px, 100px)',
  easing: 'ease-in-out',
}, {
  offset: 0.4,
  transform: 'translateX(100px)',
  easing: 'ease-out',
}, {
  background: 'blue',
  transform: 'none',
}], {
  duration: 4000,
  iterations: Infinity,
})

