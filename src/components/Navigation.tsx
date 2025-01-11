import { Link } from 'react-router-dom';

const Navigation = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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
              onClick={(e) => scrollToSection(e, 'publications')}
              className="nav-link inline-flex items-center cursor-pointer"
            >
              Publications
            </a>
            <a
              href="#teaching"
              onClick={(e) => scrollToSection(e, 'teaching')}
              className="nav-link inline-flex items-center cursor-pointer"
            >
              Teaching
            </a>
            <a
              href="#conferences"
              onClick={(e) => scrollToSection(e, 'conferences')}
              className="nav-link inline-flex items-center cursor-pointer"
            >
              Conferences
            </a>
            <a
              href="#codes"
              onClick={(e) => scrollToSection(e, 'codes')}
              className="nav-link inline-flex items-center cursor-pointer"
            >
              Codes
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;