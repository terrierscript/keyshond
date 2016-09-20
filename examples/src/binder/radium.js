import { animate } from '../../../src/index'

import Radium, { StyleRoot } from 'radium'
import React from 'react'
import ReactDom from 'react-dom'

export const RadiumSample = ({label, keyframeInput, keyframeOption}) => {
  const style = {
    item: animate(keyframeInput, keyframeOption, {
      generateAnimationName: (keyframes) => Radium.keyframes(keyframes, "my-animation")
    })
  }

  let Item = React.createClass({
    render(){
      return <div style={[style.item]}>{label}</div>
    }
  })
  Item = Radium(Item)
  return <StyleRoot>
    <Item/>
  </StyleRoot>
}