const sample = require('./sample')
const failed = require('./failed')
// const tiny = require('./tiny').default

const start = () => {
  switch(location.search){
    case '?failed':
      failed()
      return
    case '?tiny':
      tiny()
      return
    default:
      sample()
  }
}

start()