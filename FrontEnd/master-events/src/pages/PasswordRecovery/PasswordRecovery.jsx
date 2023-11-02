import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import ButtonNeu from '../../components/ButtonNeu/ButtonNeu'

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-100">
      <div className="w-full max-w-md rounded-lg p-8 bg-zinc-300" style={{ boxShadow: 'inset 2px 2px 6px #ffffff99, inset -2px -2px 6px #ffffff99', borderRadius: '20px' }}>
        {isUserSection ? (
          <form onSubmit={handleUserSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Recuperación de Contraseña de Usuario</h2>
            <InputField
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={userEmail}
              onChange={handleUserEmailChange}
            />
            <ButtonNeu
              type="submit"
              text='Recuperar Contraseña'
            />
          </form>
        ) : (
          <form onSubmit={handleOrganizerSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Recuperación de Contraseña de Organizador</h2>
            <InputField
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={organizerEmail}
              onChange={handleOrganizerEmailChange}

            />
            <ButtonNeu
              type="submit"
              text='Recuperar Contraseña'
            />
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


