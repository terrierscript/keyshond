import React from 'react'
import ReactDom from 'react-dom'
import * as binder from './binder'

const Puppet = ({label, className}) => {
  return <div className={className} >{label}</div>
}

export class Native extends React.Component {
  componentDidMount(){
    const dom = ReactDom.findDOMNode(this)
    const {keyframeInput, keyframeOption} = this.props
    const animate = dom.animate(keyframeInput, keyframeOption)
    console.log(this.props.label, animate)
  }
  render(){
    const {label, keyframeInput, keyframeOption} = this.props
    return <Puppet label={label} />
  }
  // let elem = cl(label)
  // let anim = elem.animate(keyframeInput, keyframeOption);
  // return elem
}


const binderHoc = (fn) => {
  return ({label, keyframeInput, keyframeOption}) => {
    const className = fn(keyframeInput, keyframeOption)
    const l = `${fn.name}`
    return <Puppet label={l} className={className} />
  }
}

export const Aphrodite = binderHoc(binder.aphrodite)
export const FreeStyle = binderHoc(binder.freestyle)
export const Jss = binderHoc(binder.jssBind)

