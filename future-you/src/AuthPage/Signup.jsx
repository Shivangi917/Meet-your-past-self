// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { username, useremail, password };
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      console.log(response.data);
      setUsername('');
      setUserEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error signing up', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center mb-8 text-white tracking-wide">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="bg-transparent border border-white/50 p-3 rounded-lg w-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className="bg-transparent border border-white/50 p-3 rounded-lg w-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            type="email"
            placeholder="Email"
            value={useremail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />

          <input
            className="bg-transparent border border-white/50 p-3 rounded-lg w-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg w-full font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-pink-500/30"
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>

        <p className="text-center text-white/80 mt-6 text-sm">
          Already have an account?{' '}
          <a href="/" className="underline hover:text-white">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
