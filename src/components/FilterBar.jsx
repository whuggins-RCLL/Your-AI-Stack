import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const splitUses = (tool) =>
  (tool.uses || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

const getCategoryOptions = (tools = []) => {
  const categorySet = new Set();
  tools.forEach((tool) => {
    const uses = splitUses(tool);
    uses.forEach((use) => categorySet.add(use));
  });
  return ['All', ...Array.from(categorySet).sort((a, b) => a.localeCompare(b))];
};

const matchesCategory = (tool, categories) => {
  if (!categories.length || categories.includes('All')) return true;
  const uses = splitUses(tool);
  return categories.some((category) => uses.includes(category));
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

const toggleOption = (currentValues, option) => {
  if (option === 'All') return ['All'];
  const withoutAll = currentValues.filter((value) => value !== 'All');
  const next = withoutAll.includes(option) ? withoutAll.filter((value) => value !== option) : [...withoutAll, option];
  return next.length ? next : ['All'];
};

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

      <div className="hidden md:grid grid-cols-[230px_1fr] gap-6">
        <aside className="bg-surface-container-low rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-3">Category</p>
          <div className="space-y-2 max-h-[360px] overflow-auto custom-scrollbar pr-2">
            {categoryOptions.map((option) => (
              <button
                key={option}
                onClick={() => onFiltersChange({ ...filters, categories: toggleOption(filters.categories, option) })}
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
      </div>

      <div className="md:hidden flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {categoryOptions.map((option) => (
          <button
            key={option}
            onClick={() => onFiltersChange({ ...filters, categories: toggleOption(filters.categories, option) })}
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
