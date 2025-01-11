import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className="nav-link inline-flex items-center"
            >
              Home
            </Link>
            <Link
              to="/teaching"
              className="nav-link inline-flex items-center"
            >
              Teaching
            </Link>
            <Link
              to="/conferences"
              className="nav-link inline-flex items-center"
            >
              Conferences
            </Link>
            <Link
              to="/codes"
              className="nav-link inline-flex items-center"
            >
              Codes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;