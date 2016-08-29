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

module.exports = {
  append, elemAnimate, createElement, aphroditeAnimate, freestyleAnimate
}