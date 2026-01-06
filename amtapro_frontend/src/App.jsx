// File: src/App.jsx

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Lander from './Pages/Lander/Lander'
import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact';
import Support from './Pages/Support/Support';
import About from './Pages/About/About'
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import TermsOfService from './Pages/Terms Of Service/TermsOfService';
import PrivacyPolicy from './Pages/Privacy Policy/PrivacyPolicy';
import ForgotPassword from './Pages/Forgot Password/ForgotPassword'
import Team from './Pages/Team/Team';
import FootballerDashboard from './Pages/Dashboard/Pages/Footballer/FootballerDashboard';
import AcademyDashboard from './Pages/Dashboard/Pages/Academy/AcademyDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Lander />}></Route>
          <Route path="/*" element={<Lander />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<SignUp />}></Route>
          <Route path="/auth/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>

          {/* {
            footballers.map((footballer, index) => (
              <Route key={index} path={`/:${footballer.username}`} element={<FootballerDashboard />} />
            ))
          } */}

          {/* Use a prefix to make the routes unique */}
          <Route path="/footballer/:footballerName" element={<FootballerDashboard />} />
          <Route path="/academy/:academyName" element={<AcademyDashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;