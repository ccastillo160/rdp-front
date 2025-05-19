import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Landing from './views/Landing.jsx'
import HomePage from './views/HomePage.jsx'
import Login from './views/Login.jsx'

function AppContent() {
  const location = useLocation();
  const esLogin = location.pathname === '/login';
  return (
    <>
    {!esLogin && <Header />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
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
