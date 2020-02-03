import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = (props) => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input required type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input required type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="Add Book" />
        </form>
    );
};

export default BookForm;