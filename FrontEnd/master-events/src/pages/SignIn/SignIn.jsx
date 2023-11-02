import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="w-full max-w-md rounded-lg p-8 bg-gray-300" style={{ boxShadow: 'inset 2px 2px 6px #ffffff99, inset -2px -2px 6px #ffffff99', borderRadius: '20px' }}>
        {isUserSection ? (
          <form onSubmit={handleUserSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Login de Usuario</h2>
            <input
              type="email"
              placeholder="Ingrese su email"
              value={userData.userEmail}
              onChange={handleUserChange}
              className="w-full py-3 px-4 my-2 rounded-lg bg-gray-300 focus:outline-none"
              style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73' }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={userData.userPassword}
              onChange={handleUserChange}
              className="w-full py-3 px-4 my-2 rounded-lg bg-gray-300 focus:outline-none"
              style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73' }}
            />
            <button
              type="submit"
              className="block font-bold py-3 px-6 rounded-lg w-full my-4 bg-gray-350 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{ borderRadius: '25px', boxShadow: '2px 2px 6px #babecc, -5px -5px 10px #ffffff73' }}
            >
              Iniciar Sesion
            </button>
            <p className="mt-4">
              <Link to="/password-recovery" className="text-blue-500 hover:underline">
                Olvidaste tu Contraseña?
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleOrganizerSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Login de Organizador</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={organizerData.organizerEmail}
              onChange={handleOrganizerChange}
              className="w-full py-3 px-4 my-2 rounded-lg bg-gray-300 focus:outline-none"
              style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73' }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={organizerData.organizerPassword}
              onChange={handleOrganizerChange}
              className="w-full py-3 px-4 my-2 rounded-lg bg-gray-300 focus:outline-none"
              style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73' }}
            />
            <button
              type="submit"
              className="block font-bold py-3 px-6 rounded-lg w-full my-4 bg-gray-350 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{ borderRadius: '25px', boxShadow: '2px 2px 6px #babecc, -5px -5px 10px #ffffff73' }}
            >
              Iniciar Sesion
            </button>
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



