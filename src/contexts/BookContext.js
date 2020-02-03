import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'; //have to npm install this
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books, setBooks ] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
        { title: 'the final empire', author: 'brandon sanderson', id: uuid() }
    ]); 

    const addBook = (title, author) => {
        setBooks([...books, {title, author}]);
        console.log('added book');
    };

    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return(
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;