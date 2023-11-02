import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [isUserSection, setIsUserSection] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [organizerEmail, setOrganizerEmail] = useState('');

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleOrganizerEmailChange = (e) => {
    setOrganizerEmail(e.target.value);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    // Add user password recovery submission logic here
  };

  const handleOrganizerSubmit = (e) => {
    e.preventDefault();
    // Add organizer password recovery submission logic here
  };

  const toggleSection = () => {
    setIsUserSection(!isUserSection);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="w-full max-w-md rounded-lg p-8 bg-gray-300" style={{ boxShadow: 'inset 2px 2px 6px #ffffff99, inset -2px -2px 6px #ffffff99', borderRadius: '20px' }}>
        {isUserSection ? (
          <form onSubmit={handleUserSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Recuperación de Contraseña de Usuario</h2>
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={userEmail}
              onChange={handleUserEmailChange}
              className="w-full py-3 px-4 my-2 rounded-lg bg-gray-300 focus:outline-none"
              style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73' }}
            />
            <button
              type="submit"
              className="block font-bold py-3 px-6 rounded-lg w-full my-4 bg-gray-350 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{ borderRadius: '25px', boxShadow: '2px 2px 6px #babecc, -5px -5px 10px #ffffff73' }}
            >
              Recuperar Contraseña
            </button>
          </form>
        ) : (
          <form onSubmit={handleOrganizerSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Recuperación de Contraseña de Organizador</h2>
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={organizerEmail}
              onChange={handleOrganizerEmailChange}
              className="w-full py-3 px-4 my-2 rounded-lg bg-gray-300 focus:outline-none"
              style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73' }}
            />
            <button
              type="submit"
              className="block font-bold py-3 px-6 rounded-lg w-full my-4 bg-gray-350 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{ borderRadius: '25px', boxShadow: '2px 2px 6px #babecc, -5px -5px 10px #ffffff73' }}
            >
              Recuperar Contraseña
            </button>
          </form>
        )}
        <div className="mt-4">
          <button onClick={toggleSection} className="text-blue-500 hover:underline focus:outline-none">
            {isUserSection ? 'Recuperar como Organizador' : 'Recuperar como Usuario'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;


