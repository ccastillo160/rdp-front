import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import useBooks from '../hooks/useBooks'
import BookInfo from '../components/BookInfo'
import LeftMenu from '../components/LeftMenu'
import './HomePage.css'

const HomePage = () => {
    const { search, gender } = useContext (GlobalContext);
    const { books } = useBooks(search)
    if (books.length === 0) {
        return (
            <div>
                <h2>
                    No se encontraron libros para esta búsqueda.
                </h2>
            </div>
        )
    } else {
        let filteredBooks = books.filter(libro => libro.gender = gender)
        return (
            <main className='home'>
                <h1 className='home__title'>Encuentra tus libros favoritos</h1>
                <div className='home__main-content'>
                    < LeftMenu />
                    <div className='main-content__books'>
                        {filteredBooks.map((book) => {
                            return <BookInfo key={book.id} book = {book} />
                        })
                        }
                    </div>
                </div>
            </main>
        )
    }
}

export default HomePage