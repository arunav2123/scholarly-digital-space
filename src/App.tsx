import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Publications from './pages/Publications';

function App() {
  return (
    <Router basename="/scholarly-digital-space">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
}

export default App;