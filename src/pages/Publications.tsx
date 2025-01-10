import { Github } from 'lucide-react';

const Publications = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-academic-primary">Publications</h1>
        
        <div className="mb-6">
          <p className="text-academic-secondary mb-4">
            Updated list of publications are also available on Google Scholar:{' '}
            <a 
              href="https://scholar.google.com.au/citations?hl=en&user=pqxB8RcAAAAJ"
              className="text-academic-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar Profile
            </a>
          </p>
          <p className="text-academic-secondary mb-8">
            ORCID ID:{' '}
            <a 
              href="https://orcid.org/0000-0001-8678-4552"
              className="text-academic-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://orcid.org/0000-0001-8678-4552
            </a>
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-academic-primary">First Author Publications</h2>
            <ol className="list-decimal list-outside ml-6 space-y-4">
              <li className="text-academic-secondary">
                <span className="font-semibold">A. Kumar</span>, C.Nuhnerberg, D.Spong, R.L.Dewar, M.J Hole, Z. Qu, J. Loizu, S.R Hudson,
                <em className="block mt-1">Computation of relaxed MHD spectrum using SPEC code in non-axisymmetric geometries</em>
                (paper in preparation, 2022)
              </li>
              <li className="text-academic-secondary">
                <span className="font-semibold">A. Kumar</span>, J. Loizu, M.J Hole, Z.Qu, S. R Hudson and R.L.Dewar,
                <em className="block mt-1">On the relationship between the multi-region relaxed variational principle and resistive inner layer theory</em>,
                2023 Plasma Phys. Control. Fusion 65 075004
                <div className="text-sm mt-1">DOI: <a href="https://doi.org/10.1088/1361-6587/acc96e" className="text-academic-primary hover:underline">https://doi.org/10.1088/1361-6587/acc96e</a></div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-academic-primary">Co-author Publications</h2>
            <ol className="list-decimal list-outside ml-6 space-y-4">
              <li className="text-academic-secondary">
                S Benjamin, C Clauser, C Rea, R Sweeney, <span className="font-semibold">A. Kumar</span>, F. Marmar
                <em className="block mt-1">Macroscopic trends of linear tearing stability in cylindrical current profiles</em>
              </li>
              <li className="text-academic-secondary">
                K. Aleynikova, S. R. Hudson, P. Helander, <span className="font-semibold">A. Kumar</span>, J.Geiger, J. Loizu, C. Nührenberg, K. Rahbarnia, Z. Qu, Y. Gao, H. Thomsen, Y. Turkin and W7-X team,
                <em className="block mt-1">Model for current drive induced crash cycles in W7-X</em>,
                Nuclear Fusion 61(2021) 126040, DOI: <a href="https://doi.org/10.1088/1741-4326/ac2ab9" className="text-academic-primary hover:underline">10.1088/1741-4326/ac2ab9</a>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publications;