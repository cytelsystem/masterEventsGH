import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Welcome to Master Events</h1>
      <div className="my-6">
        <Link to="/notifications" className="text-blue-500 hover:underline mx-4">
          Notification Preferences
        </Link>
        <Link to="/password-recovery" className="text-blue-500 hover:underline mx-4">
          Password Recovery
        </Link>
        <Link to="/registration" className="text-blue-500 hover:underline mx-4">
          Registration
        </Link>
        <Link to="/signin" className="text-blue-500 hover:underline mx-4">
          Sign In
        </Link>
        <Link to="/userprofile" className="text-blue-500 hover:underline mx-4">
          User Profile
        </Link>
      </div>
      <p>Design your awesome Home component here!</p>
    </div>
  );
};

export default Home;