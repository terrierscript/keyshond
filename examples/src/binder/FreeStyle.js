import React from 'react'
import FreeStyle from 'free-style'
import { animate } from '../../../src/index'

export const FreeStyleSample = ({label, keyframeInput, keyframeOption}) => {
  const Style = FreeStyle.create()
  const props = animate(keyframeInput, keyframeOption, {
    generateAnimationName: (keyframes) => Style.registerKeyframes(keyframes)
  })

  const STYL = Style.registerStyle(props)
  Style.inject()
  return <div className={STYL}>{label}</div>
}

