import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./LandingPage";
import ExpenseTracker from './ExpenseTracker';

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
          <LandingPage />
          </Route>
          <Route path="/tracker">
          <ExpenseTracker />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;