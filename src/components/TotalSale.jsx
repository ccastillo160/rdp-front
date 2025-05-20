import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import './TotalSale.css'

const TotalSale = () => {
    const { cartElements, changeCartElements } = useContext(GlobalContext)
    const subtotal = cartElements.reduce((acum, current) => {
        const subtotal = current.price * current.quantity
        return acum + subtotal
    }, 0).toFixed(2)
    const discount = 0; //Este valor lo quemé para usarlo más adelante con los cupones de descuento
    const total = (subtotal - discount).toFixed(2)

    const endSale = () => {
        changeCartElements([])
        alert('Su compra se ha realizado exitosamente.')
    }

    return (
        <main className='total-sale'>
            <table className='total-sale__resume'>
                <tr className='resume__subtotal'>
                    <th className='total-title subtotal__title'>Subtotal:</th>
                    <td className='total-value subtotal__value'>${subtotal}</td>
                </tr>
                <tr className='resume__discount'>
                    <th className='total-title discount__title'>Descuento:</th>
                    <td className='total-value discount__value'>${discount}</td>
                </tr>
                <tr className='resume__total'>
                    <th className='total-title total__title'>Total:</th>
                    <td className='total-value total__value'>${total}</td>
                </tr>
            </table>
            <Link to='/home'>
            <button className='total-sale__end-sale' onClick={endSale}>Finalizar compra</button>
            </Link>
        </main>
    )
}

export default TotalSale