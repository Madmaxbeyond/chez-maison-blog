import React from 'react';
import {useLocation, Link} from 'react-router-dom';

export default function BookDetailPage({handleDeleteBook}) {
    const { state: {book} } = useLocation();

    return (
        <>
        <h1>Book Details</h1>
        <div>
            <h2><i>{book.title}</i></h2>
            <h4>Genre: {book.genre}</h4>
            <h4>Published in {book.published}</h4>
        </div>

        <Link
        className='button' 
            to={{ pathname: '/books/edit', state: {book} }}
        >
            Edit Book
        </Link>

        <button onClick={() => handleDeleteBook(book._id)}>
            Delete Book
        </button>
        <div>
            <Link to="/books">Return to All Books</Link>
        </div>
        </>
    )
}