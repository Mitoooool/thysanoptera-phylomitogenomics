import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, FileText, GitBranch } from 'lucide-react';
import phylogenyImage from '../assets/ppt/image2.jpeg';

export function PhylogenyView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl"
    >
      <header className="mb-10 flex items-center gap-4">
        <div className="p-3 bg-ocean-900 border border-ocean-800 rounded-xl text-cyan-vivid shadow-[0_0_20px_rgba(12,235,207,0.1)]">
          <GitBranch size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-2">Phylogeny</h1>
          <p className="text-slate-400 font-light max-w-2xl">
            Thysanoptera phylogeny based on translated coding sequences.
          </p>
        </div>
      </header>

      <section className="bg-ocean-950/80 border border-ocean-800 rounded-2xl p-6 md:p-8 mb-8">
        <p className="text-slate-300 font-light leading-relaxed mb-8">
          Obtained from the analysis of concatenated mitochondrial amino acid sequences (3,634 positions) under the CAT+GTR+Γ model in the PhyloBayes-MPI program.
        </p>

        <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">Options</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <a href={phylogenyImage} target="_blank" rel="noopener noreferrer" className="text-cyan-vivid hover:underline">
              Download
            </a>
            <span className="text-slate-400 font-light">this figure in image format;</span>
          </li>
          <li className="flex items-center gap-3">
            <FileText className="text-slate-400" size={18} />
            <span className="text-cyan-vivid">Download</span>
            <span className="text-slate-400 font-light">the tree in Nexus format;</span>
          </li>
          <li className="flex items-center gap-3">
            <ExternalLink className="text-slate-400" size={18} />
            <a href="https://itol.embl.de/" target="_blank" rel="noopener noreferrer" className="text-cyan-vivid hover:underline">
              Open
            </a>
            <span className="text-slate-400 font-light">this tree in iTOL;</span>
          </li>
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <span className="text-cyan-vivid">Download</span>
            <span className="text-slate-400 font-light">the alignment used to build the tree.</span>
          </li>
        </ul>
      </section>

      <figure className="mt-8 rounded-2xl border border-ocean-800 bg-white/95 p-4">
        <img
          src={phylogenyImage}
          alt="Sequence-based Thysanoptera phylogenetic tree"
          className="w-full h-auto rounded-lg object-contain"
        />
      </figure>
    </motion.div>
  );
}
