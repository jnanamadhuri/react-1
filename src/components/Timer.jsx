import {useRef,useState,useEffect} from 'react'

const Timer = () => {
    const [count, setcount] = useState(0)
    const intervalRef = useRef(0)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setcount((prevCount)=> prevCount + 1)
        },1000)
        return () => clearInterval(intervalRef.current)
    },[])
  return (
    <div>
        <h1>
            timer;{count}
            <button onClick={()=>clearInterval(intervalRef.current)}>stop</button>
        </h1>
    </div>
  )
}

export default Timer