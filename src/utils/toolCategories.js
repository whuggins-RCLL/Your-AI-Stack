/**
 * Direct mapping from tag values (lowercase) to display category names.
 * This is the primary categorization mechanism — each tool's tags array
 * is checked against this map to assign categories.
 */
const TAG_CATEGORY_MAP = {
  // Podcasts
  'podcasts': 'Podcasts',

  // AI Learning
  'learning': 'AI Learning',
  'education': 'AI Learning',
  'ai training': 'AI Learning',
  'study tools': 'AI Learning',
  'study support': 'AI Learning',
  'sandbox': 'AI Learning',

  // Legal Research & Analysis
  'legal research': 'Legal Research & Analysis',
  'legal': 'Legal Research & Analysis',
  'litigation': 'Legal Research & Analysis',

  // Coding & Development
  'coding': 'Coding & Development',
  'version control': 'Coding & Development',
  'developer tools': 'Coding & Development',
  'developer': 'Coding & Development',
  'data science': 'Coding & Development',
  'website builder': 'Coding & Development',
  'app builder': 'Coding & Development',
  'deployment': 'Coding & Development',
  'hosting': 'Coding & Development',
  'ai platform': 'Coding & Development',
  'open source': 'Coding & Development',

  // Design & Creative
  'design': 'Design & Creative',
  'image': 'Design & Creative',
  'prototyping': 'Design & Creative',

  // Video Generation
  'video': 'Video Generation',

  // Music & Audio
  'music and sound': 'Music & Audio',
  'music': 'Music & Audio',
  'audio': 'Music & Audio',
  'audio cleanup': 'Music & Audio',
  'music generation': 'Music & Audio',

  // Writing & Documents
  'writing': 'Writing & Documents',

  // Presentations & Productivity
  'presentations': 'Presentations & Productivity',
  'workplace': 'Presentations & Productivity',
  'meetings': 'Presentations & Productivity',
  'project management': 'Presentations & Productivity',
  'knowledge management': 'Presentations & Productivity',

  // Data, Math & Automation
  'spreadsheets': 'Data, Math & Automation',
  'data sets': 'Data, Math & Automation',
  'machine learning': 'Data, Math & Automation',
  'automation': 'Data, Math & Automation',
  'notebooks': 'Data, Math & Automation',
  'ml platform': 'Data, Math & Automation',
  'mlops': 'Data, Math & Automation',

  // Marketing & Sales
  'marketing': 'Marketing & Sales',
  'crm': 'Marketing & Sales',
  'social listening': 'Marketing & Sales',

  // General AI Assistants
  'general ai': 'General AI Assistants',
  'llm': 'General AI Assistants',
  'open model': 'General AI Assistants',
  'edge ai': 'General AI Assistants',

  // Research & Search
  'research': 'Research & Search',
  'search': 'Research & Search',
  'browser': 'Research & Search',
};

/**
 * Fallback keyword matching for tools whose tags don't resolve to any category.
 * These keywords are matched against name + description + bestFor + uses + url.
 */
const KEYWORD_RULES = [
  { name: 'Podcasts', keywords: ['podcast', 'episode', 'audio show'] },
  { name: 'Legal Research & Analysis', keywords: ['legal research', 'case law', 'litigation', 'legal drafting', 'contract review', 'due diligence'] },
  { name: 'AI Learning', keywords: ['ai literacy', 'academy', 'certification'] },
  { name: 'Coding & Development', keywords: ['code generation', 'code completion', 'coding assistant', 'app building'] },
  { name: 'Design & Creative', keywords: ['image generation', 'wireframe', 'ui design', 'generative art'] },
  { name: 'Video Generation', keywords: ['video generation', 'text-to-video'] },
  { name: 'Music & Audio', keywords: ['music generation', 'voice synthesis', 'text-to-speech'] },
  { name: 'Writing & Documents', keywords: ['writing assistant', 'grammar', 'proofreading'] },
  { name: 'Presentations & Productivity', keywords: ['slide deck', 'presentation maker', 'project management'] },
  { name: 'Data, Math & Automation', keywords: ['data analysis', 'spreadsheet', 'analytics platform'] },
  { name: 'Marketing & Sales', keywords: ['marketing campaign', 'ad creative'] },
  { name: 'General AI Assistants', keywords: ['general-purpose'] },
  { name: 'Research & Search', keywords: ['web research', 'academic search', 'search engine'] },
];

const buildSource = (tool = {}) =>
  [tool.name, tool.description, tool.bestFor, tool.uses, tool.url]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

export const isPodcastTool = (tool = {}) => {
  const tags = (Array.isArray(tool.tags) ? tool.tags : []).map((tag) => String(tag).toLowerCase());
  if (tags.includes('podcasts')) return true;
  const source = buildSource(tool);
  return ['podcast', 'episode', 'audio show'].some((term) => source.includes(term));
};

export const inferCategories = (tool = {}) => {
  const categories = new Set();

  // Primary: tag-based category mapping
  const tags = (Array.isArray(tool.tags) ? tool.tags : []).map((tag) => String(tag).toLowerCase());
  for (const tag of tags) {
    const category = TAG_CATEGORY_MAP[tag];
    if (category) categories.add(category);
  }

  // Secondary: keyword-based matching on description/uses/etc.
  const source = buildSource(tool);
  for (const rule of KEYWORD_RULES) {
    if (rule.name === 'Podcasts') {
      if (isPodcastTool(tool)) categories.add('Podcasts');
    } else if (rule.keywords.some((keyword) => source.includes(keyword))) {
      categories.add(rule.name);
    }
  }

  return categories.size > 0 ? Array.from(categories) : ['General'];
};

export const getCategoryOptions = (tools = []) => {
  const categorySet = new Set();
  tools.forEach((tool) => inferCategories(tool).forEach((category) => categorySet.add(category)));
  return ['All', ...Array.from(categorySet).sort((a, b) => a.localeCompare(b))];
};

export const matchesQuickFilterCategory = (tool = {}, quickFilter) => {
  if (!quickFilter || quickFilter === 'none') return true;

  if (quickFilter === 'podcasts') return isPodcastTool(tool);

  const categories = inferCategories(tool);

  if (quickFilter === 'legal-research') {
    return categories.includes('Legal Research & Analysis');
  }

  if (quickFilter === 'ai-learning') {
    return categories.includes('AI Learning');
  }

  return true;
};
