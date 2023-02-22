import { useRef } from 'react'
import tracker from './util/tracker'
import './App.scss'
function App() {
  
  const divRef = useRef(null)
  const inView = tracker(divRef)
  if (inView) {
    console.log("in viewport:", divRef.current);
  }else{
    console.log("not in view")
  }
  return (
    <div className="App">
        <div className="App-tempage App-tempage-one"></div>
        <div ref={divRef} className="App-tempage App-tempage-two"></div>
        <div  className="App-tempage App-tempage-three"></div>
    </div>
  )
}

export default App
