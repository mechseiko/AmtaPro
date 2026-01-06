import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword, register } from '../../assets/links';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ emailAddress: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error on change
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Call login from AuthContext
    const result = await login(form);

    if (result.success) {
      console.log('Login successful');
      // Redirect based on role not strictly available yet, defaulting to a generic dashboard or trying to guess
      // Ideally we check result.user.role if we returned it, or pull from user state
      // For now, let's just go to a landing dashboard or home.
      // The user requested fixing dashboard links, so let's try to be smart.
      // But we don't have the user object in scope here easily without awaiting the state update or returning it.
      // Let's assume we go to home for now or a generic dashboard route if it existed.
      // The router has /footballer/:footballerName and /academy/:academyName
      // We'll need the username.
      // Let's reload the page or navigate to home? 
      // Better: navigate to home, and let the Navbar/Header show "Dashboard" link if logged in.
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md mx-auto border border-green-700">
          <h1 className="text-4xl font-bold text-center mb-6 text-green-800">Log In</h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email"
              autoFocus
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
              Login
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            <Link to={forgotPassword} className="text-blue-500 underline">
              Forgot your password?
            </Link>
          </div>

          <div className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to={register} className="text-blue-500 underline">
              Sign up here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
