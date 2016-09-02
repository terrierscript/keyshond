import { animate } from '../../../src/index'
import { StyleSheet, css } from 'aphrodite/no-important'
import FreeStyle from 'free-style'
import jss from 'jss'
import jssPreset from 'jss-preset-default'


const withRegisterKeyframe = (keyframeInput, keyframeOption, animationNameFunction) => {
  const { animationName, ...animations } = animate(keyframeInput, keyframeOption)
  const newAnimationName = animationNameFunction(animationName)
  return Object.assign({}, animations, {
    animationName: newAnimationName
  })
}

export const aphrodite = (keyframeInput, keyframeOption) => {
  const style = StyleSheet.create({
    item: animate(keyframeInput, keyframeOption)
  })
  return css(style.item)
}

export const freestyle = (keyframeInput, keyframeOption) => {
  const Style = FreeStyle.create()
  const props = withRegisterKeyframe(keyframeInput, keyframeOption, (keyframes) => {
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
  const animationProps = withRegisterKeyframe(keyframeInput, keyframeOption, (keyframe) => {
    keyframeRules[`@keyframes ${ruleName}`] = keyframe
    return ruleName
  })

  const style = Object.assign({}, keyframeRules, {
    item: animationProps
  })

  const {classes} = jss.createStyleSheet(style).attach()

  return classes.item
}

