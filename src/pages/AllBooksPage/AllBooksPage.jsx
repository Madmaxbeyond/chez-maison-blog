import React, { useEffect, useState } from 'react';
import * as booksAPI from '../../utilities/books-api';
import BookListItem from '../../components/BookListItem/BookListItem';

export default function AllBooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            const books = await booksAPI.getAll();
            setBooks(books);
        }
        getBooks();
    }, []);
    
    return (
        <>
        <h1>Posts</h1>
        <div>
            {books.map(book => 
                <BookListItem 
                    book={book}
                    key={book._id}

                />  
            )}
        </div>
        </>
    );
}