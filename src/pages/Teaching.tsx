
import Navigation from '../components/Navigation';

const Teaching = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Curriculum Vitae</h1>
        
        {/* Current Position */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Position</h2>
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <h3 className="font-medium text-gray-900">Postdoctoral Research Associate</h3>
            <p className="text-gray-700">Mathematical Sciences Institute, Australian National University</p>
            <p className="text-sm text-gray-600">2020 - Present</p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-medium text-gray-900">Ph.D. in Applied Mathematics</h3>
              <p className="text-gray-700">Australian National University</p>
              <p className="text-sm text-gray-600">2016 - 2020</p>
              <p className="text-sm text-gray-600 italic">Thesis: "Hydromagnetic instabilities of Multi-Region relaxed MHD for fusion plasma confinement"</p>
            </div>
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Teaching Experience</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Co-Lecturer</h3>
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h4 className="font-medium text-gray-900">MATH1014 – Mathematics with Applications II</h4>
              <p className="text-sm text-gray-700">Sequences and Series, Multivariable Calculus, Numerical Optimization</p>
              <p className="text-sm text-gray-600">Spring 2022</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Academic Tutor & Workshop Demonstrator</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-gray-400 pl-4 py-2">
                <h4 className="font-medium text-gray-900">MATH2305 – Applied Mathematics I</h4>
                <p className="text-sm text-gray-600">Semester I 2023, Semester I 2022, Semester I 2020</p>
              </div>
              <div className="border-l-4 border-gray-400 pl-4 py-2">
                <h4 className="font-medium text-gray-900">MATH2306 – Applied Mathematics II</h4>
                <p className="text-sm text-gray-600">Semester II 2022, Semester II 2021</p>
              </div>
              <div className="border-l-4 border-gray-400 pl-4 py-2">
                <h4 className="font-medium text-gray-900">MATH1115 – Advanced Mathematics and Applications I</h4>
                <p className="text-sm text-gray-600">Semester I 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h2>
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Magnetohydrodynamics (MHD)</li>
              <li>Plasma Physics</li>
              <li>Computational Modeling</li>
              <li>Stellarator Physics</li>
              <li>Tokamak Research</li>
              <li>Fusion Energy Research</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
