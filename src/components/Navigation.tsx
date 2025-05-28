
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-gray-900"
          >
            Dr. Arunav Kumar
          </Link>
          
          <div className="flex space-x-8">
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
                  "text-sm font-medium transition-colors",
                  isActive(path)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
