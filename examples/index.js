import sample from './src/sample'
import easing from './src/easing'
// import failed from './src/failed'

const start = () => {
  switch(location.search){
    case '?failed':
      failed()
      return
    case '?easing':
      easing()
      return
    default:
      sample()
  }
}

start()