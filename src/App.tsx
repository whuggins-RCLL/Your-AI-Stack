/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, Bookmark, ArrowRight, ArrowLeftRight, Plus, Download, Layers, Compass, BookmarkPlus, FileDown, BookOpen, X, Sparkles } from 'lucide-react';
import { tools } from './data';

export default function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showExplainer, setShowExplainer] = useState(true);
  const [showPhilosophy, setShowPhilosophy] = useState(true);
  const [showMajorLlms, setShowMajorLlms] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [showOnlySaved, setShowOnlySaved] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All Tools', 'Presentations', 'Spreadsheets', 'Coding', 'Design', 'Music and Sound', 'Podcasts', 'Deployment', 'No-Code'];

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

  const handleExportPDF = async () => {
    try {
      // @ts-ignore
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('pdf-export-content');
      if (!element) return;
      
      // Temporarily make it visible for html2pdf
      element.classList.remove('hidden');
      element.classList.remove('print:block');
      element.style.display = 'block';

      const opt = {
        margin:       0.5,
        filename:     'saved-ai-tools.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
      
      // Restore classes
      element.style.display = '';
      element.classList.add('hidden');
      element.classList.add('print:block');
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
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

      <main className="pb-16 max-w-[1100px] mx-auto px-4 sm:px-5">
        {/* Hero Section */}
        <header className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden mb-8 shadow-2xl flex items-center rounded-b-3xl sm:rounded-3xl sm:mt-4 bg-[#8C1515]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E2D29] via-[#8C1515] to-[#53565A] opacity-90"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] rounded-full bg-[#8C1515] mix-blend-screen blur-[120px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full bg-[#FFFFFF] mix-blend-overlay blur-[150px] opacity-20"></div>
            <div className="absolute top-[20%] right-[20%] w-[40%] h-[50%] rounded-full bg-[#D4AF37] mix-blend-screen blur-[100px] opacity-30"></div>
            <div className="absolute bottom-[10%] left-[30%] w-[50%] h-[60%] rounded-full bg-[#53565A] mix-blend-multiply blur-[100px] opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E2D29]/90 via-[#2E2D29]/60 to-transparent w-3/4 md:w-2/3"></div>
            <div className="absolute top-[10%] right-[5%] w-[35%] h-[85%] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] transform rotate-3 shadow-2xl"></div>
            <div className="absolute bottom-[-15%] right-[20%] w-[45%] h-[70%] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] transform -rotate-6 shadow-2xl"></div>
            <div className="absolute top-[25%] left-[55%] w-[30%] h-[60%] bg-[#8C1515]/10 backdrop-blur-xl border border-white/5 rounded-[40px] transform rotate-12 shadow-xl"></div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4 drop-shadow-lg">
              Your AI Stack
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md font-light">
              Find the right AI tool for the job.
            </p>
          </div>
        </header>

        {/* Featured Resource Banner */}
        <a 
          href="https://sites.google.com/law.stanford.edu/ailearninghub/ai-resources-for-students?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 block bg-[#8C1515]/5 border border-[#8C1515]/20 rounded-2xl p-5 hover:bg-[#8C1515]/10 transition-colors group shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#8C1515] text-white flex items-center justify-center shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-headline text-xl font-bold text-[#8C1515] group-hover:underline decoration-2 underline-offset-4">
                  AI Resources for SLS Students, Faculty, and Staff
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
        <section className="mb-8 bg-gradient-to-br from-surface-container-lowest via-white to-surface shadow-[0_16px_40px_rgba(26,28,27,0.08)] border border-outline-variant/35 rounded-3xl p-6 md:p-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="font-headline text-3xl font-semibold text-on-surface tracking-tight">What is an "AI Stack"?</h2>
              </div>
              <button
                onClick={() => setShowExplainer(prev => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-low px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
              >
                {showExplainer ? 'Hide section' : 'Show section'}
              </button>
            </div>
            {showExplainer && (
            <>
            <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
              In software engineering, a "tech stack" refers to the combination of tools, languages, and frameworks used to build an application. Similarly, your <strong>AI Stack</strong> is the personal collection of artificial intelligence tools you combine to enhance your daily workflow. Instead of relying on one tool to do everything, a good stack uses specialized tools for specific tasks (e.g., one for drafting emails, another for generating presentations, and another for coding).
            </p>
            
            <h3 className="font-headline text-2xl font-semibold text-on-surface mb-6">How to build your stack using this site:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold mb-2 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-headline font-semibold text-on-surface text-2xl">1. Discover</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">Browse categories or search for specific use cases to find tools that solve your unique problems.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold mb-2 shadow-sm">
                  <BookmarkPlus className="w-5 h-5" />
                </div>
                <h4 className="font-headline font-semibold text-on-surface text-2xl">2. Curate</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">Click the bookmark icon to save tools you want to evaluate. Start with just 1-2 core tools to avoid overwhelm.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold mb-2 shadow-sm">
                  <FileDown className="w-5 h-5" />
                </div>
                <h4 className="font-headline font-semibold text-on-surface text-2xl">3. Export</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">Go to your "Saved" list and export a clean PDF of your custom stack, complete with training resources.</p>
              </div>
            </div>
            </>
            )}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-8 bg-gradient-to-br from-surface-container-lowest via-white to-surface shadow-[0_16px_40px_rgba(26,28,27,0.08)] border border-outline-variant/35 rounded-3xl p-6 md:p-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="font-headline text-4xl font-semibold text-on-surface tracking-tight">Build your AI stack around the work that matters.</h2>
              </div>
              <button
                onClick={() => setShowPhilosophy(prev => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-low px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
              >
                {showPhilosophy ? 'Hide section' : 'Show section'}
              </button>
            </div>
            
            {showPhilosophy && (
            <>
            <div className="space-y-4 text-on-surface-variant leading-relaxed mb-12">
              <p className="font-bold text-on-surface text-lg">Most people are getting AI wrong.</p>
              <p>Some cling to one tool and force it into every task, even when the job demands something more specific. Others get swept up in the constant churn of launches, trends, and hype, bouncing from tool to tool with no real system, no depth, and no lasting advantage.</p>
              <p>Both approaches fail for the same reason: they are tool-first.</p>
              <p>The best professionals take the opposite approach. They build their AI stack around the real work they do every day — the problems they need to solve, the decisions they need to make, the content they need to produce, and the speed and quality their role demands.</p>
              <p className="font-bold text-on-surface">That is where leverage comes from.</p>
              <p>A strong AI stack is not about having access to everything. It is about choosing the right tools for your workflow, using them with intention, and building a system that makes you faster, sharper, and more effective over time.</p>
              <ul className="list-disc list-inside space-y-1 ml-4 font-medium text-on-surface">
                <li>Do not build your stack around what is trending. Build it around what is useful.</li>
                <li>Do not collect tools. Build capability.</li>
                <li>Do not confuse experimentation with mastery.</li>
              </ul>
              <p>Stay anchored to your actual needs. Stay problem-based. Go deep where it counts.</p>
              <p>Because over the next three to five years, the people who win will not be the ones who tried every AI tool. They will be the ones who became dangerous with the right ones.</p>
            </div>

            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">The AI skills that will matter most</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              If you want to stay relevant, do not just use AI casually. Become a power user in the core skill areas that modern work is rapidly reorganizing around.<br/><br/>
              Pick one tool in each category. Learn it deeply. Use it often enough that it becomes part of how you think, execute, and deliver.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "1. Research and synthesis", desc: "Know how to find signal fast, separate quality from noise, and turn large volumes of information into clear, usable insight." },
                { title: "2. Writing and communication", desc: "Master a tool that helps you write faster, think more clearly, and communicate with more precision across emails, briefs, memos, proposals, and strategic documents." },
                { title: "3. Analysis and decision support", desc: "Use AI to break down complex problems, surface tradeoffs, stress-test thinking, and improve the speed and quality of your decisions." },
                { title: "4. Workflow automation", desc: "Learn how to remove repetitive work, connect systems, and automate the tasks that quietly drain time and attention." },
                { title: "5. Coding and technical creation", desc: "This is no longer a niche skill. Whether you are technical or not, the ability to use AI to write scripts, debug issues, prototype ideas, and build lightweight solutions is becoming a serious advantage." },
                { title: "6. Content and presentation creation", desc: "Be able to produce polished decks, visuals, reports, and creative assets that are not just fast, but clear, persuasive, and executive-ready." },
                { title: "7. Data fluency", desc: "Know how to use AI to work through spreadsheets, documents, dashboards, and structured information so you can move from raw data to real direction." },
                { title: "8. Personal knowledge management", desc: "Use AI to capture ideas, organize information, retrieve insights, and build a knowledge system that compounds instead of disappearing into scattered notes and tabs." },
                { title: "9. Creative problem solving", desc: "Develop the ability to brainstorm better, explore more angles, generate stronger options, and push past obvious thinking when the path is unclear." },
                { title: "10. Collaboration and team leverage", desc: "Use AI to improve meetings, speed up handoffs, tighten alignment, and increase the quality and consistency of work across teams." },
                { title: "11. Prompting and instruction design", desc: "The people who get the most from AI are the ones who know how to direct it. Clear context, sharp inputs, defined outcomes, and strong judgment are becoming foundational professional skills." }
              ].map((skill, idx) => (
                <div key={idx} className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-lg text-on-surface mb-2">{skill.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-container/10 rounded-2xl p-8 border border-primary/20 text-center">
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-6">The real goal</h3>
              <p className="text-lg text-on-surface-variant font-medium mb-6">You do not need every AI tool.</p>
              <ul className="space-y-2 text-on-surface-variant mb-8 inline-block text-left">
                <li>✓ You need the right stack for your work.</li>
                <li>✓ You need depth, not distraction.</li>
                <li>✓ You need systems, not clutter.</li>
                <li>✓ You need mastery in the skills that will matter when AI stops being novel and starts being expected.</li>
              </ul>
              <p className="text-on-surface font-medium mb-6">
                Build an AI stack that earns its place in your workflow.<br/>
                Then become a power user in the categories that will keep you valuable.
              </p>
              <div className="text-primary font-bold space-y-1">
                <p>That is how you stay current.</p>
                <p>That is how you stay competitive.</p>
                <p>That is how you build real edge.</p>
              </div>
            </div>
            </>
            )}
          </div>
        </section>

        {/* Major LLMs Section */}
        <section className="mb-16 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="font-headline text-2xl font-bold text-on-surface">Major, General Purpose Large Language Models (LLMs)</h2>
            </div>
            <button
              onClick={() => setShowMajorLlms(prev => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-low px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
            >
              {showMajorLlms ? 'Hide section' : 'Show section'}
            </button>
          </div>

          {showMajorLlms && (
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <h3 className="font-bold text-lg text-on-surface mb-3">GPT-5.4 / GPT-5.4 Pro</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Strongest all-around choice for professional work, long-context tasks, coding, tool use, and computer use. OpenAI positions GPT-5.4 as its default for “most important work” and says it supports a 1M-token context window.
              </p>
            </div>
            
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <h3 className="font-bold text-lg text-on-surface mb-3">Claude Opus 4.6</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                One of the very best for complex knowledge work, coding, agents, and polished writing. Anthropic describes it as its strongest model and “the world’s most powerful model for coding, agents, and professional work.”
              </p>
            </div>
            
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <h3 className="font-bold text-lg text-on-surface mb-3">Gemini 3.1 Pro</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                A top-tier multimodal and long-context model, especially strong when tasks mix text, images, audio, video, and large codebases. Google says it is its most advanced model for complex tasks, with up to 1M context.
              </p>
            </div>
            
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <h3 className="font-bold text-lg text-on-surface mb-3">Grok 4 / Grok 4 Heavy</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Clearly in the frontier group, especially if you value native web/search integration and real-time information. xAI positions Grok 4 as its top model with native tool use and search integration.
              </p>
            </div>
          </div>

          <div className="bg-primary-container/20 rounded-xl p-6 border border-primary/20">
            <h3 className="font-bold text-lg text-on-surface mb-3">Notable additional models:</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <strong>Mistral</strong> and <strong>DeepSeek</strong> are also worth tracking, especially for users interested in open or more deployable model families. For Stanford users, DeepSeek should be used through the <strong>Stanford AI Playground</strong>; Stanford’s UIT says a secure local version is available there and recommends the Playground as the safer Stanford-managed environment for AI exploration.
            </p>
          </div>
          </>
          )}
        </section>

        {/* A-Z + Controls Section */}
        <section className="mb-8 border-b border-outline-variant/10 pb-4 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setShowOnlySaved(false);
                setActiveCategory('All Tools');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-label tracking-widest uppercase transition-colors ${!showOnlySaved ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              Browse All
            </button>
            <button
              onClick={() => setShowOnlySaved(!showOnlySaved)}
              className={`px-4 py-2 rounded-lg text-xs font-label tracking-widest uppercase transition-colors flex items-center gap-2 ${showOnlySaved ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              Saved
              <span className="bg-on-primary/20 text-current text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {bookmarkedIds.size}
              </span>
            </button>
            {bookmarkedIds.size > 0 && (
              <button
                onClick={handleExportPDF}
                className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg text-xs font-label tracking-widest uppercase hover:opacity-90 transition-opacity shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Export PDF
              </button>
            )}
          </div>

          <div className="flex flex-col gap-6">
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

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
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
              <button
                onClick={() => setShowCompare(true)}
                disabled={bookmarkedIds.size === 0}
                className="flex items-center gap-2 bg-surface-container-highest/50 px-4 py-2 rounded-lg text-xs font-label tracking-widest uppercase hover:bg-surface-container-highest transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeftRight className="w-4 h-4" />
                Compare ({bookmarkedIds.size})
              </button>
            </div>
          </div>
        </section>

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
      {/* Compare Modal */}
      {showCompare && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-on-surface/20 backdrop-blur-md p-6">
          <div className="bg-surface-container-lowest max-w-6xl w-full max-h-[90vh] rounded-2xl shadow-[0_20px_40px_rgba(26,28,27,0.1)] flex flex-col overflow-hidden">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
              <h2 className="font-headline text-2xl font-bold text-on-surface">
                Compare Saved Tools
              </h2>
              <button 
                onClick={() => setShowCompare(false)}
                className="p-2 hover:bg-surface-container rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-on-surface-variant" />
              </button>
            </div>
            
            <div className="p-6 overflow-x-auto flex-1">
              {bookmarkedTools.length === 0 ? (
                <div className="text-center py-12 text-on-surface-variant">
                  <p>No tools saved for comparison.</p>
                  <button 
                    onClick={() => setShowCompare(false)}
                    className="mt-4 bg-primary text-on-primary px-6 py-2 rounded-full font-label tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
                  >
                    Browse Tools
                  </button>
                </div>
              ) : (
                <div className="flex gap-6 min-w-max pb-4">
                  {bookmarkedTools.map(tool => (
                    <div key={tool.id} className="w-80 flex flex-col border border-outline-variant/20 rounded-xl p-6 bg-surface-container-lowest">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
                          <img src={tool.logoUrl} alt={`${tool.name} Logo`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg leading-tight">{tool.name}</h3>
                          <span className="text-[10px] font-label tracking-widest uppercase text-on-surface-variant">{tool.tier}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6 flex-1">
                        <div>
                          <h4 className="text-xs font-label tracking-widest uppercase text-primary mb-2">Best For</h4>
                          <p className="text-sm italic text-on-surface-variant">{tool.bestFor}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-label tracking-widest uppercase text-primary mb-2">Description</h4>
                          <p className="text-sm text-on-surface-variant leading-relaxed">{tool.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-label tracking-widest uppercase text-primary mb-2">Tags</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {tool.tags.map(tag => (
                              <span key={tag} className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-label tracking-wider uppercase rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-outline-variant/20">
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center bg-primary text-on-primary py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          Visit Tool
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>

    {/* Print View (Only visible when printing) */}
    <div id="pdf-export-content" className="hidden print:block bg-[#ffffff] text-[#000000] p-8 max-w-4xl mx-auto font-sans">
      <div className="mb-8 border-b border-[#d1d5db] pb-6">
        <h1 className="text-4xl font-bold text-[#111827] mb-2">My Saved AI Tools</h1>
        <p className="text-[#6b7280]">Exported from Your AI Stack</p>
      </div>

      {bookmarkedTools.length === 0 ? (
        <p className="text-[#6b7280] italic">No tools saved.</p>
      ) : (
        <div className="space-y-8">
          {bookmarkedTools.map((tool) => (
            <div key={tool.id} className="break-inside-avoid border border-[#e5e7eb] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#111827]">{tool.name}</h2>
                <span className="text-xs font-bold tracking-widest uppercase text-[#6b7280] bg-[#f3f4f6] px-3 py-1 rounded-full">
                  {tool.tier}
                </span>
              </div>
              
              <p className="text-[#374151] text-base mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Best For</h3>
                  <p className="text-sm text-[#1f2937] font-medium">{tool.bestFor}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Use Cases / Tags</h3>
                  <p className="text-sm text-[#1f2937] font-medium">{tool.tags.join(', ')}</p>
                </div>
              </div>

              {tool.helpUrls && tool.helpUrls.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Training & Resources</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {tool.helpUrls.map((url, idx) => (
                      <li key={idx} className="text-sm">
                        <a href={url} className="text-[#2563eb] underline break-all">{url}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-[#f3f4f6]">
                <a href={tool.url} className="text-sm text-[#2563eb] font-medium break-all">{tool.url}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
