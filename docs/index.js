'use strict'
const { StyleSheet, css } = require('aphrodite')
const kagiframe = require('../src/index')

const createElement = () => {
  const dom = document.createElement('div')
  dom.innerHTML = 'Hello world!'
  dom.style = 'width: 150px'
  return dom
}

const append = (dom) => {
  document.body.appendChild(dom)
}

const newAnimate = () => {
  let elem = createElement('dom')
  append(elem)
  let animateProps = kagiframe({
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)'],
  }, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
  })
  const style = StyleSheet.create({
    item: Object.assign({}, animateProps)
  })
  elem.className = css(style.item)
}

const elemAnimate = () => {
  let elem = createElement('dom')
  append(elem)
  const animation = elem.animate({
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
  }, {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
  });

}
elemAnimate()
newAnimate()