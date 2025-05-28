
import Navigation from '../components/Navigation';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Teaching = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Teaching Experience</h1>
            
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-gray-900">The Australian National University</CardTitle>
                <p className="text-gray-600">Canberra, Australia</p>
              </CardHeader>

              <CardContent className="p-8">
                {/* Co-Lecturer Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Co-Lecturer</h3>
                  
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">MATH1014 – Mathematics with Applications II</h4>
                      <span className="text-sm text-gray-600">Spring 2022</span>
                    </div>
                    <p className="text-gray-700">Sequences and Series, Multivariable Calculus, Numerical Optimization</p>
                  </div>
                </div>

                {/* Academic Tutor Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Tutor & Workshop Demonstrator</h3>

                  <div className="space-y-8">
                    {/* Applied Mathematics */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Applied Mathematics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { code: "MATH2305", name: "Applied Mathematics I", semesters: ["Semester I 2023", "Semester I 2022", "Semester I 2020"] },
                          { code: "MATH2306", name: "Applied Mathematics II", semesters: ["Semester II 2022", "Semester II 2021"] },
                          { code: "MATH1014", name: "Applied Mathematics II", semesters: ["Semester I 2023"] }
                        ].map((course) => (
                          <div key={course.code} className="p-4 border border-gray-200 rounded-lg">
                            <h5 className="font-semibold text-gray-900">{course.code}</h5>
                            <p className="text-gray-700 mb-3">{course.name}</p>
                            <div className="space-y-1">
                              {course.semesters.map((semester) => (
                                <div key={semester} className="flex items-center">
                                  <Calendar className="w-3 h-3 text-gray-400 mr-2" />
                                  <span className="text-xs text-gray-600">{semester}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Mathematics & PDEs */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Advanced Mathematics & PDEs</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { code: "MATH1115", name: "Advanced Mathematics and Applications I", semester: "Semester I 2022" },
                          { code: "Advanced PDEs", name: "Advanced PDEs Course", semester: "Shandong University, China" }
                        ].map((course) => (
                          <div key={course.code} className="p-4 border border-gray-200 rounded-lg">
                            <h5 className="font-semibold text-gray-900">{course.code}</h5>
                            <p className="text-gray-700 mb-3">{course.name}</p>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 text-gray-400 mr-2" />
                              <span className="text-xs text-gray-600">{course.semester}</span>
                            </div>
                          </div>
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
