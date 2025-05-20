import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import useBooks from '../hooks/useBooks'
import BookInfo from '../components/BookInfo'
import LeftMenu from '../components/LeftMenu'
import './HomePage.css'

const HomePage = () => {
    const {changeSearch, search, gender } = useContext (GlobalContext);
    const { books } = useBooks(search)
    
    const handlerSearch = () => {
        changeSearch('')
    }

    if (books.length === 0) {
        return (
            <div className='home'>
                <h2>
                    No se encontraron libros para esta búsqueda.
                </h2>
                <button onClick={handlerSearch} >Volver</button>
            </div>
        )
    } else {
        let filteredBooks = [];
        let genderTitle = '';
        if (gender.toLowerCase() === 'todos') {
            filteredBooks = books
        } else {
            filteredBooks = books.filter(libro => libro.gender === gender);
            genderTitle = `de ${gender}`
        }
        return (
            <main className='home'>
                <h1 className='home__title'>Encuentra tus libros favoritos {genderTitle}</h1>
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