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
  const props = animate(keyframeInput, keyframeOption, {
    generateAnimationName: (keyframes) => Style.registerKeyframes(keyframes)
  })

  const STYL = Style.registerStyle(props)
  Style.inject()
  return STYL
}

// hack
let cnt = 0
jss.setup(jssPreset())

export const jssBind = (keyframeInput, keyframeOption) => {
  const { animationName, ...animationProps } = animate(keyframeInput, keyframeOption)
  const ruleName = `my-jss-animation-${cnt++}`

  const style = {
    [`@keyframes ${ruleName}`] : animationName,
    item: Object.assign({
      ...animationProps,
      animationName: ruleName
    })
  }
  const {classes} = jss.createStyleSheet(style).attach()

  return classes.item
}