
import Navigation from '../components/Navigation';
import { Mail, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <img 
                  src="/lovable-uploads/078359ab-8623-42c6-be9d-47dab476a7ff.png" 
                  alt="Dr. Arunav Kumar"
                  className="w-64 h-64 object-cover rounded-lg shadow-sm"
                />
              </div>

              {/* Profile Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-gray-900">
                    Dr. Arunav Kumar
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Postdoctoral Research Associate specializing in Magnetohydrodynamics (MHD), 
                    Plasma Physics, and Computational Modeling with expertise in fusion energy research.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">arunav.kumar@anu.edu.au</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Canberra, Australia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Australian National University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Research Interests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Magnetohydrodynamics",
                "Plasma Physics", 
                "Fusion Energy",
                "Computational Modeling",
                "Stellarator Physics",
                "Tokamak Research"
              ].map((interest, index) => (
                <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">{interest}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Recent Publications</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Sawtooth crash in tokamak as a sequence of Multi-region Relaxed MHD equilibria",
                  authors: "Z. Qu, Y. Zhou, A. Kumar, J. Doak, J. Loizu, M. Hole",
                  journal: "arXiv preprint arXiv:2501.14242",
                  year: "2025"
                },
                {
                  title: "Macroscopic trends of linear tearing stability in cylindrical current profiles",
                  authors: "S. Benjamin, C. Clauser, C. Rea, R. Sweeney, A. Kumar, E. Marmar",
                  journal: "Plasma Physics and Controlled Fusion 66 (7), 075016",
                  year: "2024"
                }
              ].map((pub, index) => (
                <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600">{pub.authors}</p>
                    <p className="text-sm text-gray-500">{pub.journal} ({pub.year})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">arunav.kumar@anu.edu.au</p>
              <p className="text-gray-600">Mathematical Sciences Institute</p>
              <p className="text-gray-600">Australian National University, Canberra</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
