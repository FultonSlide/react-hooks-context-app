import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'; //have to npm install this
const BookContext = createContext();

const BookContextProvider = (props) => {
    const { books, setBooks } = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() }
    ]); 
    return(
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;