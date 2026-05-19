import React from 'react';
import { motion } from 'motion/react';
import { CircleDashed, Download } from 'lucide-react';
import rrnaImage from '../assets/ppt/image3.jpeg';

export function MtGenomesView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl"
    >
      <header className="mb-10 flex items-center gap-4">
        <div className="p-3 bg-ocean-900 border border-ocean-800 rounded-xl text-cyan-vivid shadow-[0_0_20px_rgba(12,235,207,0.1)]">
          <CircleDashed size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-2">12S rRNA</h1>
          <p className="text-slate-400 font-light max-w-2xl">
            Predicted secondary structure of the mitochondrial 12S rRNA gene in Thysanoptera.
          </p>
        </div>
      </header>

      <section className="bg-ocean-950/80 border border-ocean-800 rounded-2xl p-6 md:p-8 mb-8">
        <p className="text-slate-300 font-light leading-relaxed mb-8">
          The predicted secondary structure of the mitochondrial 12S rRNA gene in Thysanoptera. Using our pipeline, conserved stem-loop motifs and variable regions were modeled across different lineages. These structures aid in identifying homologous sites and improving alignment.
        </p>

        <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">Options</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <a href={rrnaImage} target="_blank" rel="noopener noreferrer" className="text-cyan-vivid hover:underline">
              Download
            </a>
            <span className="text-slate-400 font-light">this figure in image format;</span>
          </li>
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <span className="text-cyan-vivid">Download</span>
            <span className="text-slate-400 font-light">the dataset in Excel format;</span>
          </li>
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <span className="text-cyan-vivid">Download</span>
            <span className="text-slate-400 font-light">the alignment.</span>
          </li>
        </ul>
      </section>

      <figure className="rounded-2xl border border-ocean-800 bg-white/95 p-4">
        <img src={rrnaImage} alt="12S rRNA secondary structure" className="mx-auto w-full max-w-3xl rounded-lg object-contain" />
      </figure>
    </motion.div>
  );
}
