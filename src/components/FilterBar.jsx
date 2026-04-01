import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const CATEGORY_RULES = [
  { name: 'Coding & Development', keywords: ['code', 'coding', 'app', 'api', 'developer', 'debug', 'frontend', 'backend', 'software', 'repository', 'version control'] },
  { name: 'Legal Research & Analysis', keywords: ['legal', 'case', 'law', 'statute', 'brief', 'analysis', 'compliance', 'contract', 'citation', 'court'] },
  { name: 'Writing & Documents', keywords: ['writing', 'document', 'draft', 'editing', 'summar', 'note', 'transcript', 'proofread'] },
  { name: 'Meetings & Communication', keywords: ['meeting', 'presentation', 'recording', 'search', 'call', 'voice', 'speech'] },
  { name: 'Design & Creative', keywords: ['design', 'ui', 'ux', 'wireframe', 'visual', 'image', 'video', 'media', 'creative', 'mockup'] },
  { name: 'Marketing & Sales', keywords: ['marketing', 'campaign', 'social', 'brand', 'ad', 'promotion', 'sales'] },
  { name: 'Data, Math & Automation', keywords: ['data', 'math', 'logic', 'spreadsheet', 'automation', 'workflow', 'analytics', 'ml', 'model'] },
  { name: 'Productivity & Knowledge', keywords: ['productivity', 'knowledge', 'search', 'organization', 'planning', 'task'] }
];

const splitUses = (tool) =>
  (tool.uses || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

const getNormalizedCategories = (tool) => {
  const source = [
    ...splitUses(tool),
    ...(tool.tags || []),
    tool.bestFor || '',
    tool.description || ''
  ]
    .join(' ')
    .toLowerCase();

  const matches = CATEGORY_RULES
    .filter((rule) => rule.keywords.some((keyword) => source.includes(keyword)))
    .map((rule) => rule.name);

  return matches.length ? matches : ['General'];
};

const getCategoryOptions = (tools = []) => {
  const categorySet = new Set();
  tools.forEach((tool) => {
    const normalized = getNormalizedCategories(tool);
    normalized.forEach((category) => categorySet.add(category));
  });
  return ['All', ...Array.from(categorySet).sort((a, b) => a.localeCompare(b))];
};

const matchesCategory = (tool, categories) => {
  if (!categories.length || categories.includes('All')) return true;
  const normalized = getNormalizedCategories(tool);
  return categories.some((category) => normalized.includes(category));
};

const matchesSearch = (tool, search) => {
  if (!search.trim()) return true;
  const query = search.toLowerCase();
  return (
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.tags.some((tag) => tag.toLowerCase().includes(query))
  );
};

export const filterTools = (tools, filters) =>
  tools.filter(
    (tool) =>
      matchesCategory(tool, filters.categories) &&
      matchesSearch(tool, filters.search)
  );

const selectSingleCategory = (option) => [option];

const removeOption = (currentValues, option) => {
  const next = currentValues.filter((value) => value !== option && value !== 'All');
  return next.length ? next : ['All'];
};

export default function FilterBar({ tools, filters, onFiltersChange, resultCount, totalCount }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [draftFilters, setDraftFilters] = useState(filters);
  const [inputValue, setInputValue] = useState(filters.search || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const categoryOptions = useMemo(() => getCategoryOptions(tools), [tools]);

  useEffect(() => setDraftFilters(filters), [filters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFiltersChange({ ...filters, search: inputValue });
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const suggestions = useMemo(() => {
    if (!inputValue.trim()) return [];
    const query = inputValue.toLowerCase();
    const terms = new Set();
    tools.forEach((tool) => {
      if (tool.name.toLowerCase().includes(query)) terms.add(tool.name);
      tool.tags.forEach((tag) => tag.toLowerCase().includes(query) && terms.add(tag));
      if (tool.description.toLowerCase().includes(query)) terms.add(tool.description.split(' ').slice(0, 5).join(' '));
    });
    return Array.from(terms).slice(0, 8);
  }, [inputValue, tools]);

  const featuredTools = useMemo(() => {
    const pool = [...tools];
    for (let index = pool.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }
    return pool.slice(0, 3);
  }, [tools]);

  const applyDraft = () => {
    onFiltersChange({ ...draftFilters, search: inputValue });
    setIsMobileOpen(false);
  };

  const activeFilterChips = [
    ...filters.categories.filter((v) => v !== 'All').map((v) => ({ group: 'categories', value: v }))
  ];

  const renderChipGroup = (label, options, selected, onToggle) => (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onToggle(option)}
            className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
              selected.includes(option) ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low text-on-surface-variant"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      <div className="hidden md:grid grid-cols-[240px_minmax(0,1fr)_280px] gap-6 items-start">
        <aside className="bg-surface-container-low rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-3">Category</p>
          <div className="space-y-2 max-h-[360px] overflow-auto custom-scrollbar pr-2">
            {categoryOptions.map((option) => (
              <button
                key={option}
                onClick={() => onFiltersChange({ ...filters, categories: selectSingleCategory(option) })}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  filters.categories.includes(option) ? 'bg-primary text-on-primary' : 'hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface/40" />
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              placeholder="Search tools, descriptions, and tags..."
              className="w-full rounded-xl bg-surface-container-low border border-outline-variant/40 py-3 pl-10 pr-3 focus:outline-none focus:border-primary"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-20 mt-1 w-full rounded-xl border border-outline-variant/30 bg-white shadow-lg overflow-hidden">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onMouseDown={() => setInputValue(suggestion)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-surface-container-low"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <aside className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Featured tools</p>
          {featuredTools.map((tool) => (
            <article key={tool.id} className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-3">
              <p className="text-sm font-semibold text-on-surface line-clamp-1">{tool.name}</p>
              <p className="text-xs text-on-surface-variant mt-1 line-clamp-2">{tool.bestFor}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {getNormalizedCategories(tool).slice(0, 2).map((category) => (
                  <span key={category} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {category}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </aside>
      </div>

      <div className="md:hidden flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {categoryOptions.map((option) => (
          <button
            key={option}
            onClick={() => onFiltersChange({ ...filters, categories: selectSingleCategory(option) })}
            className={`whitespace-nowrap px-3 py-1.5 text-xs rounded-full ${
              filters.categories.includes(option) ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {activeFilterChips.map((chip) => (
          <button
            key={`${chip.group}-${chip.value}`}
            onClick={() =>
              onFiltersChange({
                ...filters,
                [chip.group]: removeOption(filters[chip.group], chip.value)
              })
            }
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs"
          >
            {chip.value}
            <X className="w-3 h-3" />
          </button>
        ))}
        {(activeFilterChips.length > 0 || filters.search.trim()) && (
          <button
            onClick={() => {
              setInputValue('');
              onFiltersChange({ categories: ['All'], search: '' });
            }}
            className="text-xs underline text-on-surface-variant"
          >
            Clear all
          </button>
        )}
      </div>

      <p className="text-sm text-on-surface-variant italic">Showing {resultCount} of {totalCount} tools</p>

      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 flex items-end">
          <div className="w-full bg-surface rounded-t-2xl p-4 space-y-4 max-h-[85vh] overflow-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Filters</h3>
              <button onClick={() => setIsMobileOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <button onClick={applyDraft} className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold">
              Apply ({filterTools(tools, { ...draftFilters, search: inputValue }).length} results)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
