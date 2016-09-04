import sample from './src/sample'
import sandbox from './src/sandbox'
// import failed from './src/failed'

const start = () => {
  switch(location.search){
    case '?failed':
      failed()
      return
    case '?sandbox':
      sandbox()
      return
    default:
      sample()
  }
}

start()