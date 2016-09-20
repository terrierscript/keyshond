import React from 'react'
import { animate } from '../../../src/index'
import jss from 'jss'
import jssPreset from 'jss-preset-default'


// hack
let cnt = 0
jss.setup(jssPreset())

export const JssSample = ({label, keyframeInput, keyframeOption}) => {
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

  return <div className={classes.item} >{label}</div>
}