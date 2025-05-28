
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Dr. Avinash Kumar
          </Link>
          
          <div className="flex space-x-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/teaching', label: 'Teaching' },
              { path: '/publications', label: 'Publications' },
              { path: '/conferences', label: 'Conferences' },
              { path: '/codes', label: 'Codes' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive(path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                {label}
                {isActive(path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
