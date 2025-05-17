import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import HomePage from './views/HomePage.jsx'
import Login from './views/Login.jsx'

function AppContent() {
  const location = useLocation();
  const esLogin = location.pathname === '/login';
  return (
    <>
    {!esLogin && <Header />}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
    </>
  )
}

function App() {
  return (
    <AppContent />
  )
}

export default App
