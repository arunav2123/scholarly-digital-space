
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-semibold text-gray-900"
          >
            Arunav Kumar
          </Link>
          
          <div className="flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/teaching', label: 'CV' },
              { path: '/publications', label: 'Publications & Conferences' },
              { path: '/codes', label: 'Links' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "text-sm transition-colors py-2 border-b-2",
                  isActive(path)
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600"
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
