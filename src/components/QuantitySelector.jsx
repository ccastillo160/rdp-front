import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import './QuantitySelector.css'

const QuantitySelector = () => {

    const { quantity, changeQuantity } = useContext(GlobalContext)
    const handlerQuantity = (q) => {
        let newValue = quantity + Number(q.target.value)
        if (newValue > 0) {
            changeQuantity(newValue)            
        }
    }

    return (
        <main className='selector'>
            <button className='selector__remove' value='-1' onClick={handlerQuantity}>-</button>
            <p className='selector__value'>{quantity}</p>
            <button className='selector__add' value='1' onClick={handlerQuantity}>+</button>
        </main>
    )
}

export default QuantitySelector