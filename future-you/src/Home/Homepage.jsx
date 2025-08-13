import React, { useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sendDate, setSendDate] = useState('');
  const [messageScheduled, setMessageScheduled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { message, email, scheduledDate: sendDate }; 
    try {
      const response = await axios.post('http://localhost:3000/api/messages', formData);
      console.log(response.data);
      setMessageScheduled(true);
      setMessage('');
      setEmail('');
      setSendDate('');
    } catch (error) {
      console.error('Error scheduling email', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center">
      <div className="glassmorphism-container p-10 rounded-3xl shadow-2xl backdrop-blur-xl w-full max-w-md animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-white text-center mb-2">Dear Future Me</h1>
        <p className="text-white/80 text-center mb-6">Write a message to yourself and see it in the future</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <textarea
            className="bg-white/20 border-2 border-white/30 p-4 rounded-xl w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 border-2 border-white/30 p-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            required
          />

          <input
            type="datetime-local"
            value={sendDate}
            onChange={(e) => setSendDate(e.target.value)}
            className="bg-white/20 border-2 border-white/30 p-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? 'Scheduling...' : 'Schedule Message'}
          </button>
        </form>

        {messageScheduled && (
          <p className="text-green-200 text-center mt-4 font-medium">
            Your message has been scheduled!
          </p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
