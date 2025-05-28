
import Navigation from '../components/Navigation';
import { Github, Code, Star, GitFork, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Codes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Open Source Contributions
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Research Codes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Computational tools and libraries for plasma physics research and MHD simulations
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SPEC Code */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Github className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">SPEC Code</CardTitle>
                        <p className="text-blue-100 text-sm">Stellarator Equilibrium & Stability</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-blue-500/20 text-blue-100">Fortran</Badge>
                      <Badge className="bg-blue-500/20 text-blue-100">MHD</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A specialized computational framework for computing multi-region relaxed MHD equilibria in stellarator geometries. 
                    Features advanced algorithms for plasma stability analysis and magnetic confinement optimization.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Stars</span>
                      </div>
                      <span className="text-sm text-gray-600">45</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Forks</span>
                      </div>
                      <span className="text-sm text-gray-600">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Downloads</span>
                      </div>
                      <span className="text-sm text-gray-600">1.2k</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/SPEC-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      Repository
                    </a>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Plasma Analysis Tools */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">Plasma Analysis Tools</CardTitle>
                        <p className="text-purple-100 text-sm">Data Analysis & Visualization</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-purple-500/20 text-purple-100">Python</Badge>
                      <Badge className="bg-purple-500/20 text-purple-100">NumPy</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive Python library for plasma physics data analysis, visualization, and post-processing. 
                    Includes tools for MHD stability analysis, equilibrium reconstruction, and diagnostic data processing.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Stars</span>
                      </div>
                      <span className="text-sm text-gray-600">23</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Forks</span>
                      </div>
                      <span className="text-sm text-gray-600">8</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Downloads</span>
                      </div>
                      <span className="text-sm text-gray-600">856</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      <Github className="mr-2 w-4 h-4" />
                      Repository
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* MHD Solver Suite */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">MHD Solver Suite</CardTitle>
                        <p className="text-green-100 text-sm">Numerical Methods & Algorithms</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-500/20 text-green-100">C++</Badge>
                      <Badge className="bg-green-500/20 text-green-100">OpenMP</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    High-performance numerical solvers for magnetohydrodynamic equations with support for parallel computing. 
                    Optimized algorithms for large-scale plasma simulations and stability analysis.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Stars</span>
                      </div>
                      <span className="text-sm text-gray-600">67</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Forks</span>
                      </div>
                      <span className="text-sm text-gray-600">15</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Downloads</span>
                      </div>
                      <span className="text-sm text-gray-600">2.1k</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      <Github className="mr-2 w-4 h-4" />
                      Repository
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Tokamak Diagnostics */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Github className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">Tokamak Diagnostics</CardTitle>
                        <p className="text-orange-100 text-sm">Real-time Data Processing</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-orange-500/20 text-orange-100">MATLAB</Badge>
                      <Badge className="bg-orange-500/20 text-orange-100">Signal</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Real-time diagnostic tools for tokamak plasma monitoring and control. Features advanced signal processing 
                    algorithms for magnetic diagnostics and plasma parameter estimation.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Stars</span>
                      </div>
                      <span className="text-sm text-gray-600">31</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Forks</span>
                      </div>
                      <span className="text-sm text-gray-600">6</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Downloads</span>
                      </div>
                      <span className="text-sm text-gray-600">743</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      <Github className="mr-2 w-4 h-4" />
                      Repository
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Codes;
