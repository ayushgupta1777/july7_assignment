import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
};
// const RedirectToHome = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     navigate('/home');
//   }, [navigate]);
//   return null;
// };

// const RedirectToLogin = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     navigate('/login');
//   }, [navigate]);
//   return null;
// };

// const RedirectToDefault = ({ isLoggedIn }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     navigate(isLoggedIn ? '/home' : '/login');
//   }, [navigate, isLoggedIn]);
//   return null;
// };
//   return (
//     <Router>
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;

