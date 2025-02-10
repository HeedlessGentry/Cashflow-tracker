import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./LandingPage";
import ExpenseTracker from './ExpenseTracker';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router basename='/Cashflow-tracker'>
      <div className="app-container">
        <Navbar />
        <div className="app">
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/tracker' element={<ExpenseTracker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;