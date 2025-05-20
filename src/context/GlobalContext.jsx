import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [gender, setGender] = useState('todos');
    const [search, setSearch] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [visibleCart, setVisibleCart] = useState(false);
    const [cartElements, setCartElements] = useState([])

    const changeGender = (newGender) => {
        setGender(newGender)
    }

    const changeSearch = (newSearch) => {
        setSearch(newSearch)
    }

    const changeQuantity = (value) => {
        setQuantity(value) 
    }

    const changeVisibleCart = (value) => {
        setVisibleCart(value)
    }

    const changeCartElements = (products) => {
        setCartElements(products)
    }

    return (
        <GlobalContext.Provider value={{gender, search, quantity, visibleCart, cartElements, changeGender, changeSearch, changeQuantity, changeVisibleCart, changeCartElements}}>
            {children}
        </GlobalContext.Provider>
    )
};