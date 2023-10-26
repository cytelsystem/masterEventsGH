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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        {isUserSection ? (
          <form onSubmit={handleUserSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">User Password Recovery</h2>
            <input
              // User email input
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={handleUserEmailChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Recover Password
            </button>
          </form>
        ) : (
          <form onSubmit={handleOrganizerSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Organizer Password Recovery</h2>
            <input
              // Organizer email input
              type="email"
              placeholder="Enter your email"
              value={organizerEmail}
              onChange={handleOrganizerEmailChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Recover Password
            </button>
          </form>
        )}
        <div className="mt-4">
          <button onClick={toggleSection} className="text-blue-500 hover:underline focus:outline-none">
            {isUserSection ? 'Or recover as an Organizer' : 'Or recover as a User'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
