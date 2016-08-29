const sample = require('./sample')
const failed = require('./failed')

const start = () => {
  switch(location.search){
    case '?failed':
      failed()
      return
    default:
      sample()
  }
}

start()