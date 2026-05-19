import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dna, Download } from 'lucide-react';
import { DataTable } from './DataTable';
import { geneOrderHeaders, geneOrderRows } from '../data/thysanopteraData';

const downloadUrl = `${import.meta.env.BASE_URL}downloads/Github-3.xlsx`;

export function GeneOrderView() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl"
    >
      <header className="mb-10 flex items-center gap-4">
        <div className="p-3 bg-ocean-900 border border-ocean-800 rounded-xl text-cyan-vivid shadow-[0_0_20px_rgba(12,235,207,0.1)]">
          <Dna size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-2">
            Gene Orders
          </h1>
          <p className="text-slate-400 font-light max-w-2xl">
            Gene-order matrix for 100 Thysanoptera mitogenomes.
          </p>
        </div>
      </header>

      <section className="mb-8 rounded-2xl border border-ocean-800 bg-ocean-950/80 p-6 md:p-8">
        <h2 className="mb-4 font-display text-2xl text-slate-200">Gene order table</h2>
        <p className="mb-6 text-slate-300 font-light leading-relaxed">
          The table below displays 100 rows from the supplied Github-3.xlsx workbook. The first column identifies the sequence, the second column records the GO type, and numbered columns show the ordered mitochondrial features.
        </p>
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-ocean-700 bg-ocean-800 px-4 py-2 text-sm font-medium text-cyan-vivid transition-colors hover:border-cyan-vivid/30 hover:bg-ocean-700"
        >
          <Download size={16} />
          Download this dataset in Excel format
        </a>
      </section>

      <DataTable headers={geneOrderHeaders} rows={geneOrderRows} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </motion.div>
  );
}
