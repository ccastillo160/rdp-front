import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { GlobalProvider, GlobalContext } from './context/GlobalContext'
import Header from './components/Header'
import CartHover from './components/CartHover'
import Footer from './components/Footer.jsx'
import Landing from './views/Landing.jsx'
import HomePage from './views/HomePage.jsx'
import BookSelected from './views/BookSelected.jsx'
import Cart from './views/Cart.jsx'
import Login from './views/Login.jsx'

function AppContent() {
  const location = useLocation();
  const esLogin = location.pathname === '/login';
  const { visibleCart } = useContext(GlobalContext)
  return (
    <>
    {!esLogin && <Header />}
    {visibleCart && <CartHover />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book/:bookId" element={< BookSelected />} />
      <Route path="/cart" element={< Cart />} />
    </Routes>
    <Footer />
    </>
  )
}

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  )
}

export default App
