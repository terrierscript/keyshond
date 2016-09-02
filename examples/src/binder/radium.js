import Radium, { StyleRoot } from 'radium'
import React from 'react'
import ReactDom from 'react-dom'
import { animate } from '../../../src/index'

const withRegisterKeyframe = (keyframeInput, keyframeOption, animationNameFunction) => {
  const { animationName, ...animations } = animate(keyframeInput, keyframeOption)
  const newAnimationName = animationNameFunction(animationName)
  return Object.assign({}, animations, {
    animationName: newAnimationName
  })
}

export default (keyframeInput, keyframeOption) => {
  const {keyframes, animations} = animate(keyframeInput, keyframeOption)
  const animation = withRegisterKeyframe(keyframeInput, keyframeOption, (keyframes) => {
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