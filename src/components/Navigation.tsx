
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="text-xl font-light text-gray-800"
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
                    "text-sm font-normal transition-colors px-3 py-1",
                    isActive(path)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
