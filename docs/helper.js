const { StyleSheet, css } = require('aphrodite/no-important')
const { convert } = require('../lib/index')
const FreeStyle = require('free-style')
const { el, mount, attrs, text} = require('redom')
// helpers
const createElement = (label) => {
  const div = el('div')
  const item = div(text(label), attrs({style: 'width: 400px' }))
  mount(document.body, item)
  return item
}

// const append = (dom) => {
//   document.body.appendChild(dom)
// }

const elemAnimate = (label, ...props) => {
  let elem = createElement(label)
  let anim = elem.animate(...props);
  console.log(anim)
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
  elemAnimate, createElement, aphroditeAnimate, freestyleAnimate
}