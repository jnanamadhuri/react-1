import {useReducer,useState} from 'react'
import { CounterReducer,initialState } from '../CounterReducer'
import { number } from 'prop-types'

const Counter = () => {

  const [state,dispatch] = useReducer(CounterReducer,initialState)
  const [inputValue,setInputValue] = useState(0)
  
  const handleIncrement = () => dispatch({type:"Increment"})
  const handleDecrement = () => dispatch({type:"Decrement"})
  const handleReset = () => dispatch({type:"Reset"})
  const handleIncrementByAmount = () => {
    dispatch({type:"IncrementByPayload",payload:number(inputValue)})
    setInputValue(0)
  }
  const handleDecrementByAmount = () =>{
     dispatch({type:"DecrementByPayload",payload:number(inputValue)})
     setInputValue(0)
  }
  return (
    <div>Counter

        <h1>{state.count}</h1>
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <div>
            <input type="number"
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleIncrementByAmount}>ADD</button>
            <button onClick={handleDecrementByAmount}>SUB</button>
        </div>
    </div>
  )
}

export default Counter