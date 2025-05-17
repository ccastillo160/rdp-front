import './Login.css'

const Login = () => {
    return (
        <main className="login">
            <img className="login__logo" src="src/assets/Icono_relatos_de_papel.png" alt="relatos-de-papel" />
            <div className='login__container'>
                <h2 className='login__title'>Iniciar sesión</h2>
                <form className='login__form' >
                    <div className='login__form--group'>
                        <label className='form__label' htmlFor="user">Usuario</label>
                        <input className='form__field' type="text" id="user" placeholder='Ingresa usuario o correo'/>
                    </div>
                    <div className='login__form--group'>
                        <label className='form__label' htmlFor="password">Contraseña</label>
                        <input className='form__field' type="text" id="password" placeholder='Ingresa tu contraseña'/>
                    </div>
                    <button className='form__send-button' formAction="send">Iniciar sesión</button>
                </form>
                <button className='login__create-account'>Crear cuenta</button>
            </div>
        </main>
    )
}

export default Login