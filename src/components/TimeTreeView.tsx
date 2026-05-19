import React from 'react';
import { motion } from 'motion/react';
import { Atom, Download } from 'lucide-react';
import atp8Main from '../assets/ppt/image4.png';
import atp8A from '../assets/ppt/image5.png';
import atp8B from '../assets/ppt/image6.png';
import atp8C from '../assets/ppt/image7.png';
import atp8D from '../assets/ppt/image8.png';
import atp8E from '../assets/ppt/image9.png';
import atp8F from '../assets/ppt/image10.png';
import atp8G from '../assets/ppt/image11.png';
import atp8H from '../assets/ppt/image12.png';
import atp8I from '../assets/ppt/image13.png';
import atp8J from '../assets/ppt/image14.png';
import atp8K from '../assets/ppt/image15.png';

const structures = [atp8A, atp8B, atp8C, atp8D, atp8E, atp8F, atp8G, atp8H, atp8I, atp8J, atp8K];

export function TimeTreeView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl"
    >
      <header className="mb-10 flex items-center gap-4">
        <div className="p-3 bg-ocean-900 border border-ocean-800 rounded-xl text-cyan-vivid shadow-[0_0_20px_rgba(12,235,207,0.1)]">
          <Atom size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-2">atp8</h1>
          <p className="text-slate-400 font-light max-w-2xl">
            AlphaFold-predicted ATP8 protein structures from thrips mitogenomes.
          </p>
        </div>
      </header>

      <section className="bg-ocean-950/80 border border-ocean-800 rounded-2xl p-6 md:p-8 mb-8">
        <p className="text-slate-300 font-light leading-relaxed mb-8">
          This page shows AlphaFold-predicted 3D structures of the ATP8 protein from thrips mitogenomes.
        </p>

        <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">Options</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <a href={atp8Main} target="_blank" rel="noopener noreferrer" className="text-cyan-vivid hover:underline">
              Download
            </a>
            <span className="text-slate-400 font-light">this figure in image format;</span>
          </li>
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <span className="text-cyan-vivid">Download</span>
            <span className="text-slate-400 font-light">the results of TMHMM;</span>
          </li>
          <li className="flex items-center gap-3">
            <Download className="text-slate-400" size={18} />
            <span className="text-cyan-vivid">Download</span>
            <span className="text-slate-400 font-light">the alignment.</span>
          </li>
        </ul>
      </section>

      <figure className="mb-8 rounded-2xl border border-ocean-800 bg-white/95 p-4">
        <img src={atp8Main} alt="ATP8 protein structure overview" className="mx-auto w-full max-w-4xl rounded-lg object-contain" />
      </figure>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {structures.map((image, index) => (
          <figure key={image} className="rounded-xl border border-ocean-800 bg-white/95 p-4">
            <img src={image} alt={`ATP8 predicted structure ${index + 1}`} className="mx-auto aspect-[4/3] w-full object-contain" />
          </figure>
        ))}
      </div>
    </motion.div>
  );
}
