import { Link } from 'react-router-dom';

const Navigation = () => {
  const scrollToPublications = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('publications');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <a
              href="#publications"
              onClick={scrollToPublications}
              className="nav-link inline-flex items-center cursor-pointer"
            >
              Publications
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;