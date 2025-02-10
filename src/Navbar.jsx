import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar () {
    return (
        <nav className="navbar">
            <h1 className="site-name">
                <Link to = "/">Cashflow Records</Link>
            </h1>
            <div className="nav-links">
                <Link to="/tracker">Expense Tracker</Link>
            </div>
        </nav>
    );
}

export default Navbar;