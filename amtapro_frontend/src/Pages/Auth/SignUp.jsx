import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { login, logo } from '../../assets/links';
import { Eye, EyeOff } from 'lucide-react';
import * as lucid from 'lucide-react';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', username: '', emailAddress: '', password: '', role: '' });
  console.log(form)
  const [showPassword, setShowPassword] = useState(false);
  const [showRole, setShowRole] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const BASE_URL = "https://amtapro.onrender.com";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      console.log('Signup successful:', data);
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };


  const handleRole = (e) => {
    setForm({ ...form, role: (e.target.innerText === "Football Academy") ? "scout" : "athlete" });
    setShowRole(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md mx-auto border border-green-700">

          <h1 className="text-4xl font-bold text-center mb-6 text-green-800">Sign Up</h1>

          <form className="space-y-4" onSubmit={handleSignup}>
            {showRole && <hr />}
            { showRole && 
              <div className='*:mb-8'>
                  <h1 className="text-2xl font-bold text-center text-muted">Who are you?</h1>
                  <div
                    onClick={handleRole}
                    value={form.role}
                    onChange={handleChange}
                    className="bg-primary text-white text-center items-center p-5 flex-col flex justify-center rounded text-[20px] hover:bg-foreground transition"
                  >
                    <lucid.PersonStandingIcon size={30}/>
                    <span>Football player</span>
                  </div>

                  <div
                    onClick={handleRole}
                    value={form.role}
                    onChange={handleChange}
                    className="bg-primary text-white text-center items-center p-5 flex-col flex justify-center rounded text-[20px] hover:bg-foreground transition"
                  >
                    <lucid.House size={30}/>
                    <span>Football Academy</span>
                  </div>
              </div>
            }
            { !showRole && 
            <>
              <input
                type="text"
                name="name"
                autoFocus
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="emailAddress"
                placeholder="Email"
                value={form.emailAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 cursor-pointer text-green-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300"
              >
                Create Account
              </button>
            </>
            } 
          </form>

          <div className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to={login} className="text-blue-500 underline">
              Login here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
