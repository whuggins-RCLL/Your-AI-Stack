/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Bookmark, ArrowRight, ArrowLeftRight, Plus } from 'lucide-react';
import { tools } from './data';

export default function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const categories = ['All Tools', 'Presentations', 'Coding', 'Design', 'Deployment', 'No-Code'];

  const filteredTools = activeCategory === 'All Tools' 
    ? tools 
    : tools.filter(tool => tool.tags.includes(activeCategory));

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary">
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-on-surface/20 backdrop-blur-md p-6">
          <div className="bg-surface-container-lowest max-w-2xl w-full rounded-2xl shadow-[0_20px_40px_rgba(26,28,27,0.1)] p-8 md:p-12">
            <h2 className="font-headline text-3xl font-bold mb-6 text-on-surface">
              Disclaimer & Terms of Use
            </h2>
            <div className="space-y-4 font-body text-on-surface-variant leading-relaxed">
              <p>
                Welcome to Your AI Stack. Please be advised that the inclusion of any artificial intelligence tool within this directory does not imply that Stanford Law School (SLS) provides institutional access, licenses, or subscriptions to it.
              </p>
              <p>
                Furthermore, the presence of a tool on this list does not constitute an official endorsement, nor does it indicate that the tool is approved for use by SLS or Stanford University.
              </p>
              <p>
                This directory is provided strictly for informational purposes, intended solely to offer a survey of available AI tools and their potential use cases.
              </p>
            </div>
            <div className="mt-10 flex justify-end">
              <button
                onClick={() => setShowDisclaimer(false)}
                className="bg-primary text-on-primary px-8 py-3 rounded-xl font-semibold shadow-sm hover:opacity-90 transition-all active:scale-95"
              >
                I Understand and Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F9F9F6]/80 dark:bg-[#1A1C1B]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(26,28,27,0.04)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1100px] mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-headline font-bold text-2xl text-[#1A1C1B] dark:text-[#F9F9F6] tracking-tighter">
              Your AI Stack
            </span>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#" className="text-[#8C1515] dark:text-[#E0BFBB] font-semibold border-b-2 border-[#8C1515] font-headline italic text-lg tracking-tight">
                Browse All
              </a>
              <div className="relative group">
                <a href="#" className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-70 hover:opacity-100 transition-opacity duration-300 font-headline italic text-lg tracking-tight flex items-center gap-1">
                  Saved
                  <span className="bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans not-italic">
                    3
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface opacity-70 hover:opacity-100 transition-opacity active:scale-95">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[1100px] mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="font-headline text-5xl md:text-7xl text-on-surface tracking-tighter mb-8 leading-[1.1]">
            Find the right <span className="italic text-primary">AI tool</span><br />for the job.
          </h1>
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 w-5 h-5" />
              <input
                type="text"
                className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-primary focus:outline-none py-4 pl-12 pr-4 rounded-t-lg transition-colors placeholder:italic"
                placeholder="Search the archive (e.g. 'Coding assistant' or 'Claude')..."
              />
            </div>
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-label tracking-widest uppercase transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4 border-b border-outline-variant/10 pb-4">
          <p className="font-body text-sm text-on-surface-variant italic">
            Showing {filteredTools.length} curated results
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-label tracking-widest text-on-surface-variant uppercase">
                Sort By:
              </span>
              <select className="bg-transparent border-none text-sm font-semibold focus:outline-none cursor-pointer">
                <option>A-Z</option>
                <option>Category</option>
                <option>Recently Added</option>
              </select>
            </div>
            <button className="flex items-center gap-2 bg-surface-container-highest/50 px-4 py-2 rounded-lg text-xs font-label tracking-widest uppercase hover:bg-surface-container-highest transition-colors">
              <ArrowLeftRight className="w-4 h-4" />
              Compare (3)
            </button>
          </div>
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <article
              key={tool.id}
              className="group bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.01] shadow-[0_20px_40px_rgba(26,28,27,0.04)] flex flex-col h-full cursor-pointer relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex items-center justify-center">
                  <img
                    src={tool.logoUrl}
                    alt={`${tool.name} Logo`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className={`transition-colors ${tool.bookmarked ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                  <Bookmark className="w-6 h-6" fill={tool.bookmarked ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-headline font-bold text-xl group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                {tool.isNew && (
                  <span className="text-[8px] bg-primary-container/20 text-primary px-1.5 py-0.5 rounded font-label uppercase tracking-widest">
                    New
                  </span>
                )}
              </div>

              <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 leading-relaxed">
                {tool.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-primary mb-1">Best for:</p>
                <p className="text-sm italic">{tool.bestFor}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#F5F0EB] text-[#6B6B6B] text-[10px] font-label tracking-wider uppercase rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {tool.helpUrls && tool.helpUrls.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-primary mb-2">Training & Help:</p>
                  <ul className="text-xs flex flex-col gap-1.5">
                    {tool.helpUrls.map((url, idx) => (
                      <li key={idx} className="truncate">
                        <a 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-on-surface-variant hover:text-primary underline decoration-outline-variant underline-offset-2 transition-colors"
                        >
                          Resource {idx + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto flex justify-between items-center">
                <span className="text-[10px] font-label tracking-[0.2em] uppercase text-on-surface/40">
                  {tool.tier}
                </span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Visit Tool <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination/More */}
        <div className="mt-20 text-center">
          <button className="font-headline italic text-xl border-b border-primary text-on-surface hover:text-primary transition-colors py-1">
            Load More Archived Tools
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mt-24 bg-[#EEEEEB] dark:bg-[#121413]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1100px] mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-headline text-xl text-[#1A1C1B] dark:text-[#F9F9F6]">
              Your AI Stack
            </span>
            <p className="font-body text-xs uppercase tracking-widest font-medium text-[#1A1C1B]/60 dark:text-[#F9F9F6]/60">
              © {new Date().getFullYear()} Your AI Stack. Curated Intellect.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Privacy Policy', 'Terms of Service', 'Archive Guidelines', 'Submit a Tool'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs uppercase tracking-widest font-medium text-[#1A1C1B]/60 dark:text-[#F9F9F6]/60 hover:text-[#8C1515] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* FAB for mobile */}
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-[60]">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
