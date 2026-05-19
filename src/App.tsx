import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { HomeView } from './components/HomeView';
import { DatasetsView } from './components/DatasetsView';
import { GeneOrderView } from './components/GeneOrderView';
import { PhylogenyView } from './components/PhylogenyView';
import { MtGenomesView } from './components/MtGenomesView';
import { TimeTreeView } from './components/TimeTreeView';

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Map route path to sidebar ID
  const currentView = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const handleNavigate = (id: string) => {
    navigate(id === 'home' ? '/' : `/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-ocean-950 selection:bg-cyan-vivid/30 selection:text-cyan-vivid font-sans">
      <Sidebar 
        currentView={currentView} 
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 w-full relative">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-ocean-900/50 to-transparent pointer-events-none z-0"></div>
        
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 lg:px-24 mx-auto max-w-7xl min-h-screen">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/dataset" element={<DatasetsView />} />
            <Route path="/gene-order" element={<GeneOrderView />} />
            <Route path="/phylogeny" element={<PhylogenyView />} />
            <Route path="/rrna-12s" element={<MtGenomesView />} />
            <Route path="/atp8" element={<TimeTreeView />} />
            <Route path="*" element={<HomeView />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}
