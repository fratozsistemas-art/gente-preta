import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HealthLibrary from './pages/HealthLibrary';
import DiseaseDetail from './pages/DiseaseDetail';
import BibliotecaSaude from './pages/BibliotecaSaude';
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
          {/* Biblioteca de Saúde — pacote CASIO v10.0 (v4.2), 10 categorias + busca/filtros */}
          <Route path="/biblioteca-saude" element={<BibliotecaSaude />} />
          <Route path="/biblioteca" element={<Navigate to="/biblioteca-saude" replace />} />
          <Route path="/ensaios-clinicos" element={<ClinicalTrials />} />
          <Route path="/ensaios" element={<Navigate to="/ensaios-clinicos" replace />} />
          <Route path="/memoria" element={<Memory />} />
          <Route path="/comunidade" element={<Community />} />
          <Route path="/rede-sus" element={<SusNetwork />} />
          <Route path="/transparencia" element={<Transparency />} />
          <Route path="/arquitetura" element={<Architecture />} />
          <Route path="/acessar-app" element={<AppAccess />} />
          {/* Baixe o App Sentinela — alias canônico do pacote v4.2 */}
          <Route path="/baixar" element={<AppAccess />} />
          <Route path="/baixe-o-app" element={<Navigate to="/baixar" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
