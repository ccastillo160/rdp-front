import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon'
import './Header.css';

const Header = () => {
  const { changeSearch } = useContext (GlobalContext);
  const [searchText, setSearchText] = useState('');

  const handlerSearch = () => {
    if(searchText.trim().length === 0) {
      alert('Debes indicar un parametro de búsqueda')
    } 
    changeSearch(searchText)
  }

  return (
    <header className="header">
      <div className='header__logo'>
        <Link to='/home'>
        <button className='logo__home-button' title='Ir al home'>
          <img className='home-button__image' src="/src/assets/icono-rdp-80x80.png" alt="Relatos de papel" />
        </button>
        </Link>
      </div>
      <div className='header__search-bar'>
        <input 
          className='search-bar__input' 
          type="text" 
          placeholder='Buscar libro por nombre'
          value = {searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
          className='search-bar__button' 
          title='Buscar libros'
          onClick={handlerSearch}>
          <img src="/src/assets/icon-search.svg" alt="" />
        </button>
      </div>
      <div className='header__right-menu'>
        <button className='right-menu__option'>
          <img className='option__icon' src="/src/assets/icon-login.svg" alt="" />
        </button>
        <CartIcon />
      </div>
    </header>
  );
}
export default Header;