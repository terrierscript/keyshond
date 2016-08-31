const Radium = require('radium')
const React = require('react')
const ReactDom = require('react-dom')
const { animate } = require('../lib/index')
const { StyleRoot } = Radium
const animateResult = animate({
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  duration: 500,
})
const keyframe = Radium.keyframes(animateResult.animationName, "my-animation")
const style = {
  item: Object.assign({}, animateResult, {
    animationName: keyframe,
  })
}

module.exports = () => {
  let Item = React.createClass({
    render(){
      return <div style={[style.item]}>Radium Example</div>
    }
  })
  Item = Radium(Item)
  ReactDom.render(<StyleRoot><Item/></StyleRoot>, document.body)
}