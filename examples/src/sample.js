import React from 'react'
import ReactDom from 'react-dom'
import singletonDom from 'singleton-dom'

import { Native, Aphrodite, FreeStyle, Jss } from './binder'
import radiumBind from './binder/radium'

const doAnimate = (label, keyframeInput, keyframeOption) => {
  const props = {
    label, keyframeInput, keyframeOption
  }
  const Radium = () => {
    return radiumBind(keyframeInput, keyframeOption)
  }
  return (
    <div key={label} style={{width: 400}} >
      =========
      <Native {...props} />
      <Aphrodite {...props} />
      <FreeStyle {...props} />
      <Jss {...props} />
      <Radium />
    </div>
  )
}

const doms = () => {
  return [
    doAnimate("Default props", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      duration: 500,
    }),
    doAnimate("Default props (non direction)", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      duration: 500,
      iterations: Infinity,
    }),
    doAnimate("Default props (non duration)", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      iterations: Infinity,
    }),
    doAnimate("Half iteration", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      duration: 500,
      iterations: 0.5,
    }),
    doAnimate("Sample 1", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),

    doAnimate("numeric option", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, 2000),

    doAnimate("Easing with keyframes", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
      easing: 'ease-in-out',
    }, {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),
    doAnimate("delay enddelay", {
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)'],
    }, {
      // delay: 2500,
      endDelay: 500,
      duration: 1000
    }),

    doAnimate("keyframes as array", [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 1,
      transform: 'scale(1)'
    }], {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),
    doAnimate("keyframes as multiple frame array", [{
      opacity: 0.5,
      transform: 'scale(0.5)',
    }, {
      opacity: 0.7,
      transform: 'scale(0.7)',
    }, {
      opacity: 0.3,
      transform: 'scale(0.3)',
    }, {
      opacity: 1,
      transform: 'scale(1)',
    }], {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),

    doAnimate("keyframes with offset", [{
      opacity: 1.2,
      transform: 'scale(1.2)',
    }, {
      opacity: 0.5,
      transform: 'scale(0.5)',
      offset: 0.3
    }, {
      opacity: 0.7,
      transform: 'scale(0.7)',
      offset: 0.5,
    }, {
      opacity: 1,
      transform: 'scale(1)',
      offset: 1,
    }], {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),

    doAnimate("keyframes with offset (partial)", [{
      opacity: 1.2,
      transform: 'scale(1.2)',
    }, {
      opacity: 0.5,
      transform: 'scale(0.5)',
      offset: 0.3
    }, {
      opacity: 2,
      transform: 'scale(2)',
    }, {
      opacity: 1,
      transform: 'scale(1)',
      offset: 1,
    }], {
      direction: 'alternate',
      duration: 500,
      iterations: Infinity,
    }),
    doAnimate("multiple offset no easing", [{
      background: 'red',
      transform: 'none',
    }, {
      offset: 0.1,
      transform: 'translateY(100px)',
    }, {
      offset: 0.2,
      transform: 'translate(100px, 100px)',
    }, {
      offset: 0.4,
      transform: 'translateX(100px)',
    }, {
      background: 'blue',
      transform: 'none',
    }], {
      duration: 4000,
      iterations: Infinity,
    }),
    doAnimate("multiple offset with easing (first)", [{
      background: 'red',
      transform: 'none',
      easing: 'ease',
    }, {
      offset: 0.1,
      transform: 'translateY(100px)',
      easing: 'ease-in',
    }, {
      offset: 0.2,
      transform: 'translate(100px, 100px)',
      easing: 'ease-in-out',
    }, {
      offset: 0.4,
      transform: 'translateX(100px)',
      easing: 'ease-out',
    }, {
      offset: 1,
      background: 'blue',
      transform: 'none',
    }], {
      duration: 4000,
      iterations: Infinity,
    })
  ]
}

const Samples = () => {
  return <div>{doms()}</div>
}

export default () => {
  const dom = singletonDom('sample')
  ReactDom.render(
    <Samples/>, dom
  )
}