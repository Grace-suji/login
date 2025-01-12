import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from "./Components/Home";
import Users from './Components/Users';
import { UsersProvider } from "./Context/UsersContext";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Wrap the entire Routes in UsersProvider */}
        <UsersProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </UsersProvider>
      </Router>
    </div>
  );
}

export default App;
