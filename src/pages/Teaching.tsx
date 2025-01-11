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
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">Mathematical Sciences Institute, ANU</h3>
                <ul className="list-disc list-inside mt-4 text-academic-secondary">
                  <li><strong>Tutor</strong> - Semester I 2023: MATH1014 & MATH2305 (till 20.04.2023)</li>
                  <li><strong>Co-lecturer</strong> - MATH1014 Spring Course 2022 - Mathematics with Applications II: sequences and series, multivariable calculus, numerical optimization</li>
                  <li><strong>Tutor and Workshop Demonstrator</strong>:
                    <ul className="list-decimal list-inside ml-4">
                      <li>MATH2306 - Semester II 2022 - Applied Mathematics II</li>
                      <li>MATH1115 - Semester I 2022 - Advanced Mathematics and Applications I</li>
                      <li>MATH2305 - Semester I 2022 - Applied Mathematics I</li>
                      <li>Bridging Course Module 3 - Advanced MATH1115, Feb 2022</li>
                      <li>Advanced PDEs Course (Shandong University, China in collaboration with MSI)</li>
                      <li>MATH2306 - Semester II 2021 - Applied Mathematics II</li>
                      <li>MATH3511 - Semester I 2021 - Scientific Computing</li>
                      <li>Bridging Course Module 3 - Advanced MATH1115, Feb 2021</li>
                      <li>MATH3514 - Semester II 2020 - Numerical Optimization</li>
                      <li>MATH2305 - Semester I 2020 - Applied Mathematics I</li>
                      <li>MATH1013 - Semester II 2019 - Mathematics and Applications I</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
