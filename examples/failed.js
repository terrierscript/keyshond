const { append, elemAnimate, createElement, aphroditeAnimate, freestyleAnimate } = require('./helper')

const doAnimate = (label, ...props) => {
  createElement(`====${label}=====`)
  try{
    elemAnimate("elem.animate=" + label, ...props)
  }catch(e){
    console.warn(e)
    console.trace(e)
    createElement("failed elem" + label)
  }
  try{
    aphroditeAnimate("aphrodite=" + label, ...props)
  }catch(e){
    console.warn(e)
    console.trace(e)
    createElement("failed aphr" + label)
  }
  // aphroditeShrothandy("aphrodite(s)=" + label, ...props)
  try{
    freestyleAnimate("freestyle=" + label, ...props)
  }catch(e){
    console.warn(e)
    console.trace(e)
    createElement("failed fs" + label)
  }
}

module.exports = () => {

  doAnimate("[Invalid] Object offset", {
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)'],
    // easing: 'ease-in-out',
    offset: 0.2
  }, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
  })

  doAnimate("keyframes with offset(partial)", [{
    opacity: 1.2,
    transform: 'scale(1.2)',
    offset: 0.2
  }, {
    opacity: 0.5,
    transform: 'scale(0.5)',
    offset: 0.3
  }, {
    opacity: 1,
    transform: 'scale(1)',
    offset: 1,
  }], {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
  })

  doAnimate("sandbox", [{
    opacity: 1.2,
    transform: 'scale(1.2)',
    offset: 0.2
  }, {
    opacity: 0.5,
    transform: 'scale(0.5)',
    offset: 0.3
  }, {
    opacity: 1,
    transform: 'scale(1)',
    offset: 1,
  }], {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
  })
}

