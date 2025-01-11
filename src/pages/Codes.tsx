import Navigation from '../components/Navigation';
import { Github } from 'lucide-react';

const Codes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Research Codes</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">SPEC Code</h3>
                <p className="text-academic-secondary mb-4">
                  A specialized code for computing MHD equilibria in stellarator geometries.
                </p>
                <a 
                  href="https://github.com/SPEC-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-primary hover:underline inline-flex items-center"
                >
                  <Github className="mr-2" size={20} />
                  View Repository
                </a>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">Plasma Analysis Tools</h3>
                <p className="text-academic-secondary mb-4">
                  Collection of Python scripts for plasma physics data analysis.
                </p>
                <a 
                  href="#"
                  className="text-academic-primary hover:underline inline-flex items-center"
                >
                  <Github className="mr-2" size={20} />
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Codes;