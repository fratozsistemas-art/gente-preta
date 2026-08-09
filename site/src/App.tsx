import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HealthLibrary from './pages/HealthLibrary';
import DiseaseDetail from './pages/DiseaseDetail';
import ClinicalTrials from './pages/ClinicalTrials';
import Memory from './pages/Memory';
import Community from './pages/Community';
import SusNetwork from './pages/SusNetwork';
import Transparency from './pages/Transparency';
import AppAccess from './pages/AppAccess';
import Architecture from './pages/Architecture';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-earth-800">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/saude" element={<HealthLibrary />} />
          <Route path="/saude/:categoryId/:diseaseId" element={<DiseaseDetail />} />
          <Route path="/ensaios-clinicos" element={<ClinicalTrials />} />
          <Route path="/memoria" element={<Memory />} />
          <Route path="/comunidade" element={<Community />} />
          <Route path="/rede-sus" element={<SusNetwork />} />
          <Route path="/transparencia" element={<Transparency />} />
          <Route path="/arquitetura" element={<Architecture />} />
          <Route path="/app" element={<AppAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
