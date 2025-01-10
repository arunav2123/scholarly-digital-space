import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`nav-link inline-flex items-center ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/publications"
              className={`nav-link inline-flex items-center ${
                location.pathname === '/publications' ? 'active' : ''
              }`}
            >
              Publications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;