import React from 'react';
import Navigation from '../components/Navigation';

const Conferences = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Scientific Conferences & Seminars</h2>
          <div className="max-w-4xl mx-auto">
            
            {/* Invited Talks and Seminars */}
            <h3 className="text-xl font-semibold mb-4">Invited Talks and Seminars</h3>
            <ul className="list-disc list-inside text-academic-secondary mb-8">
              <li className="mb-4">
                <strong>Hydromagnetic instabilities and spectrum of Multi-Region relaxed Magneto hydrodynamics</strong>
                <br />
                <span className="text-gray-600">
                  Research Seminar, Theory Department, Princeton Plasma Physics Laboratory, Princeton, USA <br />
                  <span className="italic">14th March, 2023</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Hydromagnetic instabilities within Multi-Region relaxed MHD plasmas</strong>
                <br />
                <span className="text-gray-600">
                  School of Physical and Mathematical Sciences - Division of Physics and Applied Physics, Nanyang Technological University, Singapore
                </span>
              </li>

              <li className="mb-4">
                <strong>Nature of linear instabilities within Multi-Region relaxed MHD</strong>
                <br />
                <span className="text-gray-600">
                  W7-X TG meeting, Max-Planck Institute of Plasma Physics, Greifswald, Germany <br />
                  <span className="italic">18th May, 2022</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Normal mode spectrum of Multi-region relaxed Magnetohydrodynamics</strong>
                <br />
                <span className="text-gray-600">
                  5th Asia-Pacific Conference of Plasma Physics (AAPPS-DPP), Osaka, Japan <br />
                  <span className="italic">Oct 2021</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>SPEC as non-axisymmetric (3D) linear MHD stability code</strong>
                <br />
                <span className="text-gray-600">
                  2nd Hidden Symmetries and Fusion Energy Annual Team Meeting Seminar, Princeton University, USA <br />
                  <span className="italic">Aug 2020</span>
                </span>
              </li>
            </ul>

            {/* Oral/Contributed Talks */}
            <h3 className="text-xl font-semibold mb-4">Oral/Contributed Talks</h3>
            <ul className="list-disc list-inside text-academic-secondary">
              <li className="mb-4">
                <strong>Theory and computation of normal mode spectra of multi-region relaxed MHD</strong>
                <br />
                <span className="text-gray-600">
                  27th meeting of International Tokamak Physics Activity (ITPA) tropical group of energetic particle physics (online/in-person conference) <br />
                  <span className="italic">May 5, 2022</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Normal mode spectrum of Multi-Region relaxed Magnetohydrodynamics</strong>
                <br />
                <span className="text-gray-600">
                  Australian and New Zealand Industrial and Applied Mathematics (ANZIAM) conference (online/in-person conference) <br />
                  <span className="italic">Feb 9, 2022</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Normal mode spectrum of Multi-Region relaxed Magnetohydrodynamics</strong>
                <br />
                <span className="text-gray-600">
                  63rd Annual Meeting of American Physical Society, Division of Plasma Physics (APS-DPP) <br />
                  <a href="http://meetings.aps.org/Meeting/DPP21/Session/PO07.5" className="text-blue-600 underline">Session PO07.5</a>, <span className="italic">Nov 11, 2021</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Modelling sawteeth in tokamak plasma as a sequence of Multi-region Relaxed MHD equilibria</strong>
                <br />
                <span className="text-gray-600">
                  63rd Annual Meeting of American Physical Society, Division of Plasma Physics (APS-DPP) <br />
                  <a href="http://meetings.aps.org/Meeting/DPP21/Session/PO07.6" className="text-blue-600 underline">Session PO07.6</a>, <span className="italic">Nov 2021</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Prediction of nonlinearly saturated tearing mode islands with an equilibrium code</strong>
                <br />
                <span className="text-gray-600">
                  63rd Annual Meeting of American Physical Society, Division of Plasma Physics (APS-DPP) <br />
                  <a href="http://meetings.aps.org/Meeting/DPP21/Session/PO07.4" className="text-blue-600 underline">Session PO07.4</a>, <span className="italic">Nov 11, 2021</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Exact prediction of linear stability of Multi-Region relaxed MHD energy principle</strong>
                <br />
                <span className="text-gray-600">
                  62nd Annual Meeting of American Physical Society, Division of Plasma Physics (APS-DPP) <br />
                  <a href="https://meetings.aps.org/Meeting/DPP20/Session/CO08.7" className="text-blue-600 underline">Session CO08.7</a>, <span className="italic">Nov 2020</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Prediction of linear stability of Multi-region relaxed MHD energy principle</strong>
                <br />
                <span className="text-gray-600">
                  4th Asia-Pacific Conference of Plasma Physics, (AAPPS-DPP) <br />
                  <a href="http://aappsdpp.org/DPP2020/pdf/F-O11.pdf" className="text-blue-600 underline">PDF Link</a>, <span className="italic">Oct 2020</span>
                </span>
              </li>

              <li className="mb-4">
                <strong>Hessian approach for linear stability in Quasi-helical MRxMHD cylindrical equilibria</strong>
                <br />
                <span className="text-gray-600">
                  Workshop on application of computational plasma physics, Australian National University, Australia <br />
                  <span className="italic">June 2019</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conferences;
