import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.svg" alt="MasterEvents Logo" width="100" height="57" />
        <div className="header-text">
          MasterEvents
        </div>
      </div>
      <div className="button-container">
        <button className="header-button">Crear Evento</button>
        <button className="header-button">Crear cuenta</button>
        <button className="header-button">Iniciar sesión</button>
      </div>
    </header>
  );
}

export default Header;
