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
                <h3 className="text-xl font-semibold mb-2">Teaching Assistant</h3>
                <p className="text-academic-secondary">
                  Massachusetts Institute of Technology
                </p>
                <ul className="list-disc list-inside mt-4 text-academic-secondary">
                  <li>Course 1: Advanced Plasma Physics (Spring 2023)</li>
                  <li>Course 2: Computational Methods in Physics (Fall 2022)</li>
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