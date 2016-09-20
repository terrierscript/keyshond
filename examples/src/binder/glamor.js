import React from 'react'
import { animate } from '../../../src/index'
import * as glamor from 'glamor'

export const GlamorSample = ({label, keyframeInput, keyframeOption}) => {
  const anim = animate(keyframeInput, keyframeOption, {
    generateAnimationName: (timeline) => glamor.keyframes(timeline)
  })
  return <div {...glamor.style(anim)}>
    {label}
  </div>
}

