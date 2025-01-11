import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Teaching from './pages/Teaching';
import Conferences from './pages/Conferences';
import Codes from './pages/Codes';

function App() {
  return (
    <Router basename="/scholarly-digital-space">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/codes" element={<Codes />} />
      </Routes>
    </Router>
  );
}

export default App;