import React from 'react'
import ReactDom from 'react-dom'

export class NativeSample extends React.Component {
  componentDidMount(){
    const dom = ReactDom.findDOMNode(this)
    const {keyframeInput, keyframeOption} = this.props
    const animate = dom.animate(keyframeInput, keyframeOption)
    // console.log(this.props.label, animate)
  }
  render(){
    const {label, keyframeInput, keyframeOption} = this.props
    return <div>{label}</div>
  }
}

