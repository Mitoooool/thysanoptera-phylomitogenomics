import React from 'react';
import { 
  Home, 
  Database, 
  Dna, 
  GitBranch, 
  CircleDashed, 
  Menu,
  Atom
} from 'lucide-react';
import { motion } from 'motion/react';

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const MAIN_NAV: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'dataset', label: 'Dataset', icon: Database },
  { id: 'gene-order', label: 'Gene Orders', icon: Dna },
  { id: 'phylogeny', label: 'Phylogeny', icon: GitBranch },
  { id: 'rrna-12s', label: '12S rRNA', icon: CircleDashed },
  { id: 'atp8', label: 'ATP8', icon: Atom },
];

interface SidebarProps {
  currentView: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ currentView, onNavigate, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="md:hidden fixed z-50 top-4 right-4 p-2 bg-ocean-900 border border-ocean-800 rounded-lg text-slate-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 shrink-0 h-screen w-64 bg-ocean-950/80 backdrop-blur-md border-r border-ocean-800 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6">
          <div className="font-display font-medium text-xl leading-tight mb-2 tracking-wide text-white">
            Thysanoptera <br />
            <span className="text-cyan-vivid/90 font-light">Phylomitogenomics</span>
          </div>
          <div className="font-mono text-xs text-slate-500 uppercase tracking-widest pt-1 border-t border-ocean-800/50">
            Release 1.0
          </div>
        </div>

        <nav className="flex-1 px-4 pb-4 overflow-y-auto space-y-1">
          <div className="mb-6">
            <div className="px-3 mb-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              Navigation
            </div>
            {MAIN_NAV.map((item) => {
              const isActive = currentView === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-cyan-vivid/10 text-cyan-vivid shadow-[inset_2px_0_0_var(--color-cyan-vivid)]' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-ocean-900/50'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'opacity-100' : 'opacity-60'} strokeWidth={isActive ? 2.5 : 2} />
                  {item.label}
                </button>
              );
            })}
          </div>

        </nav>

        <div className="p-4 border-t border-ocean-800">
          <p className="text-[10px] text-slate-500 font-mono leading-relaxed">
            Maintained by Niu G Lab<br/>
            Mitoooool resource page<br/>
            Release 1.0
          </p>
        </div>
      </aside>
    </>
  );
}
