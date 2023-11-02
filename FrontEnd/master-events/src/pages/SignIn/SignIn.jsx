import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';
import ButtonNeu from '../../components/ButtonNeu/ButtonNeu';

const SignIn = () => {
  const [isUserSection, setIsUserSection] = useState(true);
  const [userData, setUserData] = useState({
    userEmail: '',
    userPassword: '',
  });
  const [organizerData, setOrganizerData] = useState({
    organizerEmail: '',
    organizerPassword: '',
  });

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOrganizerChange = (e) => {
    setOrganizerData({ ...organizerData, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    // Add user sign-in submission logic here
  };

  const handleOrganizerSubmit = (e) => {
    e.preventDefault();
    // Add organizer sign-in submission logic here
  };

  const toggleSection = () => {
    setIsUserSection(!isUserSection);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-100">
      <div className="w-full max-w-md rounded-lg p-8 bg-zinc-300" style={{ boxShadow: 'inset 2px 2px 6px #ffffff99, inset -2px -2px 6px #ffffff99', borderRadius: '20px' }}>
        {isUserSection ? (
          <form onSubmit={handleUserSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Login de Usuario</h2>
            <InputField
              type="email"
              placeholder="Ingrese su email"
              value={userData.userEmail}
              onChange={handleUserChange}

            />
            <InputField
              type="password"
              placeholder="Enter your password"
              value={userData.userPassword}
              onChange={handleUserChange}

            />
            <ButtonNeu
              type="submit"
              text='Iniciar Sesion'
            />
            <p className="mt-4">
              <Link to="/password-recovery" className="text-blue-500 hover:underline">
                Olvidaste tu Contraseña?
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleOrganizerSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Login de Organizador</h2>
            <InputField
              type="email"
              placeholder="Enter your email"
              value={organizerData.organizerEmail}
              onChange={handleOrganizerChange}

            />
            <InputField
              type="password"
              placeholder="Enter your password"
              value={organizerData.organizerPassword}
              onChange={handleOrganizerChange}

            />
            <ButtonNeu
              type="submit"
              text='Iniciar Sesion'
            />
            <p className="mt-4">
              <Link to="/password-recovery" className="text-blue-500 hover:underline">
                Olvidaste tu Contraseña?
              </Link>
            </p>
          </form>
        )}
        <div className="mt-4">
          <button onClick={toggleSection} className="text-blue-500 hover:underline focus:outline-none">
            {isUserSection ? 'Ingresar como Organizador' : 'Ingresar como Usuario'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



