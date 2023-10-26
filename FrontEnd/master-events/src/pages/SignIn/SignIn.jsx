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
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        {isUserSection ? (
          <form onSubmit={handleUserSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">User Sign In</h2>
            <input
              // User sign-in form inputs
              type="email"
              placeholder="Enter your email"
              value={userData.userEmail}
              onChange={handleUserChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <input
              // User password input
              type="password"
              placeholder="Enter your password"
              value={userData.userPassword}
              onChange={handleUserChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Sign In as User
            </button>
            <p className="mt-4">
              <Link to="/password-recovery" className="text-blue-500 hover:underline">
                Forgot your password? Recover here
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleOrganizerSubmit} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Organizer Sign In</h2>
            <input
              // Organizer email input
              type="email"
              placeholder="Enter your email"
              value={organizerData.organizerEmail}
              onChange={handleOrganizerChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <input
              // Organizer password input
              type="password"
              placeholder="Enter your password"
              value={organizerData.organizerPassword}
              onChange={handleOrganizerChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Sign In as Organizer
            </button>
            <p className="mt-4">
              <Link to="/password-recovery" className="text-blue-500 hover:underline">
                Forgot your password? Recover here
              </Link>
            </p>
          </form>
        )}
        <div className="mt-4">
          <button onClick={toggleSection} className="text-blue-500 hover:underline focus:outline-none">
            {isUserSection ? 'Or sign in as an Organizer' : 'Or sign in as a User'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
