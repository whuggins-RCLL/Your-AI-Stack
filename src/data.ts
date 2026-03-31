export interface Tool {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  tags: string[];
  tier: string;
  logoUrl: string;
  url: string;
  isNew?: boolean;
  bookmarked?: boolean;
  helpUrls?: string[];
}

export const tools: Tool[] = [
  // Coding / App Building Tools
  {
    id: 'google-stitch',
    name: 'Google Stitch',
    description: 'AI-powered tool for rapidly building applications and websites.',
    bestFor: 'Rapid prototyping and app creation.',
    tags: ['Coding', 'App Builder'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/googlestitch/200/200',
    url: 'https://stitch.withgoogle.com/home'
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    description: 'Google\'s platform for prototyping and building with Gemini models.',
    bestFor: 'Prompt engineering and API integration.',
    tags: ['Coding', 'AI Models'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/aistudio/200/200',
    url: 'https://aistudio.google.com/'
  },
  {
    id: 'openai-codex',
    name: 'OpenAI Codex',
    description: 'AI system that translates natural language to code.',
    bestFor: 'Code generation and autocomplete.',
    tags: ['Coding', 'LLM'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/codex/200/200',
    url: 'https://openai.com/codex/'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Developer platform for version control, collaboration, and CI/CD.',
    bestFor: 'Source code management and collaboration.',
    tags: ['Coding', 'Version Control'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/github/200/200',
    url: 'https://github.com/'
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative interface design and prototyping tool.',
    bestFor: 'UI/UX design and team collaboration.',
    tags: ['Design', 'Prototyping'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/figma/200/200',
    url: 'https://www.figma.com/'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI-powered full-stack application generator.',
    bestFor: 'Generating complete web apps from prompts.',
    tags: ['Coding', 'App Builder'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/lovable/200/200',
    url: 'https://lovable.dev/'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: 'Anthropic\'s AI coding assistant powered by the Claude model family.',
    bestFor: 'Complex reasoning and code generation.',
    tags: ['Coding', 'Assistant'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/claudecode/200/200',
    url: 'https://claude.com/product/claude-code'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Frontend cloud platform for deploying and hosting web applications.',
    bestFor: 'Next.js hosting and seamless deployments.',
    tags: ['Deployment', 'Hosting'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/vercel/200/200',
    url: 'https://vercel.com/'
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'Collaborative browser-based IDE with integrated AI coding features.',
    bestFor: 'Browser-based development and quick setups.',
    tags: ['Coding', 'IDE'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/replit/200/200',
    url: 'https://replit.com/'
  },
  {
    id: 'google-sites',
    name: 'Google Sites',
    description: 'Tool for creating websites without programming experience. You can embed custom code via the embed feature, but there is currently no native AI for this tool.',
    bestFor: 'Simple internal or public websites.',
    tags: ['No-Code', 'Website Builder'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/googlesites/200/200',
    url: 'https://workspace.google.com/products/sites/'
  },
  {
    id: 'google-antigravity',
    name: 'Google Antigravity',
    description: 'Advanced AI coding harness and platform.',
    bestFor: 'AI-assisted software engineering.',
    tags: ['Coding', 'Engineering'],
    tier: 'Internal',
    logoUrl: 'https://picsum.photos/seed/antigravity/200/200',
    url: 'https://antigravity.google/product'
  },

  // Presentations - Core Tools
  {
    id: 'notebooklm-slides',
    name: 'NotebookLM Slide Decks',
    description: 'Create slide decks directly from your documents and notes using NotebookLM.',
    bestFor: 'Generating presentations from existing research and notes.',
    tags: ['Presentations', 'Core'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/notebooklm/200/200',
    url: 'https://support.google.com/notebooklm/answer/16757456',
    helpUrls: [
      'https://support.google.com/notebooklm/'
    ]
  },
  {
    id: 'gamma-presentations',
    name: 'Gamma',
    description: 'Create beautiful presentations, documents, and webpages in seconds with the power of generative AI.',
    bestFor: 'Visual storytelling and rapid deck creation.',
    tags: ['Presentations', 'Core'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/gamma/200/200',
    url: 'https://gamma.app/',
    helpUrls: [
      'https://help.gamma.app/en/',
      'https://help.gamma.app/en/collections/12178861-gamma-basics'
    ]
  },
  {
    id: 'google-slides',
    name: 'Google Slides',
    description: 'Create, edit, and collaborate on presentations online. Enhanced with Gemini AI features.',
    bestFor: 'Collaborative presentation editing and creation.',
    tags: ['Presentations', 'Core'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/googleslides/200/200',
    url: 'https://slides.google.com/',
    helpUrls: [
      'https://support.google.com/a/users/answer/9282488',
      'https://support.google.com/a/users/answer/10665800',
      'https://support.google.com/docs/answer/2763168',
      'https://workspace.google.com/training/'
    ]
  },
  {
    id: 'gemini-canvas',
    name: 'Gemini Canvas',
    description: 'A collaborative workspace within Gemini for drafting and editing content, including presentation outlines.',
    bestFor: 'Drafting presentation content and outlines with AI assistance.',
    tags: ['Presentations', 'Core'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/geminicanvas/200/200',
    url: 'https://gemini.google.com/',
    helpUrls: [
      'https://support.google.com/gemini/answer/16047321',
      'https://support.google.com/gemini/'
    ]
  },
  {
    id: 'chatgpt-canva',
    name: 'ChatGPT with Canva',
    description: 'Integrate ChatGPT with Canva to generate presentation templates and designs via conversational prompts.',
    bestFor: 'Generating design templates directly from ChatGPT.',
    tags: ['Presentations', 'Core'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/chatgptcanva/200/200',
    url: 'https://www.canva.com/help/chatgpt-templates/',
    helpUrls: [
      'https://help.openai.com/en/articles/11487775-apps-in-chatgpt',
      'https://www.canva.com/help/mcp-agent-setup/'
    ]
  },
  {
    id: 'canva-magic-studio',
    name: 'Canva + Magic Studio',
    description: 'Canva\'s suite of AI tools for generating designs, presentations, and visual content.',
    bestFor: 'All-in-one AI design and presentation generation.',
    tags: ['Presentations', 'Core'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/canvamagic/200/200',
    url: 'https://www.canva.com/magic/',
    helpUrls: [
      'https://www.canva.com/help/using-canva-ai/',
      'https://www.canva.com/help/using-magic-design/',
      'https://www.canva.com/design-school/lessons/boost-creativity-magic-studio'
    ]
  },

  // Presentations - Strong Additions
  {
    id: 'powerpoint-copilot',
    name: 'PowerPoint + Copilot',
    description: 'Microsoft PowerPoint enhanced with Copilot AI for generating slides, summarizing, and formatting.',
    bestFor: 'Enterprise presentation generation within the Microsoft ecosystem.',
    tags: ['Presentations', 'Strong Addition'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/powerpoint/200/200',
    url: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint/ai-powerpoint-generator',
    helpUrls: [
      'https://support.microsoft.com/en-us/office/create-a-new-presentation-with-copilot-in-powerpoint-3222ee03-f5a4-4d27-8642-9c387ab4854d',
      'https://support.microsoft.com/en-us/topic/copilot-tutorial-kickstart-a-presentation-d9fdc14f-3e6a-4e64-8daf-1faf2a34df94',
      'https://support.microsoft.com/en-us/topic/copilot-tutorial-create-a-presentation-with-a-prompt-67a277ba-eea3-45af-8f12-aaef02331052',
      'https://learn.microsoft.com/en-us/training/modules/present-copilot-microsoft-powerpoint/'
    ]
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'Generative AI presentation software that designs slides for you automatically.',
    bestFor: 'Quick, professionally designed slides without manual formatting.',
    tags: ['Presentations', 'Strong Addition'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/beautifulai/200/200',
    url: 'https://www.beautiful.ai/',
    helpUrls: [
      'https://www.beautiful.ai/presentation-maker',
      'https://www.beautiful.ai/presentations'
    ]
  },
  {
    id: 'pitch',
    name: 'Pitch',
    description: 'Collaborative presentation software with AI features for fast deck creation.',
    bestFor: 'Modern, collaborative team presentations.',
    tags: ['Presentations', 'Strong Addition'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/pitch/200/200',
    url: 'https://pitch.com/',
    helpUrls: [
      'https://pitch.com/product',
      'https://pitch.com/use-cases/ai-presentation-maker'
    ]
  },
  {
    id: 'prezi-ai',
    name: 'Prezi AI',
    description: 'Prezi\'s AI capabilities for creating engaging, non-linear presentations.',
    bestFor: 'Dynamic and conversational presentations.',
    tags: ['Presentations', 'Strong Addition'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/prezi/200/200',
    url: 'https://prezi.com/features/ai/',
    helpUrls: [
      'https://prezi.com/get-started/',
      'https://prezi.com/features/ai/'
    ]
  },

  // Presentations - Optional Additions
  {
    id: 'adobe-express-presentation',
    name: 'Adobe Express Presentation Maker',
    description: 'Create presentations with Adobe\'s generative AI features.',
    bestFor: 'Design-focused presentations with Adobe integrations.',
    tags: ['Presentations', 'Optional'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/adobeexpress/200/200',
    url: 'https://www.adobe.com/express/create/presentation',
    helpUrls: [
      'https://www.adobe.com/express/create/ai/presentation',
      'https://helpx.adobe.com/express/web/documents-and-presentations/create-presentations-with-generative-ai.html'
    ]
  },
  {
    id: 'apple-keynote',
    name: 'Apple Keynote',
    description: 'Apple\'s presentation software with powerful design tools.',
    bestFor: 'Mac users needing native, high-quality presentation software.',
    tags: ['Presentations', 'Optional'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/keynote/200/200',
    url: 'https://support.apple.com/keynote',
    helpUrls: [
      'https://support.apple.com/guide/keynote/welcome/mac'
    ]
  },
  {
    id: 'zoho-show',
    name: 'Zoho Show + Zia AI',
    description: 'Collaborative presentation software enhanced by Zoho\'s Zia AI.',
    bestFor: 'Users within the Zoho ecosystem.',
    tags: ['Presentations', 'Optional'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/zohoshow/200/200',
    url: 'https://www.zoho.com/show/',
    helpUrls: [
      'https://www.zoho.com/show/zia-ai.html',
      'https://help.zoho.com/portal/en/kb/show/ai-features'
    ]
  },

  // Spreadsheets and Working with Data Sets
  {
    id: 'google-sheets-gemini',
    name: 'Google Sheets + Gemini',
    description: 'Google Sheets enhanced with Gemini, =AI() functions, and Apps Script for data manipulation and automation.',
    bestFor: 'Data analysis, custom functions, and automated workflows in Google Workspace.',
    tags: ['Spreadsheets', 'Data Sets', 'Automation'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/googlesheets/200/200',
    url: 'https://sheets.google.com/',
    helpUrls: [
      'https://support.google.com/docs/answer/14356410',
      'https://support.google.com/docs/answer/15877199',
      'https://support.google.com/a/users/answer/15146419',
      'https://developers.google.com/apps-script/overview',
      'https://developers.google.com/apps-script/guides/sheets',
      'https://developers.google.com/apps-script/guides/sheets/functions'
    ]
  },
  {
    id: 'microsoft-excel-copilot',
    name: 'Microsoft Excel + Copilot',
    description: 'Excel powered by Copilot, featuring Claude/ChatGPT support, Office Scripts, and Python integration.',
    bestFor: 'Advanced data analysis, Python-based modeling, and enterprise spreadsheet automation.',
    tags: ['Spreadsheets', 'Data Sets', 'Automation', 'Python'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/excel/200/200',
    url: 'https://www.microsoft.com/en-us/microsoft-365/excel',
    helpUrls: [
      'https://support.microsoft.com/en-us/office/edit-with-copilot-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a',
      'https://support.microsoft.com/en-us/topic/choose-your-model-when-editing-with-copilot-in-excel-b2c3b3ec-154b-484b-84d0-914a80df395a',
      'https://support.microsoft.com/en-us/office/get-advanced-data-analysis-using-copilot-in-excel-app-skills-364e4ae9-9343-4d56-952a-5f62b0f70db6',
      'https://support.microsoft.com/en-us/office/introduction-to-python-in-excel-55643c2e-ff56-4168-b1ce-9428c8308545',
      'https://learn.microsoft.com/en-us/office/dev/scripts/overview/excel',
      'https://learn.microsoft.com/en-us/office/dev/scripts/',
      'https://support.microsoft.com/en-us/office/introduction-to-office-scripts-in-excel-9fbe283d-adb8-4f13-a75b-a81c6baf163a'
    ]
  },
  {
    id: 'google-colab',
    name: 'Google Colab + Gemini',
    description: 'Hosted Jupyter notebook service that requires no setup to use, while providing free access to computing resources including GPUs, now enhanced with Gemini.',
    bestFor: 'Machine learning, data science education, and collaborative Python coding.',
    tags: ['Data Sets', 'Coding', 'Python', 'Notebooks'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/colab/200/200',
    url: 'https://colab.google/',
    helpUrls: [
      'https://developers.google.com/colab',
      'https://developers.google.com/colab/notebooks',
      'https://blog.google/innovation-and-ai/technology/developers-tools/google-colab-ai-coding-features/',
      'https://codelabs.developers.google.com/codelabs/intro-gemini-25-pro-colab'
    ]
  },
  {
    id: 'kaggle',
    name: 'Kaggle',
    description: 'Platform for data science competitions, hosting datasets, and writing/sharing code in notebooks. Great for GenAI learning.',
    bestFor: 'Finding datasets, participating in ML competitions, and learning GenAI.',
    tags: ['Data Sets', 'Machine Learning', 'Notebooks', 'Education'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/kaggle/200/200',
    url: 'https://www.kaggle.com/',
    helpUrls: [
      'https://www.kaggle.com/docs',
      'https://www.kaggle.com/docs/notebooks',
      'https://www.kaggle.com/code',
      'https://blog.google/innovation-and-ai/technology/developers-tools/google-kaggle-genai-intensive-recap-2025/',
      'https://www.kaggle.com/learn-guide/5-day-agents'
    ]
  },
  {
    id: 'stanford-ai-playground',
    name: 'Stanford AI Playground',
    description: 'A sandbox environment for learning and testing AI.',
    bestFor: 'Learning, experimenting, and testing AI models in a safe, internal environment.',
    tags: ['Sandbox', 'Education', 'Testing'],
    tier: 'Internal',
    logoUrl: 'https://picsum.photos/seed/stanfordai/200/200',
    url: 'https://uit.stanford.edu/aiplayground'
  },

  // Music and Sound
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI music generation platform for creating full songs from text prompts.',
    bestFor: 'Creating original music tracks, songs, and audio clips quickly.',
    tags: ['Music and Sound', 'Music Generation', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/suno/200/200',
    url: 'https://suno.com/',
    helpUrls: [
      'https://suno.com/l/ai-music-app',
      'https://suno.com/l/make-music-with-ai',
      'https://suno.com/hub/how-to-make-a-song'
    ]
  },
  {
    id: 'elevenlabs-music',
    name: 'ElevenLabs Music + Sound Effects',
    description: 'AI audio platform offering music generation and advanced sound effects creation.',
    bestFor: 'Generating high-quality sound effects and music for videos, games, and media.',
    tags: ['Music and Sound', 'Music Generation', 'Sound Effects', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/elevenlabs/200/200',
    url: 'https://elevenlabs.io/',
    helpUrls: [
      'https://elevenlabs.io/docs/overview/capabilities/music',
      'https://elevenlabs.io/docs/overview/capabilities/music/best-practices',
      'https://elevenlabs.io/docs/overview/capabilities/sound-effects'
    ]
  },
  {
    id: 'google-lyria',
    name: 'Google Lyria 3 / Lyria 3 Pro',
    description: 'Google\'s advanced AI music generation models, available within Gemini and Workspace.',
    bestFor: 'Creating custom soundtracks and longer musical tracks within the Google ecosystem.',
    tags: ['Music and Sound', 'Music Generation', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/lyria/200/200',
    url: 'https://gemini.google.com/',
    helpUrls: [
      'https://ai.google.dev/gemini-api/docs/music-generation',
      'https://workspaceupdates.googleblog.com/2026/02/create-custom-soundtracks-with-lyria-3.html',
      'https://workspaceupdates.googleblog.com/2026/03/create-longer-musical-tracks-in-gemini-app-with-Lyria-3-Pro.html',
      'https://workspaceupdates.googleblog.com/2026/03/generate-custom-music-in-google-vids-powered-by-Lyria-3-and-Lyria-3-Pro.html'
    ]
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'AI music generator focused on high-fidelity song creation across various genres.',
    bestFor: 'Generating high-quality, genre-specific music tracks and songs.',
    tags: ['Music and Sound', 'Music Generation', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/udio/200/200',
    url: 'https://www.udio.com/',
    helpUrls: [
      'https://help.udio.com/',
      'https://help.udio.com/en/collections/11811237-song-creation'
    ]
  },
  {
    id: 'stable-audio',
    name: 'Stable Audio',
    description: 'AI music and sound generation tool by Stability AI, offering control over structure and length.',
    bestFor: 'Generating structured music tracks and sound design elements.',
    tags: ['Music and Sound', 'Music Generation', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/stableaudio/200/200',
    url: 'https://stableaudio.com/',
    helpUrls: [
      'https://stableaudio.com/user-guide',
      'https://stability.ai/guides/stable-audio-25-prompt-guide',
      'https://stability.ai/stable-audio'
    ]
  },
  {
    id: 'mistral-voxtral',
    name: 'Mistral Voxtral TTS / Voxtral Transcribe 2',
    description: 'Advanced text-to-speech and transcription models by Mistral AI.',
    bestFor: 'High-quality voice generation and accurate audio transcription.',
    tags: ['Music and Sound', 'Voice', 'Speech', 'Transcription'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/mistral/200/200',
    url: 'https://mistral.ai/news/voxtral-tts',
    helpUrls: [
      'https://docs.mistral.ai/models/voxtral-tts-26-03',
      'https://docs.mistral.ai/capabilities/audio/text_to_speech',
      'https://mistral.ai/news/voxtral-transcribe-2'
    ]
  },
  {
    id: 'adobe-podcast',
    name: 'Adobe Podcast / Enhance Speech',
    description: 'AI-powered audio recording and editing tool, featuring powerful speech enhancement.',
    bestFor: 'Cleaning up noisy audio recordings and making voiceovers sound professional.',
    tags: ['Music and Sound', 'Voice', 'Audio Cleanup'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/adobepodcast/200/200',
    url: 'https://podcast.adobe.com/',
    helpUrls: [
      'https://podcast.adobe.com/help',
      'https://podcast.adobe.com/en/enhance',
      'https://podcast.adobe.com/en/guides/how-enhance-speech-can-improve-your-recording-sound-quality'
    ]
  }
];
