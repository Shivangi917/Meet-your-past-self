import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import ProtectedRoute from './Components/ProtectedRoute';
import Homepage from './Home/Homepage';
import Login from './AuthPage/Login';
import Signup from './AuthPage/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
