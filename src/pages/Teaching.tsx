import Navigation from '../components/Navigation';

const Teaching = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Teaching Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div className="card p-6 bg-gray-100 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4"> The Australian National University, Canberra, Australia </h3>

                {/* Co-Lecturer Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Co-Lecturer</h4>
                  <p><strong>MATH1014 – Spring 2022</strong> – Mathematics with Applications II</p>
                  <p className="text-sm text-gray-600">
                    Topics: Sequences and series, multivariable calculus, numerical optimization
                  </p>
                </div>

                {/* Academic Tutor & Demonstrator Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Academic Tutor & Workshop Demonstrator</h4>

                  {/* Applied Mathematics Courses */}
                  <div className="mb-4">
                    <h5 className="text-md font-semibold">Applied Mathematics</h5>
                    <ul className="list-disc list-inside text-academic-secondary ml-4">
                      <li><strong>MATH2305</strong> – Applied Mathematics I 
                        <span className="text-gray-500"> (Semester I 2023, Semester I 2022, Semester I 2020)</span>
                      </li>
                      <li><strong>MATH2306</strong> – Applied Mathematics II 
                        <span className="text-gray-500"> (Semester II 2022, Semester II 2021)</span>
                      </li>
                      <li><strong>MATH1014</strong> – Applied Mathematics II 
                        <span className="text-gray-500"> (Semester I 2023)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Advanced Mathematics & PDEs */}
                  <div className="mb-4">
                    <h5 className="text-md font-semibold">Advanced Mathematics & PDEs</h5>
                    <ul className="list-disc list-inside text-academic-secondary ml-4">
                      <li><strong>MATH1115</strong> – Advanced Mathematics and Applications I 
                        <span className="text-gray-500"> (Semester I 2022)</span>
                      </li>
                      <li><strong>Advanced PDEs Course</strong> – Shandong University, China 
                        <span className="text-gray-500"> (in collaboration with MSI)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Computational & Numerical Methods */}
                  <div className="mb-4">
                    <h5 className="text-md font-semibold">Computational & Numerical Methods</h5>
                    <ul className="list-disc list-inside text-academic-secondary ml-4">
                      <li><strong>MATH3511</strong> – Scientific Computing <span className="text-gray-500">(Semester I 2021)</span></li>
                      <li><strong>MATH3514</strong> – Numerical Optimization <span className="text-gray-500">(Semester II 2020)</span></li>
                    </ul>
                  </div>

                  {/* Bridging & Workshop Courses */}
                  <div className="mb-4">
                    <h5 className="text-md font-semibold">Bridging & Workshop Courses</h5>
                    <ul className="list-disc list-inside text-academic-secondary ml-4">
                      <li><strong>Advanced MATH1115</strong> – Bridging Course Module 3 
                        <span className="text-gray-500"> (Feb 2022, Feb 2021)</span>
                      </li>
                      <li><strong>MATH1013</strong> – Mathematics and Applications I 
                        <span className="text-gray-500"> (Semester II 2019)</span>
                      </li>
                    </ul>
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

export default Teaching;
