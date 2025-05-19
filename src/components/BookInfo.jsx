import { Link } from 'react-router-dom';
import './BookInfo.css';

const BookInfo = ({book}) => {

    let bookUrl = "";
    if (book.image === "" ) {
        bookUrl = "https://st2.depositphotos.com/6623886/9617/v/450/depositphotos_96170696-stock-illustration-blank-book-cover-vector-illustration.jpg"
    } else {
        bookUrl = book.image
    }
    return (
        <main className='book'>
            <Link to ={`/book/${book.id}`}>
                <img className='book__image' src={bookUrl} alt="portada" />
            </Link>
                <h3 className='book__title'>{book.title}</h3>
                <b className='book__price'>${book.price}</b>
        </main>
    )
};

export default BookInfo