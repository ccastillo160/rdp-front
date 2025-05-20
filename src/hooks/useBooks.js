import { useState, useEffect } from 'react';
import { books as booksData } from '../data/booksData.js';

const useBooks = (search) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const selectBooks = () => {
            if (search.length === 0) {
                setBooks(booksData);
            } else {
                let filteredBooks = [];
                filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
                setBooks(filteredBooks)
            }
        };
        selectBooks();
    }, [search]);

    return { books }
};

export default useBooks