import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext'
import useImage from '../hooks/useImage.js'
import QuantitySelector from '../components/QuantitySelector.jsx';
import { books } from '../data/booksData.js';
import './BookSelected.css';

const BookSelected = () => {
    const { quantity, cartElements, changeCartElements} = useContext(GlobalContext);
    const { bookId } = useParams();
    const book = books.find(b => b.id.toString() === bookId);
    const {image} = useImage(book.image)

    const HandlerCart = () => {
        book.quantity = quantity
        let currentCart = cartElements
        currentCart.push(book)
        changeCartElements(currentCart)
    }

    return (
        <main className='book-selected'>
            <div className='book-selected__image'>
                <img className='book-selected__image--content' src={image} alt="portada" />
            </div>
            <div className='book-selected__info'>
                <h2 className='info info__title'>{book.title}</h2>
                <h3 className='info info__author'>{book.author}</h3>
                <p className='info info__publisher'><strong>Editorial: </strong>{book.publisher}</p>
                <p className='info info__isbn'><strong>ISBN: </strong>{book.isbn}</p>
                <p className='info info__price'><strong>Precio: </strong>${book.price}</p>
                <div className='info__add-cart'>
                    <QuantitySelector />
                    <Link to="/home"><button className='add-cart__button' onClick={HandlerCart}>Agregar al carrito</button></Link>
                </div>
            </div>
        </main>
    )
}

export default BookSelected