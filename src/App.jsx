import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from "./LandingPage";
import ExpenseTracker from './ExpenseTracker';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link> <Link to="/tracker">Expense Tracker</Link>
        <Route exact path= "/" component={LandingPage} />	
        <Route path="/tracker" component={ExpenseTracker} />
      </div>
    </Router>
  );
}

export default App;