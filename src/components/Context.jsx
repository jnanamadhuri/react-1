import { createContext,useState } from "react";
const Data = createContext();

export const Provider = (children) => {
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    const [value3,setValue3] = useState(0);
    const [value4,setValue4] = useState(0);

    const DataValue ={
        value1,
        value2,
        value3,
        value4,
        setValue1,
        setValue2,
        setValue3,
        setValue4
    }
    return (
        <Data.Provider value={DataValue}>
            {children}
        </Data.Provider>
    )
}

export default Data;
