import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext'; 

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData);
      console.log(response.data);

      login(response.data.user); 

      setFormData({ username: '', password: '' });

      navigate('/home');
    } catch (error) {
      console.error('Error logging in', error);
      alert('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center mb-8 text-white tracking-wide">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="bg-transparent border border-white/50 p-3 rounded-lg w-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            className="bg-transparent border border-white/50 p-3 rounded-lg w-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg w-full font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-pink-500/30"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-white/80 mt-6 text-sm">
          Don’t have an account? <a href="/signup" className="underline hover:text-white">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
