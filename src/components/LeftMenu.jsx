
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import useBooks from '../hooks/useBooks'
import './LeftMenu.css'

const LeftMenu = () => {
    const { changeGender } = useContext (GlobalContext);
    const { genders } = useBooks('')
    return(
        <main className='left-menu'>
            <h3 className='left-menu__title'>Géneros</h3>
            {genders.map((gender) => {
                return <button className='left-menu__gender' onClick={changeGender(gender)}>{gender}</button>
            })}
        </main>
    )
}

export default LeftMenu