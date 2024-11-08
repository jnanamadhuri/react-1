import {useRef} from 'react'

const FocusInput = () => {
    const inputRef=useRef(null)

    const focusInput =() => {
        inputRef.current.focus();
        inputRef.current.value="Madhuri"
    }
  return (
    <div>
        <input type="text"
         ref={inputRef}
        />
        <button onClick={() =>focusInput()}>F & W</button>
    </div>
  )
}

export default FocusInput