import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'


const Landing = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const waitProcess = setTimeout(() => {
            navigate('/home')
        }, 2000);
        return () => clearTimeout(waitProcess)
    }, [navigate])
    return (
        <main className='landing'>
            <img className='landing__logo' src="/src/assets/Logo relatos de papel.png" alt="" />
            <p className='landing__text'>
                Bienvenido a tu librería.<br></br>
                Serás redireccionado a la página principal en .
            </p>
            <span className='loader'></span>
        </main>
    );
}

export default Landing