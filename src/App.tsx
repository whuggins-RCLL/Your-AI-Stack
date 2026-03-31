/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, Bookmark, ArrowRight, ArrowLeftRight, Plus, Download, Layers, Compass, BookmarkPlus, FileDown, BookOpen } from 'lucide-react';
import { tools } from './data';

export default function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [showOnlySaved, setShowOnlySaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All Tools', 'Presentations', 'Spreadsheets', 'Coding', 'Design', 'Music and Sound', 'Deployment', 'No-Code'];

  let filteredTools = activeCategory === 'All Tools' 
    ? tools 
    : tools.filter(tool => tool.tags.includes(activeCategory));

  if (showOnlySaved) {
    filteredTools = filteredTools.filter(tool => bookmarkedIds.has(tool.id));
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.bestFor.toLowerCase().includes(query) ||
      tool.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  const bookmarkedTools = useMemo(() => tools.filter(t => bookmarkedIds.has(t.id)), [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary print:hidden">
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
              <button 
                onClick={() => {
                  setShowOnlySaved(false);
                  setActiveCategory('All Tools');
                }}
                className={`font-semibold border-b-2 font-headline italic text-lg tracking-tight transition-all ${!showOnlySaved ? 'text-[#8C1515] dark:text-[#E0BFBB] border-[#8C1515]' : 'text-[#1A1C1B] dark:text-[#F9F9F6] border-transparent opacity-70 hover:opacity-100'}`}
              >
                Browse All
              </button>
              <div className="relative group flex items-center gap-4">
                <button 
                  onClick={() => setShowOnlySaved(!showOnlySaved)}
                  className={`transition-opacity duration-300 font-headline italic text-lg tracking-tight flex items-center gap-1 ${showOnlySaved ? 'text-primary opacity-100' : 'text-[#1A1C1B] dark:text-[#F9F9F6] opacity-70 hover:opacity-100'}`}
                >
                  Saved
                  <span className="bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans not-italic">
                    {bookmarkedIds.size}
                  </span>
                </button>
                {bookmarkedIds.size > 0 && (
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-primary text-on-primary px-3 py-1.5 rounded-lg text-xs font-label tracking-widest uppercase hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Export PDF
                  </button>
                )}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Featured Resource Banner */}
        <a 
          href="https://sites.google.com/law.stanford.edu/ailearninghub/ai-resources-for-students?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-12 block bg-[#8C1515]/5 border border-[#8C1515]/20 rounded-2xl p-6 hover:bg-[#8C1515]/10 transition-colors group shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#8C1515] text-white flex items-center justify-center shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-headline text-xl font-bold text-[#8C1515] group-hover:underline decoration-2 underline-offset-4">
                  SLS AI Learning Hub: AI Resources for Students
                </h2>
                <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                  Explore Stanford Law School's official hub for student AI resources, guidelines, and learning materials.
                </p>
              </div>
            </div>
            <div className="hidden md:flex shrink-0 items-center gap-2 text-[#8C1515] font-semibold text-sm tracking-wide uppercase">
              Visit Hub <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>

        {/* Explainer Section */}
        <section className="mb-16 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-sm">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-primary" />
              <h2 className="font-headline text-2xl font-bold text-on-surface">What is an "AI Stack"?</h2>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              In software engineering, a "tech stack" refers to the combination of tools, languages, and frameworks used to build an application. Similarly, your <strong>AI Stack</strong> is the personal collection of artificial intelligence tools you combine to enhance your daily workflow. Instead of relying on one tool to do everything, a good stack uses specialized tools for specific tasks (e.g., one for drafting emails, another for generating presentations, and another for coding).
            </p>
            
            <h3 className="font-headline text-xl font-bold text-on-surface mb-6">How to build your stack using this site:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-on-surface text-lg">1. Discover</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Browse categories or search for specific use cases to find tools that solve your unique problems.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold mb-2">
                  <BookmarkPlus className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-on-surface text-lg">2. Curate</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Click the bookmark icon to save tools you want to evaluate. Start with just 1-2 core tools to avoid overwhelm.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold mb-2">
                  <FileDown className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-on-surface text-lg">3. Export</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Go to your "Saved" list and export a clean PDF of your custom stack, complete with training resources.</p>
              </div>
            </div>
          </div>
        </section>

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
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(tool.id);
                  }}
                  className={`transition-colors z-10 ${bookmarkedIds.has(tool.id) ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  <Bookmark className="w-6 h-6" fill={bookmarkedIds.has(tool.id) ? "currentColor" : "none"} />
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
      </main>

      {/* FAB for mobile */}
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-[60]">
        <Plus className="w-6 h-6" />
      </button>
    </div>

    {/* Print View (Only visible when printing) */}
    <div className="hidden print:block bg-white text-black p-8 max-w-4xl mx-auto font-sans">
      <div className="mb-8 border-b border-gray-300 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Saved AI Tools</h1>
        <p className="text-gray-500">Exported from Your AI Stack</p>
      </div>

      {bookmarkedTools.length === 0 ? (
        <p className="text-gray-500 italic">No tools saved.</p>
      ) : (
        <div className="space-y-8">
          {bookmarkedTools.map((tool) => (
            <div key={tool.id} className="break-inside-avoid border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{tool.name}</h2>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {tool.tier}
                </span>
              </div>
              
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Best For</h3>
                  <p className="text-sm text-gray-800 font-medium">{tool.bestFor}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Use Cases / Tags</h3>
                  <p className="text-sm text-gray-800 font-medium">{tool.tags.join(', ')}</p>
                </div>
              </div>

              {tool.helpUrls && tool.helpUrls.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Training & Resources</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {tool.helpUrls.map((url, idx) => (
                      <li key={idx} className="text-sm">
                        <a href={url} className="text-blue-600 underline break-all">{url}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100">
                <a href={tool.url} className="text-sm text-blue-600 font-medium break-all">{tool.url}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
