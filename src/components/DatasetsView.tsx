import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Download } from 'lucide-react';
import { DataTable } from './DataTable';
import { genomeHeaders, genomeRows } from '../data/thysanopteraData';

const downloadUrl = `${import.meta.env.BASE_URL}downloads/Github-2.xlsx`;

export function DatasetsView() {
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
          <Database size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-2">
            Dataset
          </h1>
          <p className="text-slate-400 font-light max-w-2xl">
            Published Thysanoptera mitochondrial genomes.
          </p>
        </div>
      </header>

      <section className="mb-8 rounded-2xl border border-ocean-800 bg-ocean-950/80 p-6 md:p-8">
        <h2 className="mb-4 font-display text-2xl text-slate-200">Published Thysanoptera mt-genomes</h2>
        <p className="mb-6 text-slate-300 font-light leading-relaxed">
          This table contains family, clade, species, GenBank accession, gene-order type, and reference information from the supplied Github-2.xlsx workbook.
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

      <DataTable headers={genomeHeaders} rows={genomeRows} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </motion.div>
  );
}
