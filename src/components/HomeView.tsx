import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function HomeView() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = commentsRef.current;
    if (!container || container.childElementCount) return;
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.repo = 'Mitoooool/thysanoptera-phylomitogenomics';
    script.dataset.repoId = 'R_kgDOSh9iNA';
    script.dataset.category = 'General';
    script.dataset.categoryId = 'DIC_kwDOSh9iNM4DJlxH';
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '0';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '0';
    script.dataset.inputPosition = 'top';
    script.dataset.theme = 'preferred_color_scheme';
    script.dataset.lang = 'en';
    container.appendChild(script);
  }, []);

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
              <a href="#" className="text-cyan-vivid hover:underline">[NiuG Team]</a>{' '}
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

      <section className="mt-16 border-t border-ocean-800 pt-10" aria-labelledby="project-comments-title">
        <h2 id="project-comments-title" className="font-display text-2xl font-medium text-white mb-3">
          Project discussion
        </h2>
        <p className="text-slate-400 font-light leading-relaxed mb-6">
          Please report data, annotation, or display issues here. GitHub sign-in is required for comments.
        </p>
        <div ref={commentsRef} className="rounded-xl overflow-hidden" />
      </section>
    </motion.div>
  );
}
