import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { login, logo } from '../../assets/links';
import { Eye, EyeOff } from 'lucide-react';
import * as lucid from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', username: '', emailAddress: '', password: '', role: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showRole, setShowRole] = useState(true);
  const [error, setError] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.role) {
      setError("Please select a role");
      return;
    }

    const result = await register(form);

    if (result.success) {
      console.log("Signup successful");
      // Redirect to Login to be safe, or direct home if auto-logged in.
      // Backend code returns "newUser" and sets cookie.
      // AuthContext sets user.
      // We can redirect to home.
      navigate('/');
    } else {
      setError(result.message);
    }
  };


  const handleRole = (roleType) => {
    setForm({ ...form, role: roleType });
    setShowRole(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md mx-auto border border-green-700">

          <h1 className="text-4xl font-bold text-center mb-6 text-green-800">Sign Up</h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSignup}>
            {showRole && <hr />}
            {showRole &&
              <div className='*:mb-8'>
                <h1 className="text-2xl font-bold text-center text-muted">Who are you?</h1>
                <div
                  onClick={() => handleRole("athlete")}
                  className="cursor-pointer bg-green-600 text-white text-center items-center p-5 flex-col flex justify-center rounded text-[20px] hover:bg-green-700 transition"
                >
                  <lucid.PersonStandingIcon size={30} />
                  <span>Football player</span>
                </div>

                <div
                  onClick={() => handleRole("scout")}
                  className="cursor-pointer bg-green-600 text-white text-center items-center p-5 flex-col flex justify-center rounded text-[20px] hover:bg-green-700 transition"
                >
                  <lucid.House size={30} />
                  <span>Football Academy</span>
                </div>
              </div>
            }
            {!showRole &&
              <>
                <div className="text-center font-bold text-green-700 mb-2">
                  Signing up as: {form.role === 'athlete' ? 'Football Player' : 'Football Academy'}
                  <button type="button" onClick={() => setShowRole(true)} className="ml-2 text-xs text-blue-500 underline">Change</button>
                </div>

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
