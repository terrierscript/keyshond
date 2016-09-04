import React from 'react'
import ReactDom from 'react-dom'
import singletonDom from 'singleton-dom'

import { Native, Aphrodite } from './binder'

const doAnimate = (label, keyframeInput, keyframeOption) => {
  const props = {
    label, keyframeInput, keyframeOption
  }
  return (
    <div key={label} style={{width: 400}} >
      ====={label}====
      <Native {...props} />
      <Aphrodite {...props} />
    </div>
  )
}

const doms = () => {
  return [
    doAnimate("XXX Easing with keyframes with global compare", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
      easing: 'cubic-bezier(0.1764, 0.0, 1.0, 1.0)',
    }, {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),
    doAnimate("XXX keyframes as array", [{
      opacity: 0.5,
      transform: 'scale(0.5)',
      easing: 'ease'
      // easing: 'steps(5, start)',
    }, {
      opacity: 1,
      transform: 'scale(1)',
      // easing: 'steps(5, start)'
      easing: 'ease',
    }], {
      easing: 'ease',
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),
    doAnimate("XXX keyframes as array2", [{
      opacity: 0.5,
      transform: 'scale(0.5)',
      // offset: 0.1
      // easing: 'ease-in-out',
      // easing: 'steps(5, start)',
    }, {
      opacity: 1,
      transform: 'scale(1)',
      // easing: 'steps(5, start)'
      // easing: 'ease-in-out',
    }], {
      easing: 'cubic-bezier(0.0625, 0.01, 0.0625, 1)',
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    })
  ]
}

const Sandbox = () => {
  return <div>{doms()}</div>
}

export default () => {
  const dom = singletonDom('sample')
  ReactDom.render(
    <Sandbox/>, dom
  )
}