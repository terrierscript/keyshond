const { StyleSheet, css } = require('aphrodite')
const { convert } = require('../src/index')

// helpers
const createElement = (label) => {
  const dom = document.createElement('div')
  dom.innerHTML = label
  dom.style = 'width: 300px'
  append(dom)
  return dom
}

const append = (dom) => {
  document.body.appendChild(dom)
}

const elemAnimate = (label, ...props) => {
  console.log(props)
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