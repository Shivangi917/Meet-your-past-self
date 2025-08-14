import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

const Homepage = () => {
  const { user, logout } = useAuth();

  const [message, setMessage] = useState('');
  const [sendDate, setSendDate] = useState('');
  const [messageScheduled, setMessageScheduled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sendDate || new Date(sendDate) <= new Date()) {
      alert('Please select a future date and time.');
      return;
    }

    const formData = { 
      message, 
      email: user.email, 
      scheduledDate: sendDate 
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/messages', formData);
      setMessageScheduled(true);
      setMessage('');
      setSendDate('');
      setTimeout(() => setMessageScheduled(false), 5000);
    } catch (error) {
      alert("Failed to schedule the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 flex items-center justify-center px-4">
      <div className="p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 w-full max-w-lg transform transition-all hover:shadow-pink-500/30 hover:scale-[1.01] duration-300">
        
        <h1 className="text-5xl font-extrabold text-white text-center mb-3 drop-shadow-lg">
          Dear Future Me
        </h1>
        <p className="text-white/80 text-center mb-8 text-lg">
          Write a heartfelt message to yourself and receive it in the future.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <textarea
            className="bg-white/20 border border-white/30 p-4 rounded-xl w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-200 transition resize-none min-h-[120px]"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <input
            type="datetime-local"
            value={sendDate}
            onChange={(e) => setSendDate(e.target.value)}
            className="bg-white/20 border border-white/30 p-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-pink-500/30 transition transform hover:scale-105 active:scale-95"
          >
            {loading ? 'Scheduling...' : '📩 Schedule Message'}
          </button>
        </form>

        {messageScheduled && (
          <p className="text-green-200 text-center mt-6 font-medium animate-fadeIn">
            🎉 Your message has been scheduled successfully!
          </p>
        )}

        <button 
          onClick={logout} 
          className="mt-6 text-white underline hover:text-pink-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;