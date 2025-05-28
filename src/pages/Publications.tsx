import Navigation from '../components/Navigation';
import { FileText, ExternalLink, Users, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Publications = () => {
  const publications = [
    {
      title: "Sawtooth crash in tokamak as a sequence of Multi-region Relaxed MHD equilibria",
      authors: "Z. Qu, Y. Zhou, A. Kumar, J. Doak, J. Loizu, M. Hole",
      journal: "arXiv preprint arXiv:2501.14242",
      year: "2025",
      featured: true,
      category: "Preprint"
    },
    {
      title: "Macroscopic trends of linear tearing stability in cylindrical current profiles",
      authors: "S. Benjamin, C. Clauser, C. Rea, R. Sweeney, A. Kumar, E. Marmar",
      journal: "Plasma Physics and Controlled Fusion 66 (7), 075016",
      year: "2024",
      featured: true,
      category: "Journal Article"
    },
    {
      title: "Direct prediction of nonlinear tearing mode saturation using a variational principle",
      authors: "J Loizu, YM Huang, SR Hudson, A Baillod, A. Kumar, ZS Qu",
      journal: "Physics of Plasmas 27 (7)",
      year: "2020"
    },
    {
      title: "Model for current drive induced crash cycles in W7-X",
      authors: "K Aleynikova, SR Hudson, P Helander, A. Kumar, J Geiger, M Hirsch, ...",
      journal: "Nuclear Fusion 61 (12), 126040",
      year: "2020"
    },
    {
      title: "Computation of linear MHD instabilities with the multi-region relaxed MHD energy principle",
      authors: "<strong className=\"text-blue-600\">A. Kumar</strong>, Z Qu, MJ Hole, AM Wright, J Loizu, SR Hudson, A Baillod, ...",
      journal: "Plasma Physics and Controlled Fusion 63 (4), 045006",
      year: "2020"
    },
    {
      title: "Computation of multi-region, relaxed magnetohydrodynamic equilibria with prescribed toroidal current profile",
      authors: "A Baillod, J Loizu, ZS Qu, <strong className=\"text-blue-600\">A. Kumar</strong>, JP Graves",
      journal: "Journal of Plasma Physics 87 (4), 905870403",
      year: "2020"
    },
    {
      title: "Overview of the first Wendelstein 7-X long pulse campaign with fully water-cooled plasma facing components",
      authors: "O Grulke, C Albert, JAA Belloso, P Aleynikov, K Aleynikova, A Alonso, <strong className=\"text-blue-600\">A. Kumar</strong>, ...",
      journal: "Nuclear Fusion 64 (11), 112002",
      year: "2020"
    },
    {
      title: "Nature of ideal MHD instabilities as described by multi-region relaxed MHD",
      authors: "<strong className=\"text-blue-600\">A. Kumar</strong>, C Nührenberg, Z Qu, MJ Hole, J Doak, RL Dewar, SR Hudson, ...",
      journal: "Plasma Physics and Controlled Fusion 64 (6), 065001",
      year: "2020"
    },
    {
      title: "Macroscopic trends of linear tearing stability in cylindrical current profiles",
      authors: "S Benjamin, C Clause, C Rea, R Sweeney, <strong className=\"text-blue-600\">A. Kumar</strong>, E Marmar",
      journal: "Plasma Physics and Controlled Fusion 66 (7), 075016",
      year: "2024"
    },
    {
      title: "On the relationship between the multi-region relaxed variational principle and resistive inner-layer theory",
      authors: "<strong className=\"text-blue-600\">A. Kumar</strong>, J Loizu, MJ Hole, ZS Qu, SR Hudson, RL Dewar",
      journal: "Plasma Physics and Controlled Fusion 65 (7), 075004",
      year: "2020"
    },
    {
      title: "Hydromagnetic instabilities of Multi-Region relaxed MHD for fusion plasma confinement",
      authors: "<strong className=\"text-blue-600\">A. Kumar</strong>",
      journal: "The Australian National University, Australia",
      year: "2020"
    },
    {
      title: "Experimental confirmation of efficient island divertor operation and successful neoclassical transport optimization in Wendelstein 7-X",
      authors: "TS Pedersen, I Abramovic, P Agostinetti, MA Torres, S Äkäslompolo, <strong className=\"text-blue-600\">A. Kumar</strong>, ...",
      journal: "Nuclear Fusion 62 (4), 042022",
      year: "2020"
    },
    {
      title: "Nature of ideal MHD instabilities as described by multi-region relaxed MHD",
      authors: "<strong className=\"text-blue-600\">A. Kumar</strong>, C Nührenberg, Z Qu, MJ Hole, J Doak, RL Dewar, SR Hudson, ...",
      journal: "Plasma Physics and Controlled Fusion 64 (6), 065001",
      year: "2020"
    },
    {
      title: "Computation of multi-region, relaxed magnetohydrodynamic equilibria with prescribed toroidal current profile",
      authors: "A Baillod, J Loizu, ZS Qu, <strong className=\"text-blue-600\">A. Kumar</strong>, JP Graves",
      journal: "Journal of Plasma Physics 87 (4), 905870403",
      year: "2020"
    },
    {
      title: "Computation of linear MHD instabilities with the multi-region relaxed MHD energy principle",
      authors: "<strong className=\"text-blue-600\">A. Kumar</strong>, Z Qu, MJ Hole, AM Wright, J Loizu, SR Hudson, A Baillod, ...",
      journal: "Plasma Physics and Controlled Fusion 63 (4), 045006",
      year: "2020"
    },
    {
      title: "Coordinate parameterisation and spectral method optimisation for Beltrami field solver in stellarator geometry",
      authors: "ZS Qu, D Pfefferlé, SR Hudson, A Baillod, <strong className=\"text-blue-600\">A. Kumar</strong>, RL Dewar, MJ Hole",
      journal: "Plasma Physics and Controlled Fusion 62 (12), 124004",
      year: "2020"
    },
    {
      title: "Direct prediction of nonlinear tearing mode saturation using a variational principle",
      authors: "J Loizu, YM Huang, SR Hudson, A Baillod, <strong className=\"text-blue-600\">A. Kumar</strong>, ZS Qu",
      journal: "Physics of Plasmas 27 (7)",
      year: "2020"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Research Publications
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Publications
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Peer-reviewed research contributions to plasma physics and magnetohydrodynamics
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="text-xs font-medium">{pub.year}</Badge>
                          {pub.featured && (
                            <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-500">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-4 h-4 text-gray-400" />
                          <p className="text-gray-600 text-sm">{pub.authors}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <p className="text-sm text-gray-500 italic">{pub.journal}</p>
                        </div>
                      </div>
                      <div className="ml-8 flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileText className="w-8 h-8 text-blue-600" />
                        </div>
                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                          <ExternalLink className="w-3 h-3" />
                          View
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
