// helpers
const createElement = (label) => {
  const dom = document.createElement('div')
  dom.innerHTML = label
  dom.style = 'width: 400px'
  append(dom)
  return dom
}

const append = (dom) => {
  document.body.appendChild(dom)
}

const elemAnimate = (label, ...props) => {
  let elem = createElement(label)
  elem.animate(...props);
}


module.exports = {
  append, elemAnimate, createElement
}