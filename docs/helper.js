const { StyleSheet, css } = require('aphrodite/no-important')
const { convert } = require('../lib/index')
const FreeStyle = require('free-style')
const { el, mount, className, attrs, text} = require('redom')


// helpers
const cl = (label, clsName) => {
  const div = el('div')
  const item = div(
    text(label),
    className(clsName),
    attrs({
      style: 'width: 400px'
    })
  )
  return item
}
const createElement = (label) => {
  mount(document.body, cl(label))
}

const elemAnimate = (label, ...props) => {
  let elem = cl(label)
  let anim = elem.animate(...props);
  mount(document.body, elem)
}

const aphroditeAnimate = (label, ...props) => {
  let animateProps = convert(...props)
  const style = StyleSheet.create({
    item: Object.assign({}, animateProps)
  })
  let elem = cl(label, css(style.item))
  mount(document.body, elem)
}

const freestyleAnimate = (label, ...props) => {
  let Style = FreeStyle.create()
  let animateProps = convert(...props)
  let ANIMATION = Style.registerKeyframes(animateProps.animationName)
  let STYL = Style.registerStyle(Object.assign(animateProps, {
    animationName: ANIMATION
  }))
  Style.inject()

  let elem = cl(label, STYL)
  mount(document.body, elem)
}

module.exports = {
  elemAnimate, createElement, aphroditeAnimate, freestyleAnimate
}