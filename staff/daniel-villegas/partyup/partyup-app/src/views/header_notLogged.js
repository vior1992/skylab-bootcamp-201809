import React from 'react'

function headerNotLogged(props){
    return <div>
            <header className="site__header">
                <a href="#" className="logo" onClick={() => props.onLogoClick}>Logo</a>
                
                <div className="actions">
                    <a href="#" className="login__link" onClick={() => props.onLoginClick}>Iniciar sesión</a>
                    <a href="#" className="logup__link" onClick={() => props.onRegisterClick}>Registrarse</a>
                </div>
            </header>
    </div>

}

export default headerNotLogged