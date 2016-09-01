import Radium, { StyleRoot } from 'radium'
import React from 'react'
import ReactDom from 'react-dom'
import { animate } from '../../../lib/index'

export default (keyframeInput, keyframeOption) => {
  const {keyframes, animations} = animate(keyframeInput, keyframeOption)
  const keyframe = Radium.keyframes(keyframes, "my-animation")
  const style = {
    item: {
      ...animations,
      animationName: keyframe,
    }
  }

  let Item = React.createClass({
    render(){
      return <div style={[style.item]}>Radium Example</div>
    }
  })
  Item = Radium(Item)
  return <StyleRoot><Item/></StyleRoot>
}