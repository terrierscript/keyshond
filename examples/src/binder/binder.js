import { animate } from '../../../src/index'
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
  const { animationName, ...animations } = animate(keyframeInput, keyframeOption)
  const ANIMATION = Style.registerKeyframes(animationName)
  const props = {
    ...animations,
    animationName: ANIMATION,
  }
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
  const {classes} = jss.createStyleSheet({
    [`@keyframes ${ruleName}`] : animationName,
    item: {
      ...animations,
      animationName: ruleName
    }
  }).attach()

  return classes.item
}

