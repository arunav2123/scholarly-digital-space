
import Navigation from '../components/Navigation';
import { BookOpen, Users, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Teaching = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Academic Excellence
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Teaching Experience
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate about education and mentoring the next generation of scientists and mathematicians
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">The Australian National University</CardTitle>
                    <p className="text-blue-100">Canberra, Australia</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                {/* Co-Lecturer Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Co-Lecturer</h3>
                      <p className="text-gray-600">Leading comprehensive mathematics education</p>
                    </div>
                  </div>
                  
                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-green-800">MATH1014 – Mathematics with Applications II</h4>
                        <Badge className="bg-green-600">Spring 2022</Badge>
                      </div>
                      <p className="text-green-700 font-medium mb-2">Key Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Sequences and Series", "Multivariable Calculus", "Numerical Optimization"].map((topic) => (
                          <Badge key={topic} variant="secondary" className="bg-green-100 text-green-800">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Academic Tutor Section */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Academic Tutor & Workshop Demonstrator</h3>
                      <p className="text-gray-600">Comprehensive tutoring across multiple mathematical disciplines</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Applied Mathematics */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold text-sm">AM</span>
                        </div>
                        Applied Mathematics
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { code: "MATH2305", name: "Applied Mathematics I", semesters: ["Semester I 2023", "Semester I 2022", "Semester I 2020"] },
                          { code: "MATH2306", name: "Applied Mathematics II", semesters: ["Semester II 2022", "Semester II 2021"] },
                          { code: "MATH1014", name: "Applied Mathematics II", semesters: ["Semester I 2023"] }
                        ].map((course) => (
                          <Card key={course.code} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-blue-600 text-lg">{course.code}</h5>
                              <p className="text-gray-700 font-medium mb-3">{course.name}</p>
                              <div className="space-y-1">
                                {course.semesters.map((semester) => (
                                  <div key={semester} className="flex items-center">
                                    <Calendar className="w-3 h-3 text-gray-400 mr-2" />
                                    <span className="text-xs text-gray-600">{semester}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Mathematics & PDEs */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-600 font-bold text-sm">AM</span>
                        </div>
                        Advanced Mathematics & PDEs
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { code: "MATH1115", name: "Advanced Mathematics and Applications I", semester: "Semester I 2022" },
                          { code: "Advanced PDEs", name: "Advanced PDEs Course", semester: "Shandong University, China (in collaboration with MSI)" }
                        ].map((course) => (
                          <Card key={course.code} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-purple-600 text-lg">{course.code}</h5>
                              <p className="text-gray-700 font-medium mb-3">{course.name}</p>
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 text-gray-400 mr-2" />
                                <span className="text-xs text-gray-600">{course.semester}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Computational & Numerical Methods */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-emerald-600 font-bold text-sm">CN</span>
                        </div>
                        Computational & Numerical Methods
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { code: "MATH3511", name: "Scientific Computing", semester: "Semester I 2021" },
                          { code: "MATH3514", name: "Numerical Optimization", semester: "Semester II 2020" }
                        ].map((course) => (
                          <Card key={course.code} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-emerald-600 text-lg">{course.code}</h5>
                              <p className="text-gray-700 font-medium mb-3">{course.name}</p>
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 text-gray-400 mr-2" />
                                <span className="text-xs text-gray-600">{semester}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Bridging & Workshop Courses */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-bold text-sm">BW</span>
                        </div>
                        Bridging & Workshop Courses
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { code: "Advanced MATH1115", name: "Bridging Course Module 3", semester: "Feb 2022, Feb 2021" },
                          { code: "MATH1013", name: "Mathematics and Applications I", semester: "Semester II 2019" }
                        ].map((course) => (
                          <Card key={course.code} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-4">
                              <h5 className="font-semibold text-orange-600 text-lg">{course.code}</h5>
                              <p className="text-gray-700 font-medium mb-3">{course.name}</p>
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 text-gray-400 mr-2" />
                                <span className="text-xs text-gray-600">{course.semester}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
