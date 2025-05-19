import { useState, useEffect } from 'react';
import { books as booksData } from '../data/booksData.js';

const useBooks = (search) => {
    const [books, setBooks] = useState([]);
    const genders = booksData.reduce((acum, current) => {
        if (!acum.includes(current['gender'])) {
            acum.push(current['gender'])
        }
        return acum.sort()
    }, []);

    useEffect(() => {
        const selectMovies = () => {
            if (search.length === 0) {
                setBooks(booksData);
            } else {
                let filteredBooks = [];
                filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
                setBooks(filteredBooks)
            }
        };
        selectMovies();
    }, [search]);

    return { books, genders }
};

export default useBooks