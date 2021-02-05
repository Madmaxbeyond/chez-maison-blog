import React from 'react';
import {Link} from 'react-router-dom';
import './BookListItem.css';

export default function BookListItem({book}){
  
  return (
    <>
      <div className='form-container-button'>
        <Link to={{ pathname: '/books/details', state: {book}}}>
          <div className='panel-heading'>
            <h3>{book.title} - {book.genre}</h3>
          </div>
        </Link>
      </div>
    </>  
  );
}