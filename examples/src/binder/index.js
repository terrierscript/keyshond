import React from 'react'
import ReactDom from 'react'
import * as binder from './binder'

const Puppet = ({label, className}) => {
  return <div className={className}>{label}</div>
}

export const Native = ({label, keyframeInput, keyframeOption}) => {
  return <Puppet label={label} />
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

