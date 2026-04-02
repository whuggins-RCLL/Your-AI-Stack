const CATEGORY_RULES = [
  { name: 'Podcasts', keywords: ['podcast', 'episode', 'audio show', 'listen', 'hosted by'] },
  { name: 'Legal Research & Analysis', keywords: ['legal research', 'case law', 'statute', 'litigation', 'lexis', 'westlaw', 'shepard', 'keycite', 'docket', 'legal drafting'] },
  { name: 'AI Learning', keywords: ['learning', 'tutorial', 'training', 'academy', 'course', 'learn ai', 'getting started', 'certification'] },
  { name: 'Coding & Development', keywords: ['code', 'coding', 'developer', 'debug', 'repository', 'software', 'app building', 'api development'] },
  { name: 'Design & Creative', keywords: ['design', 'ui', 'ux', 'wireframe', 'image generation', 'video generation', 'creative'] },
  { name: 'Writing & Documents', keywords: ['writing', 'document', 'draft', 'editing', 'summarization', 'note-taking', 'memo'] },
  { name: 'Productivity & Knowledge', keywords: ['productivity', 'knowledge management', 'project management', 'planning', 'workflow automation'] },
  { name: 'Data, Math & Automation', keywords: ['data', 'machine learning', 'mlops', 'model training', 'analytics', 'spreadsheet'] },
  { name: 'Marketing & Sales', keywords: ['marketing', 'campaign', 'brand', 'ad creative', 'social media'] }
];

const buildSource = (tool = {}) =>
  [tool.name, tool.description, tool.bestFor, tool.uses, tool.url]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

export const isPodcastTool = (tool = {}) => {
  const source = buildSource(tool);
  const hasPodcastKeyword = ['podcast', 'episode', 'audio show', 'listen'].some((term) => source.includes(term));
  const hasPodcastTag = (Array.isArray(tool.tags) ? tool.tags : []).some((tag) => String(tag).toLowerCase() === 'podcasts');
  return hasPodcastKeyword || (hasPodcastTag && /podcast|episode|audio|show/.test(source));
};

export const inferCategories = (tool = {}) => {
  const source = buildSource(tool);
  const categories = CATEGORY_RULES
    .filter((rule) => {
      if (rule.name === 'Podcasts') return isPodcastTool(tool);
      return rule.keywords.some((keyword) => source.includes(keyword));
    })
    .map((rule) => rule.name);

  return categories.length ? categories : ['General'];
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
    const hasDocs = (Array.isArray(tool.helpUrls) && tool.helpUrls.length > 0) || (Array.isArray(tool.officialTrainingDocs) && tool.officialTrainingDocs.length > 0);
    return categories.includes('AI Learning') || hasDocs;
  }

  return true;
};
