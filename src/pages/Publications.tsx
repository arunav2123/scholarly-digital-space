import Navigation from '../components/Navigation';

const Publications = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Publications</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">List your research publications here...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;

