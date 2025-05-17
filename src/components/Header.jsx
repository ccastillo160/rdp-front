import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='header__logo'>
        <button className='logo__home-button' title='Ir al home'>
          <img className='home-button__image' src="/src/assets/icono-rdp-80x80.png" alt="Relatos de papel" />
        </button>
      </div>
      <div className='header__search-bar'>
        <input className='search-bar__input' type="text" placeholder='Buscar libro por nombre'/>
        <button className='search-bar__button' title='Buscar libros'>
          <img src="/src/assets/icon-search.svg" alt="" />
        </button>
      </div>
      <div className='header__right-menu'>
        <button className='right-menu__option'>
          <img className='option__icon' src="/src/assets/icon-login.svg" alt="" />
        </button>
        <button className='right-menu__option'>
          <img className='option__icon' src="/src/assets/icon-cart.svg" alt="" />
        </button>
      </div>
    </header>
  );
}
export default Header;