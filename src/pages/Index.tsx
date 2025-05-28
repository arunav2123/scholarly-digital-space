
import Navigation from '../components/Navigation';
import { Mail, MapPin, Phone, ExternalLink, FileText, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 scale-110" />
                  <img 
                    src="/lovable-uploads/078359ab-8623-42c6-be9d-47dab476a7ff.png" 
                    alt="Dr. Avinash Kumar"
                    className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4 mr-2" />
                    Plasma Physicist & Research Scientist
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Dr. Avinash Kumar
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Postdoctoral Research Associate specializing in Magnetohydrodynamics (MHD), 
                    Plasma Physics, and Computational Modeling with expertise in fusion energy research.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 text-center">
                      <Mail className="w-6 h-6 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-xs text-gray-600">avinash.kumar@anu.edu.au</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-6 h-6 mx-auto mb-2 text-green-600 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-xs text-gray-600">Canberra, Australia</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 text-center">
                      <Users className="w-6 h-6 mx-auto mb-2 text-purple-600 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium">Institution</p>
                      <p className="text-xs text-gray-600">Australian National University</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Interests</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Magnetohydrodynamics",
                  description: "Advanced MHD modeling and computational simulations for plasma confinement",
                  icon: "🌀"
                },
                {
                  title: "Plasma Physics",
                  description: "Theoretical and experimental studies of plasma behavior in fusion environments",
                  icon: "⚡"
                },
                {
                  title: "Fusion Energy",
                  description: "Research on sustainable fusion energy solutions and plasma stability",
                  icon: "🔥"
                },
                {
                  title: "Computational Modeling",
                  description: "High-performance computing applications in plasma physics research",
                  icon: "💻"
                },
                {
                  title: "Stellarator Physics",
                  description: "Optimization and analysis of stellarator magnetic confinement devices",
                  icon: "🌟"
                },
                {
                  title: "Tokamak Research",
                  description: "Investigation of tokamak plasma instabilities and control mechanisms",
                  icon: "🔬"
                }
              ].map((interest, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {interest.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{interest.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Publications</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Sawtooth crash in tokamak as a sequence of Multi-region Relaxed MHD equilibria",
                  authors: "Z. Qu, Y. Zhou, A. Kumar, J. Doak, J. Loizu, M. Hole",
                  journal: "arXiv preprint arXiv:2501.14242",
                  year: "2025",
                  featured: true
                },
                {
                  title: "Macroscopic trends of linear tearing stability in cylindrical current profiles",
                  authors: "S. Benjamin, C. Clauser, C. Rea, R. Sweeney, A. Kumar, E. Marmar",
                  journal: "Plasma Physics and Controlled Fusion 66 (7), 075016",
                  year: "2024",
                  featured: true
                },
                {
                  title: "Direct prediction of nonlinear tearing mode saturation using a variational principle",
                  authors: "J Loizu, YM Huang, SR Hudson, A Baillod, A. Kumar, ZS Qu",
                  journal: "Physics of Plasmas 27 (7)",
                  year: "2020",
                  featured: true
                }
              ].map((pub, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary" className="text-xs">{pub.year}</Badge>
                          {pub.featured && (
                            <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-500">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{pub.authors}</p>
                        <p className="text-sm text-gray-500 italic">{pub.journal}</p>
                      </div>
                      <div className="ml-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/publications" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View All Publications
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Interested in collaboration or have questions about my research? 
              I'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                  <p className="text-gray-300">avinash.kumar@anu.edu.au</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-green-400" />
                  <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
                  <p className="text-gray-300">+61 2 6125 4631</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold mb-2 text-white">Office</h3>
                  <p className="text-gray-300">Mathematical Sciences Institute<br />ANU, Canberra</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
