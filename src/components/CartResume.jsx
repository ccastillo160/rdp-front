import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import ResumeElement from './ResumeElement.jsx'
import './CartResume.css'

const CartResume = () => {
    const {cartElements} = useContext(GlobalContext)

    if (cartElements.lenght === 0) {
        return (
            <p className="empty-message">Tu carrito está vacío.</p>
        )
    } else {
        return (
            <div className='cart-resume'>
                {cartElements.map((element) => {
                    return <div key={element.id}>
                            <ResumeElement book={element} />
                        </div>
                })}
            </div>
        )
    }

}

export default CartResume