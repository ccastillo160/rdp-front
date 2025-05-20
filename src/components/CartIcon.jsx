import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import './CartIcon.css'

const CartIcon = () => {
    const { changeVisibleCart, cartElements } = useContext (GlobalContext);

    const HandlerMouseEnter = () => {
        changeVisibleCart(true)
    }

    const HandlerMouseLeave = () => {
        changeVisibleCart(false)
    }

    const CartAvailable = cartElements.length > 0

    return (
        <Link to='/cart'>
            <button 
                className='cart-icon'
                onMouseEnter={HandlerMouseEnter}
                onMouseLeave={HandlerMouseLeave}
            >
                {CartAvailable && <div className='cart-icon__value'>{cartElements.length}</div>}
            <img className='cart-icon__image' src="/src/assets/icon-cart.svg" alt="" />
            </button>
        </Link>
    )
};

export default CartIcon;