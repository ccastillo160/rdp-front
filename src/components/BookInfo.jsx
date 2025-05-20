import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext'
import useImage from '../hooks/useImage.js'
import './BookInfo.css';

const BookInfo = ({book}) => {
    const {changeQuantity} = useContext(GlobalContext);
    const {image} = useImage(book.image)

    const handlerQuantity = () => {
        changeQuantity(1)
    }

    return (
        <main className='book'>
            <Link to ={`/book/${book.id}`}>
                <img className='book__image' src={image} alt="portada" onClick={handlerQuantity} />
            </Link>
                <h3 className='book__title'>{book.title}</h3>
                <b className='book__price'>${book.price}</b>
        </main>
    )
};

export default BookInfo