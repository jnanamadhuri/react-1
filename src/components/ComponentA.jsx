// import { Data, Data1 } from "../App"

// const ComponentA = () => {
//   return (
//     <div>
//        <Data.Consumer>
//        {
//         (data)  => {
//            <Data1>
//             {
//                 (age) => {
//                     return (
//                         <div className="me">
//                             <h1>my name is {data}</h1>
//                             <h1>my age is {age}</h1>
//                     )
//                         </div>
//                     )
//                 }
//             }
//            </Data1>
//         }
//        }
//     </Data.Consumer>
//     </div>
//   )
// }

// export default ComponentA
// src/SomeComponent.jsx
import  { useContext } from 'react';
import {DataContext} from '../DataContext';

const SomeComponent = () => {
    const { data, setData } = useContext(DataContext);

    return (
        <div>
            <p>Data: {data}</p>
            <button onClick={() => setData("Updated Data")}>Update Data</button>
        </div>
    );
};

export default SomeComponent;
