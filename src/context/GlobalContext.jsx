import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
    gender: 'todos',
    search: '',
    changeGender: () => {},
    changeSearch: () => {}}
);

export const GlobalProvider = ({children}) => {
    const [gender, setGender] = useState('todos');
    const [search, setSearch] = useState('');

    const changeGender = (newGender) => {
        setGender(newGender)
    }

    const changeSearch = (newSearch) => {
        setSearch(newSearch)
    }

    return (
        <GlobalContext.Provider value={{gender, search, changeGender, changeSearch}}>
            {children}
        </GlobalContext.Provider>
    )
};