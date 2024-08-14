import React, { createContext } from 'react'

export const FoodContext = createContext()

const Context = ({ children }) => {
    return (
        <FoodContext.Provider value={{

        }}>
            {children}
        </FoodContext.Provider>
    )
}

export default Context