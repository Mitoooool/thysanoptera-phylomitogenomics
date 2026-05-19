import React from 'react';
import { motion } from 'motion/react';

export function HomeView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl"
    >
      <header className="mb-12">
        <h1 className="font-display text-4xl md:text-6xl font-light leading-tight tracking-tight text-white mb-6">
          Thysanoptera <br className="hidden md:block"/>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-vivid to-blue-400">
            Phylomitogenomics
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
          Welcome to the Thysanoptera (Thrips) Phylomitogenomics Database!
        </p>
      </header>

      <section className="prose prose-invert prose-slate max-w-none">
        <div className="bg-ocean-950 border border-ocean-800 rounded-xl p-8 shadow-2xl">
          <div className="space-y-4 text-slate-300 font-light leading-relaxed">
            <p>
              This website contains data for mitochondrial genomic data. The website was created by{' '}
              <a href="#" className="text-cyan-vivid hover:underline">[Niu G Lab]</a>{' '}
              and is being maintained by{' '}
              <a href="#" className="text-cyan-vivid hover:underline">[Mitoooool]</a>.
            </p>
            <p>
              Version 1 of the website contains data and figures from our systematic re-annotation and curation study of thrips mitogenomes. The datafiles and phylogenetic reconstructions as additional source are available, yet the phylogeny is far from robust.
            </p>
            <p>
              We plan{' '}
              <a href="#" className="text-cyan-vivid hover:underline">[update]</a>{' '}
              both the datafiles as additional mitochondrial genomes become available.
            </p>
            <p>
              Please use the menu on the left to access the data and results and let us know if there are any errors or additions.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
