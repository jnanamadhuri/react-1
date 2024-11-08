// import { UserProvider } from "./UserContext";
// import UserProfile from "./components/UserProfile";
// import UpdateUser from "./components/UpdateUser";

// const App = () => {
//   return (
//     <UserProvider>
//       <UserProfile />
//       <UpdateUser />
//     </UserProvider>
//   );
// };

// export default App;

// import { useReducer } from "react"

// const initialState = {count:0};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Increment":
//       return {...state,count:state.count+1}
//     case "Decrement":
//       return {...state,count:state.count-1}
//     case "Reset":
//       return {...state,count:0}
//     default:
//       break;
//   }
// }


// const App = () => {
//   const [state,dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       <h1>Count:{state.count}</h1>
//       <button onClick={()=>dispatch({ type:"Increment"})}> + </button>
//       <button onClick={()=>dispatch({ type:"Decrement"})}> - </button>
//       <button onClick={()=>dispatch({ type:"Reset"})}> R </button>
//     </div>
//   )
// }

// export default App

// import {useRef} from 'react'

// const App = () => {

//   const inputElement = useRef(null)

//   const handleFocusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value =  'Madhuri'
//   }

//   return (
//     <div>
//       <input type="text"
//              ref={inputElement}
//       />
//       <button onClick={()=>{handleFocusInput()}}>Focus and write i/p</button>
//     </div>
//   )
// }

// export default App




// import UseFetch from "./components/UseFetch"

// const App = () => {

//   const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos")
//   return (
//     <div>
//       {data && data.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </div>
//   )
// }

// export default App



import UniqueId from "./components/UniqueId"

const App = () => {
  return (
    <div>
      <UniqueId/>
    </div>
  )
}

export default App