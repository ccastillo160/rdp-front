import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { books as booksData } from '../data/booksData.js';
import './LeftMenu.css'

const allGenders = booksData.reduce((acum, current) => {
    if (!acum.includes(current['gender'])) {
        acum.push(current['gender'])
    }
    return acum.sort()
}, []);
allGenders.unshift('Todos')

const LeftMenu = () => {
    const { changeGender } = useContext (GlobalContext);

    const handleGender = (e) => {
        changeGender(e.target.value)
    }
    
    return(
        <main className='left-menu'>
            <h3 className='left-menu__title'>Géneros</h3>
            {allGenders.map((thisGender) => {
                return <button key={thisGender} className='left-menu__gender' value={thisGender} onClick={handleGender}>{thisGender}</button>
            })}
        </main>
    )
}

export default LeftMenu