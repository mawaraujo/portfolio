import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <header className="navbar-wrapper w-full text-right">
            <nav className="navigation">
                <Link 
                    className="nav-link mr-3" 
                    to="/">
                    Home
                </Link>

                <Link
                    className="nav-link" 
                    to="/portfolio">
                    Portfolio
                </Link>
            </nav>
        </header>
    );
}

export default Navigation;