// context.js
import React, { createContext, useContext } from 'react';

const MyContext = createContext(null);

export const useMyContext = () => {
    return useContext(MyContext);
};

export const MyProvider = ({ children, value }) => {
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};
