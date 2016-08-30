const { StyleSheet, css } = require('aphrodite/no-important')
const { convert } = require('../lib/index')
const FreeStyle = require('free-style')
const { el, events, mount, className, attrs, text, children} = require('redom')


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

const native = (label, keyframeInput, keyframeOption) => {
  let elem = cl(label)
  let anim = elem.animate(keyframeInput, keyframeOption);
  return elem
}

const aphrodite = (label, keyframeInput, keyframeOption) => {
  const style = StyleSheet.create({
    item: convert(keyframeInput, keyframeOption)
  })
  return cl(label, css(style.item))
}

const freestyle = (label, keyframeInput, keyframeOption) => {
  const Style = FreeStyle.create()
  const animationProps = convert(keyframeInput, keyframeOption)
  const ANIMATION = Style.registerKeyframes(animationProps.animationName)
  const props = Object.assign(animationProps, {
    animationName: ANIMATION,
  })
  const STYL = Style.registerStyle(props)
  Style.inject()

  return cl(label, STYL)
}

const constroller = (playing, onToggle) => {
  const button = el('button')
  button(events({
    onclick: () => {
      onToggle(!playing)
    }
  }))
}

const sample = ({label, keyframeInput, keyframeOption}) => {
  const container = el('div')
  const playing = false
  const samples = container(children([
    cl(`====${label}=====`),
    native("elem.animate=" + label, keyframeInput, keyframeOption, playing),
    aphrodite("aphrodite=" + label, keyframeInput, keyframeOption, playing),
    freestyle("freestyle=" + label, keyframeInput, keyframeOption, playing),
    // constroller(playing),
  ]))
  mount(document.body, samples)
}
module.exports = {
  createElement, sample
}