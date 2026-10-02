import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PlantsPage } from './pages/PlantsPage';
import { PlantDetailPage } from './pages/PlantDetailPage';
import { HikesPage } from './pages/HikesPage';
import { HikeDetailPage } from './pages/HikeDetailPage';
import { LearnPage } from './pages/LearnPage';
import { CommunityPage } from './pages/CommunityPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#2E7D32]/20 selection:text-[#1B5E20]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plantas" element={<PlantsPage />} />
            <Route path="/plantas/:id" element={<PlantDetailPage />} />
            <Route path="/caminatas" element={<HikesPage />} />
            <Route path="/caminatas/:id" element={<HikeDetailPage />} />
            <Route path="/explora" element={<Home />} />
            <Route path="/aprende" element={<LearnPage />} />
            <Route path="/comunidad" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
