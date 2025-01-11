import Navigation from '../components/Navigation';

const Conferences = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Conference Presentations</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">Recent Conferences</h3>
                <ul className="space-y-4 text-academic-secondary">
                  <li>
                    <p className="font-semibold">International Conference on Plasma Physics 2023</p>
                    <p>Presentation: "Advanced Methods in Plasma Simulation"</p>
                    <p className="text-sm">Location: Virtual Conference</p>
                  </li>
                  <li>
                    <p className="font-semibold">APS Division of Plasma Physics Meeting 2022</p>
                    <p>Poster: "Novel Approaches to Fusion Research"</p>
                    <p className="text-sm">Location: Pittsburgh, PA</p>
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

export default Conferences;