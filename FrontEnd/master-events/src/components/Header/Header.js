import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to='/'>
        <img src="/logo.svg" alt="MasterEvents Logo" width="100" height="57" />
        </Link>
        <div className="header-text">
          MasterEvents
        </div>
      </div>
      <div className="button-container">
        <button className="header-button">Crear Evento</button>
        <Link to="/registration">
          <button className="header-button">Crear cuenta</button>
        </Link>
        <Link to="/signin">
          <button className="header-button">Iniciar sesión</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
