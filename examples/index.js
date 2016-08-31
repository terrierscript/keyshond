const sample = require('./sample')
const failed = require('./failed')
const radium = require('./radium')
// const tiny = require('./tiny').default

const start = () => {
  switch(location.search){
    case '?failed':
      failed()
      return
    case '?tiny':
      tiny()
      return
    case '?radium':
      radium()
      return
    default:
      sample()
  }
}

start()