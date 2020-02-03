import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = (props) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={() => removeBook(props.book.id)}>
            <div className="title"> {props.book.title} </div>
            <div className="author"> {props.book.author} </div>
        </li>
    );
};

export default BookDetails;