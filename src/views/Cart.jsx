import CartResume from '../components/CartResume'
import TotalSale from '../components/TotalSale'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import './Cart.css'

const Cart = () => {
    const { cartElements } = useContext(GlobalContext)

    if (cartElements.length > 0) {
        return (
            <main className='cart'>
                <div className='cart__resume'>
                    <p className='title resume__title' >Carrito ({cartElements.length} productos)</p>
                    < CartResume />
                </div>
                <div>
                    <p className='title'>Resumen de compra</p>
                    < TotalSale />
                </div>
                
            </main>
        )
    } else {
        return (
            <p className='cart'>No tienes productos en tu carrito</p>
        )
    }
}

export default Cart