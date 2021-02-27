import React, { useState, useContext} from 'react'
import data from './data'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [quote, setQuote] = useState(data)
    const [value, setValue] = useState(0)

    const nextPage = (id) => {
        if(id === 3) {
            return alert(`That's finish page, Please fill all sections `)
        }else {
            return setValue(value + 1)
        }
    }

    const previousPage = (id) => {
        if(id === 1) {
            return
        } else {
            return setValue(value - 1)
        }
    }

    return (
        <AppContext.Provider
            value={{quote, value, setValue, nextPage, previousPage }}
        >
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
