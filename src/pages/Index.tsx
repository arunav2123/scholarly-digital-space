import Navigation from '../components/Navigation';
import { Github, Mail, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Content Section */}
      <section className="pt-24 pb-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Profile Section - Left Side */}
            <div className="text-left">
              <div className="mb-8">
                <Avatar className="h-48 w-48">
                  <AvatarImage src="/placeholder.svg" alt="Arunav Kumar" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-academic-primary">
                Arunav Kumar
              </h1>
              <p className="text-xl text-academic-secondary mb-4">
                Postdoctoral Associate
              </p>
              <p className="text-lg text-academic-secondary mb-8">
                Massachusetts Institute of Technology (MIT)
                <br />
                Plasma Science and Fusion Center
              </p>
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://github.com/arunav2123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-secondary hover:text-academic-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:arunavk@mit.edu"
                  className="text-academic-secondary hover:text-academic-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/arunav-kumar-648a78168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-secondary hover:text-academic-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Research Interests Section - Right Side */}
            <div className="text-left">
              <h2 className="section-title mb-8">Research Interests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Machine Learning & AI</h3>
                  <p className="text-academic-secondary">
                    Advanced research in deep learning, focusing on neural networks and their applications in complex systems.
                  </p>
                </div>
                <div className="card hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Computer Systems</h3>
                  <p className="text-academic-secondary">
                    Optimization of distributed systems and high-performance computing architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Journal Publications</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="text-academic-secondary mb-4">
                Updated list of publications are also available on Google Scholar:{' '}
                <a 
                  href="https://scholar.google.com.au/citations?hl=en&user=pqxB8RcAAAAJ"
                  className="text-academic-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar Profile
                </a>
              </p>
              <p className="text-academic-secondary mb-8">
                ORCID ID:{' '}
                <a 
                  href="https://orcid.org/0000-0001-8678-4552"
                  className="text-academic-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://orcid.org/0000-0001-8678-4552
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">First Author:</h3>
              <ol className="list-decimal list-outside ml-6 space-y-4">
                <li className="text-academic-secondary">
                  <span className="font-semibold">A. Kumar</span>, C.Nuhnerberg, D.Spong, R.L.Dewar, M.J Hole, Z. Qu, J. Loizu, S.R Hudson,
                  <em className="block mt-1">Computation of relaxed MHD spectrum using SPEC code in non-axisymmetric geometries</em>
                  (paper in preparation, 2022)
                </li>
                <li className="text-academic-secondary">
                  <span className="font-semibold">A. Kumar</span>, J. Loizu, M.J Hole, Z.Qu, S. R Hudson and R.L.Dewar,
                  <em className="block mt-1">On the relationship between the multi-region relaxed variational principle and resistive inner layer theory</em>,
                  2023 Plasma Phys. Control. Fusion 65 075004
                  <div className="text-sm mt-1">DOI: <a href="https://doi.org/10.1088/1361-6587/acc96e" className="text-academic-primary hover:underline">https://doi.org/10.1088/1361-6587/acc96e</a></div>
                </li>
                {/* Add more first author publications similarly */}
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Co-author:</h3>
              <ol className="list-decimal list-outside ml-6 space-y-4">
                <li className="text-academic-secondary">
                  S Benjamin, C Clauser, C Rea, R Sweeney, <span className="font-semibold">A. Kumar</span>, F. Marmar
                  <em className="block mt-1">Macroscopic trends of linear tearing stability in cylindrical current profiles</em>
                </li>
                <li className="text-academic-secondary">
                  K. Aleynikova, S. R. Hudson, P. Helander, <span className="font-semibold">A. Kumar</span>, J.Geiger, J. Loizu, C. Nührenberg, K. Rahbarnia, Z. Qu, Y. Gao, H. Thomsen, Y. Turkin and W7-X team,
                  <em className="block mt-1">Model for current drive induced crash cycles in W7-X</em>,
                  Nuclear Fusion 61(2021) 126040, DOI: <a href="https://doi.org/10.1088/1741-4326/ac2ab9" className="text-academic-primary hover:underline">/10.1088/1741-4326/ac2ab9</a>
                </li>
                {/* Add more co-author publications similarly */}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Contact</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-academic-secondary mb-6">
              Feel free to reach out for research collaborations or inquiries.
            </p>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:your.email@mit.edu"
                  className="text-academic-primary hover:underline"
                >
                  your.email@mit.edu
                </a>
              </p>
              <p>
                <strong>Location:</strong> Massachusetts Institute of Technology
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
