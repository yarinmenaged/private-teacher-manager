import './App.css';
import Login from './components/Login/LoginConnector';
import RegisterForm from "./components/RegisterForm/RegisterFormConnector";
import Home from "./components/Home/HomeConnector";
import Schedule from './components/Schedule/ScheduleConnector'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App-header">
        <div className='container'>
          <h2 style={{ textAlign: "center" }}>the application logo will be here</h2>
          <Routes>
            <Route path='/' exact element={<Login />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/home' element={<Home />} />
            <Route path='/schedule' element={<Schedule />} />
         </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
