import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import './CartHover.css'

const CartHover = () => {
    const { cartElements } = useContext(GlobalContext)

    const total = cartElements.reduce((acum, current) => {
        const subtotal = current.price * current.quantity
        return acum + subtotal
    }, 0).toFixed(2)

    if(cartElements.length > 0) {
        return (
            <main className='cart-hover'>
                <p className='cart-hover__title'>Resumen de tu compra</p>
                <table className='cart-hover__table'>
                    <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cartElements.map((element) => {
                            return (
                            <tr key={element.id} className='table__element'>
                                <td className='table__element--value'>{element.title}</td>
                                <td className='table__element--value'>{element.quantity}</td>
                                <td className='table__element--value'>${element.price}</td>
                            </tr>
                        )})}
                        <tr>
                            <th>Total</th>
                            <th></th>
                            <th>{total}</th>
                        </tr>
                    </tbody>
                </table>
            </main>
        )
    } else {
        return (
            <div className='cart-hover'>
                <p>No tienes productos en tu carrito.</p>
            </div>
        )
    }
}

export default CartHover