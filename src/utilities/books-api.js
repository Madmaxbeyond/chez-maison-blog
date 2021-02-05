import sendRequest from './send-request';

const BASE_URL = '/api/books';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(bookData) {
    return sendRequest(BASE_URL, 'POST', bookData);
}

export function update(book) {
    return sendRequest(`${BASE_URL}/edit/${book._id}`, 'PUT', book);
}

export function deleteOne(bookId) {
    return sendRequest(`${BASE_URL}/delete/${bookId}`, 'DELETE');
}