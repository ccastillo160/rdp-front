import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import useImage from '../hooks/useImage'
import './ResumeElement.css'

const ResumeElement = ({book}) => {
    const {cartElements, changeCartElements} = useContext(GlobalContext)
    const ind = cartElements.findIndex(element => element.id === book.id)
    let currentCart = [...cartElements]
    
    const AddQty = () => {
        currentCart[ind] = {...currentCart[ind], quantity: currentCart[ind].quantity + 1}
        changeCartElements(currentCart)
    };

    const RedQty = () => {
        const currentQty = currentCart[ind].quantity 
        if (currentQty - 1 === 0) {
            DelQty()
        } else {
            currentCart[ind] = {...currentCart[ind], quantity: currentCart[ind].quantity - 1}
            changeCartElements(currentCart)
        }
    }

    const DelQty = () => {
        const newCart = cartElements.filter((_, index) => index !== ind);
            changeCartElements(newCart)
    }

    const { image } = useImage(book.image)
    return (
        <div className='resume-element'>
            <div className='resume-element__book-image'>
                <img className='book-image__content' src={image} alt="portada" />
            </div>
            <div className='resume-element__info'>
                <h2 className='info info__title'>{book.title}</h2>
                <p className='info info__price'>${book.price}</p>
                <main className='selector'>
                    <button className='selector__remove' onClick={RedQty}>-</button>
                    <p className='selector__value'>{book.quantity}</p>
                    <button className='selector__add' onClick={AddQty}>+</button>
                </main>
            </div>
            <div className='resume-element__delete'>
                <button className='delete__button' placeholder='Borrar del carrito' onClick={DelQty}>
                    <img className='delete__button--icon' placeholder='Borrar del carrito' src="/src/assets/icon-delete.svg" alt="Borrar" />
                </button>
            </div>
        </div>
    )
}

export default ResumeElement