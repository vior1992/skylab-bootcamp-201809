import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return <div>
        <header class="header">
            <div class="header__items">
                <a class="header__logo" href="./landing.html">logo</a>
                
                <div class="header__ancores">
                    <a href="./login.html">Iniciar sesion</a>
                    <a href="./register.html">Registrarse</a>
                </div>
            </div>
        </header>

        <main>
            <section class="main__videosection">
                <video class="main__video" src=""></video>
                <div class="main__register">
                    <h2>¿Quieres fiesta?</h2>
                    <p>Encuentrala con Partyup</p>
                    <button onclick="">Registrarse</button>
                </div>
            </section>
            <section class="partyups">
                <div class="partyups__titles">
                    <h3>Proximos Partyups</h3>
                    <a href="login.html">Ver todo</a>
                </div>
                <div class="partyups__list">
                    <div class="partyups__event">
                        <p>Sabado, 17 de noviembre 8:00</p>
                        <h4>Skylabeers</h4>
                        <p>Fiesta en skylab con cerveza</p>
                        <p>Creado por: Dani</p>
                    </div>
                    <div class="partyups__event">
                        <p>Sabado, 18 de noviembre 8:00</p>
                        <h4>Skylabeers</h4>
                        <p>Fiesta en skylab con cerveza</p>
                        <p>Creado por: Dani</p>
                    </div>
                    <div class="partyups__event">
                        <p>Sabado, 19 de noviembre 8:00</p>
                        <h4>Skylabeers</h4>
                        <p>Fiesta en skylab con cerveza</p>
                        <p>Creado por: Dani</p>
                    </div>
                </div>  
            </section> 
        </main>
        
        <footer class="footer">
            <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
        </footer>
    </div>
    
  }
}

export default App;
