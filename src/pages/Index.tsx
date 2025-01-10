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
                Massachusetts Institute of Technology (MIT)  </p>
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
                  href="mailto:your.email@mit.edu"
                  className="text-academic-secondary hover:text-academic-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
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
          <h2 className="section-title text-center mb-12">Selected Publications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                Your Latest Publication Title
              </h3>
              <p className="text-academic-secondary mb-2">
                Authors: Arunav Kumar, et al.
              </p>
              <p className="text-sm text-academic-secondary">
                Conference/Journal Name, Year
              </p>
            </div>
            <div className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                Second Publication Title
              </h3>
              <p className="text-academic-secondary mb-2">
                Authors: Arunav Kumar, et al.
              </p>
              <p className="text-sm text-academic-secondary">
                Conference/Journal Name, Year
              </p>
            </div>
            <div className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                Third Publication Title
              </h3>
              <p className="text-academic-secondary mb-2">
                Authors: Arunav Kumar, et al.
              </p>
              <p className="text-sm text-academic-secondary">
                Conference/Journal Name, Year
              </p>
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
