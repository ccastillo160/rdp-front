import './BookInfo.css'

const BookInfo = ({book}) => {
    let bookUrl = "";
    if (book.image === "" ) {
        bookUrl = "https://st2.depositphotos.com/6623886/9617/v/450/depositphotos_96170696-stock-illustration-blank-book-cover-vector-illustration.jpg"
    } else {
        bookUrl = book.image
    }
    return (
        <main>
            <img src={bookUrl} alt="portada" />
            <h3>{book.title}</h3>
            <b>${book.price}</b>
        </main>
    )
}

export default BookInfo