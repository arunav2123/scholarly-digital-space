
import Navigation from '../components/Navigation';
import { Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-light text-gray-800 mb-2">Arunav Kumar</h1>
            <p className="text-lg text-gray-600">Magnetohydrodynamics, Plasma Physics, Computational Modeling</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-light text-gray-800 mb-4">Hello! I'm Arunav Kumar</h2>
                
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    My current research focuses on developing, utilizing and extending computational tools for 
                    magnetohydrodynamics and plasma physics applications, particularly in fusion energy research. 
                    I specialize in <strong>stellarator physics</strong> and <strong>tokamak research</strong>.
                  </p>
                  
                  <p>
                    Among my research outputs, I have contributed to novel MHD equilibrium concepts and advanced 
                    computational modeling techniques. My work involves multi-region relaxed MHD equilibria and 
                    tearing mode stability analysis, crucial for understanding plasma confinement in fusion devices.
                  </p>
                  
                  <p>
                    I am currently a Postdoctoral Research Associate at the Australian National University, 
                    where I continue to advance our understanding of plasma physics through computational 
                    modeling and theoretical analysis. My research contributes to the development of sustainable 
                    fusion energy solutions.
                  </p>
                  
                  <p>
                    In addition to my research, I am actively involved in teaching and mentoring, having served 
                    as co-lecturer and academic tutor for various mathematics and applied mathematics courses 
                    at ANU. I have also contributed to advanced PDEs courses and workshops.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Profile Image */}
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/078359ab-8623-42c6-be9d-47dab476a7ff.png" 
                    alt="Arunav Kumar"
                    className="w-48 h-48 object-cover mx-auto border border-gray-200"
                  />
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-4">Contact me</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a 
                        href="mailto:arunav.kumar@anu.edu.au" 
                        className="text-blue-600 hover:underline text-sm"
                      >
                        arunav.kumar@anu.edu.au
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">
                      Mathematical Sciences Institute<br />
                      Australian National University<br />
                      Canberra, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
