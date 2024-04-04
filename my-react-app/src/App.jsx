import { useState } from 'react'
import About from "./components/About"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1> Simrith's Website</h1>
    <About/>
   </>
  )
}

export default App
