import { animate, animateWithRegistration } from '../../../src/index'
import { StyleSheet, css } from 'aphrodite/no-important'
import FreeStyle from 'free-style'
import jss from 'jss'
import jssPreset from 'jss-preset-default'

export const aphrodite = (keyframeInput, keyframeOption) => {
  const style = StyleSheet.create({
    item: animate(keyframeInput, keyframeOption)
  })
  return css(style.item)
}

export const freestyle = (keyframeInput, keyframeOption) => {
  const Style = FreeStyle.create()
  const props = animateWithRegistration(keyframeInput, keyframeOption, (keyframes) => {
    return Style.registerKeyframes(keyframes)
  })

  const STYL = Style.registerStyle(props)
  Style.inject()
  return STYL
}

// hack
let cnt = 0
jss.setup(jssPreset())

export const jssBind = (keyframeInput, keyframeOption) => {
  const { animationName, ...animations } = animate(keyframeInput, keyframeOption)
  const ruleName = `my-jss-animation-${cnt++}`
  let keyframeRules = {}

  const style = Object.assign({}, keyframeRules, {
    [`@keyframes ${ruleName}`] : animationName
    item: animationProps
  })

  const {classes} = jss.createStyleSheet(style).attach()

  return classes.item
}

