import React from 'react';
import { motion } from 'motion/react';
import { Download, Table, ExternalLink } from 'lucide-react';

interface DataViewProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export function DataView({ title, description, icon: Icon }: DataViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl"
    >
      <header className="mb-10 flex items-center gap-4">
        <div className="p-3 bg-ocean-900 border border-ocean-800 rounded-xl text-cyan-vivid shadow-[0_0_20px_rgba(12,235,207,0.1)]">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-2">
            {title}
          </h1>
          <p className="text-slate-400 font-light max-w-2xl">
            {description}
          </p>
        </div>
      </header>

      {/* Mock Data Table Section */}
      <div className="bg-ocean-950/80 backdrop-blur-md border border-ocean-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-ocean-800 flex justify-between items-center bg-ocean-900/40">
          <h3 className="font-medium text-slate-200 flex items-center gap-2">
            <Table size={18} className="text-slate-400" />
            Available Data Sets
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-ocean-800 hover:bg-ocean-700 text-cyan-vivid text-sm font-medium rounded-lg transition-colors border border-ocean-700 hover:border-cyan-vivid/30">
            <Download size={16} />
            Download All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="text-xs text-slate-500 uppercase bg-ocean-950 font-mono tracking-wider border-b border-ocean-800">
              <tr>
                <th className="px-6 py-4 font-medium">Dataset Name</th>
                <th className="px-6 py-4 font-medium">Format</th>
                <th className="px-6 py-4 font-medium">Size</th>
                <th className="px-6 py-4 font-medium">Last Updated</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {[
                { name: 'Aligned Mitogenomes (FASTA)', format: '.fasta', size: '2.4 MB', date: 'Oct 12, 2023' },
                { name: 'Phylogenetic Tree Data', format: '.nex', size: '1.1 MB', date: 'Oct 15, 2023' },
                { name: 'Gene Annotations', format: '.gff', size: '840 KB', date: 'Sep 28, 2023' },
                { name: 'Supplementary Information', format: '.pdf', size: '4.2 MB', date: 'Nov 02, 2023' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-ocean-900/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-200">{row.name}</td>
                  <td className="px-6 py-4 font-mono text-cyan-vivid/80">{row.format}</td>
                  <td className="px-6 py-4 text-slate-400">{row.size}</td>
                  <td className="px-6 py-4 text-slate-400">{row.date}</td>
                  <td className="px-6 py-4 justify-end flex gap-3">
                     <button className="text-slate-400 hover:text-cyan-vivid transition-colors" title="View details">
                       <ExternalLink size={18} />
                     </button>
                     <button className="text-slate-400 hover:text-cyan-vivid transition-colors" title="Download file">
                       <Download size={18} />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Decorative visualization placeholder */}
      {title === "Phylogeny" || title === "Time Tree" ? (
        <div className="mt-8 bg-ocean-900/20 border border-ocean-800/50 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center text-slate-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-vivid/5 to-transparent -translate-x-full group-hover:block hidden animate-[shimmer_2s_infinite]"></div>
          <Icon size={48} className="mb-4 opacity-20" />
          <p className="font-mono text-xs tracking-widest uppercase">Interactive Visualization Pending Data Load</p>
        </div>
      ) : null}
    </motion.div>
  );
}
