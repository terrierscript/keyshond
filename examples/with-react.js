// import React from 'react'
// import ReactDom from 'react-dom'
// import { StyleSheet, css } from 'aphrodite'
// 
// import { animate } from '../lib/index'
// // import { animate } from 'keyshond'
// 
// const style = StyleSheet.create({
//   item: {
//     width: '100px'
//   },
//   animation: animate({
//     opacity: [0.5, 1],
//     transform: ['scale(0.5)', 'scale(1)'],
//   }, {
//     duration: 500,
//     iterations: Infinity,
//     direction: 'alternate',
//   })
// })
// 
// const AnimatedLabel = () => {
//   return <div className={css(style.item, style.animation)}>Hello world!</div>,
// }
// 
// export default () => {
//   ReactDom.render(
//     <AnimatedLabel/>
//     document.body
//   )
// }