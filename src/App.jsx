import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const MIN = 0;
  const MAX = 10;

  return (
    <>
      <div>
        <p>{count}</p>
        {/* <button disabled={count == MIN} onClick={() => { setCount((prev) => prev - 1) }}>decrement</button>
        <button disabled={count == MAX} onClick={() => { setCount((prev) => prev + 1) }}>increment</button> */}
        <button onClick={() => { if (count > MIN) { setCount((prev) => prev - 1) } }}>decrement</button>
        <button onClick={() => { if (count < MAX) { setCount((prev) => prev + 1) } }}>increment</button>
      </div>
    </>
  )
}

export default App
