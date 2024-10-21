import { useState } from 'react'
import RouterApp from './RouterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <RouterApp/>
      </div>
    </>
  )
}

export default App
