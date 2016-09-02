import Radium, { StyleRoot } from 'radium'
import React from 'react'
import ReactDom from 'react-dom'
import { animateWithRegistration } from '../../../src/index'

export default (keyframeInput, keyframeOption) => {
  const animation = animateWithRegistration(keyframeInput, keyframeOption, (keyframes) => {
    return Radium.keyframes(keyframes, "my-animation")
  })
  const style = {
    item: animation
  }

  let Item = React.createClass({
    render(){
      return <div style={[style.item]}>Radium Example</div>
    }
  })
  Item = Radium(Item)
  return <StyleRoot><Item/></StyleRoot>
}