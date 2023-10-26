import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import Registration from './pages/Registration/Registration';
import SignIn from './pages/SignIn/SignIn';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


