// src/DataProvider.jsx
import { useState } from 'react';
import DataContext from './DataProvider'; // Import the DataContext

const DataProvider = (children ) => {
    const [data, setData] = useState("Initial Data");

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
