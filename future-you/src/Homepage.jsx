import React, { useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sendDate, setSendDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { message, email, scheduledDate: sendDate }; 
    try{
        const response = await axios.post('http://localhost:3000/schedule', formData);
        console.log(response.data);

    } catch (error) {
        console.error('Error scheduling email', error);
    }
  };

  return (
    <div className="min-h-screen bg-rose-300 flex items-center justify-center">
      <div className="glassmorphism-container p-8 rounded-lg shadow-xl backdrop-blur-lg">
        <h1 className="text-4xl text-center font-bold">Love yourself,</h1>
        <h1 className="text-4xl text-center font-bold">Grow More,</h1>
        <h1 className="text-4xl text-center font-bold mb-6">Let's change the Story!</h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <textarea
            className="bg-transparent border-2 border-white p-4 rounded-md w-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <input
            className="bg-transparent border-2 border-white p-4 rounded-md w-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="bg-transparent border-2 border-white p-4 rounded-md w-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="datetime-local"
            value={sendDate}
            onChange={(e) => setSendDate(e.target.value)}
            required
          />

          <button type="submit" className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition duration-300">
            Schedule Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
