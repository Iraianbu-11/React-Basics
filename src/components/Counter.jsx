import { useState } from "react"
const Counter = () => {
    const [count,setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
    <>
        <div>
            <h1>{count}</h1>
        </div>
        <section>
            <button onClick={increment} >+</button>
            <button onClick={decrement} >-</button>
        </section>
    </>
  )
}

export default Counter