export interface Tool {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  tags: string[];
  uses?: string;
  tier: string;
  logoUrl: string;
  url: string;
  isNew?: boolean;
  bookmarked?: boolean;
  helpUrls?: string[];
  parentCompany?: string;
  summary?: string;
  tagCategories?: string;
  features?: string;
  notGoodFor?: string;
  officialTrainingDocs?: string[];
  stanfordUniversitySlsProvidedAccess?: string | boolean;
  robertCrownLawLibraryFavorite?: boolean;
  whyLaw?: string;
  gettingStarted?: string;
  videoUrl?: string;
  useCases?: Array<{
    title: string;
    persona: string;
    scenario: string;
    steps: string[];
    outcome: string;
  }>;
}

export const tools: Tool[] = [
  // Coding / App Building Tools
  {
    id: 'google-stitch',
    name: 'Google Stitch',
    description: 'Google Labs\' AI-powered UI design and frontend generation tool.',
    bestFor: 'UI design, wireframe-to-UI generation, and rapid prototyping.',
    uses: 'UI Design, Frontend Code Generation, Wireframe-to-UI, Rapid Prototyping, Design Exploration, Developer Handoff, App Mockups, Website Mockups, Visual Ideation, Design Iteration',
    tags: ['Podcasts', 'Coding', 'Design'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/googlestitch/200/200',
    url: 'https://stitch.withgoogle.com/',
    parentCompany: 'Google',
    summary: 'Google Stitch is Google\'s AI-powered UI design and frontend generation tool from Google Labs. It is designed to turn natural language prompts, images, wireframes, and iterative feedback into high-fidelity user interface designs and corresponding frontend code, helping teams move faster from concept to prototype and developer handoff.',
    tagCategories: 'AI design tool, UI design, UX design, frontend generation, prototyping, design-to-code, creative AI, product design, interface design, app design, web design, mobile design, developer tool, design workflow, Google Labs, multimodal AI, prompt-based design, wireframe generation, mockup generation, rapid prototyping, design system exploration, product ideation, visual design, app prototyping, website prototyping, AI productivity, design collaboration, developer handoff, generative UI',
    features: 'text-to-UI generation, image-to-UI generation, wireframe-to-UI generation, high-fidelity UI design, frontend code generation, conversational design iteration, AI-native canvas, theme adjustment, design exploration, image input support, text input support, code input support, design agent progress tracking, voice commands, real-time design critique, export to CSS, export to HTML, export to Figma, desktop and mobile UI generation, rapid prototype creation, iterative feedback loop, visual ideation, developer handoff support, multimodal prompting',
    notGoodFor: 'Not good for pixel-perfect production design in a full professional design suite, complex end-to-end product research, advanced interaction prototyping, or guaranteed production-ready code without developer review. It is also a weaker fit when a team needs deep manual control over every design detail, mature design-system governance, or traditional layer-based design workflows.',
    officialTrainingDocs: [
      'https://stitch.withgoogle.com/',
      'https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/',
      'https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-gemini-3/',
      'https://blog.google/innovation-and-ai/products/io-2025-tools-to-try-globally/'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'pomelli',
    name: 'Pomelli',
    description: 'Google Labs\' AI marketing tool for on-brand business campaign creation and product imagery.',
    bestFor: 'Marketing content generation, campaign creation, and social media assets.',
    uses: 'Marketing Content Generation, Campaign Creation, Product Photography, On-Brand Content, Business Marketing, Social Media Content, Ad Creative, Promotional Materials',
    tags: ['Podcasts', 'Marketing', 'Google'],
    tier: 'Experimental',
    logoUrl: 'https://picsum.photos/seed/pomelli/200/200',
    url: 'https://labs.google.com/pomelli/about/',
    parentCompany: 'Google',
    summary: 'Pomelli is Google Labs\' AI marketing tool for businesses. It is designed to generate scalable, tailored, on-brand marketing content using a company\'s business context, with support for campaign creation and studio-style product imagery through features like Photoshoot.',
    tagCategories: 'marketing AI, AI marketing tool, brand marketing, content generation, campaign generation, small business marketing, business productivity, creative AI, generative marketing, brand content creation, product marketing, image generation, on-brand content, ad creative, business growth tool, Google Labs, visual marketing, content automation, marketing workflow, AI design, promotional content, e-commerce marketing, social media content, business branding, marketing assistant',
    features: 'on-brand content generation, campaign creation, business context grounding, Business DNA, tailored marketing content, scalable content generation, Photoshoot feature, studio-style product imagery, product image transformation, AI image generation, marketing asset creation, desktop web app, business-focused workflow, brand-aware outputs, Google Labs experiment, business website-based setup, marketing prompt workflows',
    notGoodFor: 'Not good for general-purpose chat, coding, legal research, broad document analysis, or replacing a full end-to-end marketing team or design suite. It is also a weaker fit when a user needs highly manual creative control, advanced campaign operations, or guaranteed factual marketing claims without human review.',
    officialTrainingDocs: [
      'https://labs.google.com/pomelli/about/',
      'https://support.google.com/labs/answer/16715058',
      'https://support.google.com/labs/answer/16945066',
      'https://blog.google/innovation-and-ai/models-and-research/google-labs/pomelli/',
      'https://blog.google/innovation-and-ai/models-and-research/google-labs/pomelli-photoshoot/'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    description: 'Google\'s web-based environment for prototyping with Gemini models and app workflows.',
    bestFor: 'Prompt prototyping, API development, and multimodal model experimentation.',
    uses: 'Prompt Prototyping, API Development, Multimodal Testing, Code Generation, App Building, Model Experimentation, Starter App Generation, AI Workflow Building, Long-Context Testing',
    tags: ['Podcasts', 'Coding', 'Google'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/aistudio/200/200',
    url: 'https://aistudio.google.com/',
    parentCompany: 'Google',
    summary: 'Google AI Studio is Google\'s web-based developer environment for quickly experimenting with Gemini models and building generative AI applications. It is positioned as the fast path for developers, students, and researchers to prototype prompts, test multimodal capabilities, generate starter code, explore model options, and build apps with the Gemini API before moving into fuller production workflows if needed.',
    tagCategories: 'AI development platform, developer tool, generative AI platform, Gemini platform, prompt prototyping, API development, multimodal AI, model playground, AI app builder, LLM development, developer productivity, experimentation platform, AI studio, prompt engineering, rapid prototyping, developer workspace, code generation, AI testing, model evaluation, Google AI, Google developer tools, app development, research tool, student tool, API platform, AI workflow builder, model experimentation, web-based IDE, AI prototyping, Google ecosystem',
    features: 'prompt prototyping, browser-based playground, multimodal testing, text generation, image generation support, video generation support through supported models, audio capabilities through supported models, code generation, starter app generation, build mode, full-stack app building support, get code export, API key creation, Gemini API integration, model selection, prompt settings controls, chat prompts, structured output workflows, file upload support, long-context experimentation, live API support, real-time interaction testing, agentic tools, native code editing, app remixing, quickstart workflows, Google Workspace account access, browser-based developer workflow, model comparison, rapid iteration',
    notGoodFor: 'Not good for full enterprise production governance by itself, guaranteed deterministic outputs, high-stakes decisions without human review, or replacing mature end-to-end cloud deployment and observability platforms. It is also a weaker fit when a team specifically needs a production-managed environment with deeper infrastructure controls rather than a fast prototyping and developer experimentation workspace.',
    officialTrainingDocs: [
      'https://ai.google.dev/aistudio',
      'https://ai.google.dev/gemini-api/docs',
      'https://ai.google.dev/gemini-api/docs/ai-studio-quickstart',
      'https://ai.google.dev/gemini-api/docs/aistudio-build-mode',
      'https://ai.google.dev/gemini-api/docs/workspace'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
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
    description: 'Cloud platform for Git-based version control, collaboration, and end-to-end software delivery workflows.',
    bestFor: 'Source control, collaborative development, code review, and repository-centered software lifecycle workflows.',
    uses: 'Version Control, Code Hosting, Collaboration, Pull Requests, Code Review, Issue Tracking, CI/CD Automation, Project Management, Package Hosting, Documentation Hosting, Open Source',
    tags: ['Coding', 'Version Control'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/github/200/200',
    url: 'https://github.com/',
    parentCompany: 'Microsoft',
    summary: 'GitHub is a cloud-based software development platform for hosting code, collaborating on repositories, tracking work, automating workflows, and shipping software. GitHub\'s official product pages position it as a platform where developers, agents, and code come together, with core capabilities spanning repositories, pull requests, issues, discussions, Actions, security features, project management, package hosting, APIs, and client apps.',
    tagCategories: 'software development platform, code hosting, version control, Git platform, developer platform, collaboration platform, DevOps, CI/CD, project management, application security, repository hosting, open source platform, enterprise developer tooling, issue tracking, pull request workflow, package hosting, automation platform, API platform, developer productivity, team collaboration, software delivery, source control, engineering workflow, cloud development, documentation hosting, code review, planning tool, developer ecosystem, Microsoft platform, software lifecycle management',
    features: 'repositories, Git-based version control, pull requests, code review, issues, discussions, projects, milestones, Actions automation, CI/CD workflows, package hosting, webhooks, APIs, GitHub Apps, Marketplace, Dependabot alerts, dependency review, security advisories, code search, branch protection, organizations, teams, custom roles, GitHub Pages, wiki support, repository insights, mobile app, desktop app, CLI support, collaborative coding, workflow templates, hosted runners, self-hosted runners, project boards, task lists, enterprise administration',
    notGoodFor: 'Not good for general-purpose consumer chat, replacing a dedicated coding agent by itself, guaranteed correct code without review, or serving as a full substitute for engineering judgment, QA, security review, and release governance. It is also a weaker fit when someone only needs a lightweight local-only Git client rather than a broader cloud collaboration and software platform.',
    officialTrainingDocs: [
      'https://docs.github.com/en',
      'https://docs.github.com/en/get-started',
      'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git',
      'https://docs.github.com/repositories',
      'https://github.com/features'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
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
    description: 'AI-powered full-stack app builder for generating and deploying web applications from prompts.',
    bestFor: 'Full-stack app creation, rapid prototyping, and deployment workflows.',
    uses: 'Full-Stack App Building, Web App Creation, Rapid Prototyping, Website Building, SaaS Development, Internal Tool Building, Version Control, App Deployment, Team Collaboration, Design System Management',
    tags: ['Podcasts', 'Coding', 'App Builder'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/lovable/200/200',
    url: 'https://lovable.dev/',
    parentCompany: 'Lovable',
    summary: 'Lovable is an AI-powered full-stack app builder for creating, iterating on, and deploying web applications using natural language. It is designed for individuals and teams to go from idea to working app quickly, with real code, version history, publishing, cloud hosting, GitHub sync, security controls, and enterprise governance.',
    tagCategories: 'AI app builder, full-stack app builder, no-code, low-code, web app builder, website builder, developer tool, product prototyping, rapid prototyping, startup tool, internal tools, SaaS builder, AI development platform, prompt-to-app, natural language programming, frontend generation, backend generation, app deployment, cloud hosting, developer productivity, design systems, enterprise AI, team collaboration, workflow automation, business app builder, prototype builder, app development, vibe coding, web development, AI coding platform',
    features: 'natural language app generation, full-stack web app creation, real code generation, version history, revert to previous versions, GitHub sync, publishing to live URL, custom domains, cloud hosting, built-in database, authentication, storage, edge functions, Lovable Cloud, design systems, team workspaces, roles and permissions, SSO, SCIM, 2FA, security checks, enterprise governance, API support, Build with URL, prompt-based iteration, image-based app generation, sharing and collaboration, project settings, preview links, deployment workflows, integrations, reusable templates, reusable design systems',
    notGoodFor: 'Not good for highly customized hand-coded systems where teams want full manual control from the start, non-web software categories like native game engines or complex embedded systems, guaranteed production-ready code without review, or replacing engineering judgment for architecture, security, compliance, and QA. It is also a weaker fit when someone needs a traditional IDE-first workflow instead of a prompt-first full-stack builder.',
    officialTrainingDocs: [
      'https://docs.lovable.dev/introduction/welcome',
      'https://docs.lovable.dev/introduction/getting-started',
      'https://docs.lovable.dev/introduction/faq',
      'https://docs.lovable.dev/integrations/lovable-api',
      'https://docs.lovable.dev/features/publish'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: 'Anthropic\'s agentic coding tool for generating, editing, debugging, and shipping code across repositories.',
    bestFor: 'Code generation, review, debugging, refactoring, and autonomous developer workflows.',
    uses: 'Code Generation, Code Review, Bug Fixing, Refactoring, Repository Navigation, Terminal Development, Debugging, Test Workflows, Autonomous Coding Tasks, Codebase Exploration',
    tags: ['Podcasts', 'Coding', 'Assistant'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/claudecode/200/200',
    url: 'https://www.anthropic.com/claude-code',
    parentCompany: 'Anthropic',
    summary: 'Claude Code is Anthropic\'s agentic coding tool for developers. It is designed to help with code generation, editing, debugging, refactoring, repository navigation, terminal-based development, and longer-running software tasks from the CLI and supported IDE surfaces. Anthropic also describes it as supporting more autonomous development workflows, including sandboxing and enterprise controls.',
    tagCategories: 'AI coding agent, coding assistant, software engineering, developer tools, code generation, code review, bug fixing, refactoring, repository assistant, terminal assistant, CLI tool, IDE assistant, agentic coding, engineering productivity, DevTools, automation, codebase understanding, debugging assistant, test workflow support, enterprise developer tooling, programming assistant, cloud development, local development, software delivery, code modernization, AI developer workflow',
    features: 'natural language coding, terminal integration, CLI usage, code editing, bug fixing, refactoring, repository navigation, autonomous coding tasks, IDE support, VS Code extension, file diffs, longer-running tasks, sandboxing, filesystem isolation, network isolation, enterprise admin controls, usage analytics, model-powered development, code reasoning, project-aware assistance, codebase exploration, implementation support, developer workflow acceleration, cloud and local surfaces, documentation-aware coding, environment-aware assistance',
    notGoodFor: 'Not good for non-software knowledge work, guaranteed correct code without review, production-critical security decisions without human oversight, or tasks outside supported developer workflows and integrations. It should be treated as a development copilot/agent, not a substitute for engineering judgment, code review, testing, or release governance.',
    officialTrainingDocs: [
      'https://docs.anthropic.com/en/docs/claude-code',
      'https://docs.anthropic.com/en/docs/claude-code/overview',
      'https://docs.anthropic.com/en/docs/claude-code/reference',
      'https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Cloud platform for deploying, scaling, and operating modern web and AI applications.',
    bestFor: 'Web app deployment, preview workflows, managed hosting, and frontend-first production delivery.',
    uses: 'Web App Deployment, Cloud Hosting, Preview Deployments, Serverless Functions, Edge Computing, CI/CD, DNS Management, Analytics & Observability, AI App Infrastructure, Monorepo Support',
    tags: ['Deployment', 'Hosting'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/vercel/200/200',
    url: 'https://vercel.com/',
    parentCompany: 'Vercel',
    summary: 'Vercel is a cloud platform for building, deploying, scaling, and securing modern web applications and AI-powered products. Vercel positions itself as an AI Cloud for developers, combining hosting, preview deployments, frontend infrastructure, compute, collaboration workflows, observability, security, and developer tooling for shipping web apps faster.',
    tagCategories: 'cloud platform, web deployment, frontend cloud, developer platform, hosting platform, AI cloud, software development platform, deployment platform, serverless platform, edge platform, modern web infrastructure, DevOps, CI CD, preview deployments, frontend infrastructure, web performance, observability, security platform, developer productivity, cloud development, app hosting, web app platform, Next.js platform, AI app infrastructure, platform engineering, full stack deployment, edge compute, developer workflow, collaboration platform, application platform',
    features: 'git-based deployments, preview deployments, production deployments, custom domains, SSL, edge network, serverless functions, edge functions, observability, analytics, logs, speed insights, web analytics, storage options, cron jobs, environment variables, monorepo support, framework detection, CLI, API access, templates, project dashboards, team collaboration, access controls, enterprise plans, secure deployment workflows, AI SDK, AI Gateway, Workflow for agents and stateful jobs, Functions, Queues, build caching, rollback support, DNS management, local development support, framework support, zero-config deployments, global infrastructure',
    notGoodFor: 'Not good for general-purpose consumer chat, replacing engineering judgment for architecture or security, fully offline or self-hosted workflows by default, or guaranteeing correct application behavior without testing and review. It is also a weaker fit when a team wants raw low-level infrastructure control instead of a managed platform optimized for web and AI app delivery.',
    officialTrainingDocs: [
      'https://vercel.com/docs',
      'https://vercel.com/docs/getting-started-with-vercel',
      'https://vercel.com/docs/fundamentals',
      'https://vercel.com/docs/projects',
      'https://vercel.com/docs/ai-sdk',
      'https://vercel.com/academy'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'google-vertex-ai',
    name: 'Google Vertex AI',
    description: 'Google Cloud\'s managed AI platform for developing, tuning, and deploying ML and generative AI applications.',
    bestFor: 'Enterprise AI development, model deployment, agent workflows, and production MLOps.',
    uses: 'ML Model Training, Model Deployment, Generative AI Development, Agent Building, Model Tuning, Evaluation, MLOps, Enterprise AI Governance, Multimodal App Development, Production AI Management',
    tags: ['Podcasts', 'AI Platform', 'Google Cloud'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/vertexai/200/200',
    url: 'https://cloud.google.com/vertex-ai',
    parentCompany: 'Google',
    summary: 'Google Vertex AI is Google Cloud\'s fully managed, unified AI development platform for building, customizing, deploying, and operating machine learning models and generative AI applications. It is designed for enterprise and developer workflows across model access, prompt and app prototyping, agent building, tuning, MLOps, deployment, evaluation, and production management using Google models and third-party models.',
    tagCategories: 'AI platform, machine learning platform, generative AI platform, enterprise AI, developer platform, MLOps, model deployment, model training, model hosting, AI app development, agent platform, Google Cloud, Vertex AI Studio, Model Garden, enterprise search, recommendation systems, data science platform, ML engineering, prompt engineering, multimodal AI, LLM platform, AI operations, model evaluation, AI governance, cloud AI, production AI, managed AI infrastructure, foundation models, AI development environment, enterprise developer tooling',
    features: 'model hosting, model training, custom training, AutoML, foundation model access, Gemini access, Model Garden, Vertex AI Studio, prompt prototyping, agent building, evaluation tools, tuning, supervised fine-tuning, model deployment, endpoint management, REST API, gRPC API, client libraries, notebooks, pipelines, batch prediction, online prediction, vector search, feature store capabilities, data labeling support, monitoring, observability, security controls, enterprise governance, multimodal app development, third-party model access, managed infrastructure, retrieval and grounding workflows, search and recommendation capabilities, experiment workflows, production management, SDK support for Python Go Java and Node.js',
    notGoodFor: 'Not good for simple consumer chat use, guaranteed deterministic outputs, high-stakes decisions without human review, or teams that only want a lightweight prototype tool with no cloud setup. It is also a weaker fit when someone needs a local-only development workflow or a narrowly focused single-purpose assistant instead of a broad enterprise AI and ML platform.',
    officialTrainingDocs: [
      'https://docs.cloud.google.com/vertex-ai/docs',
      'https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform',
      'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/overview',
      'https://docs.cloud.google.com/vertex-ai/docs/reference',
      'https://docs.cloud.google.com/vertex-ai/generative-ai/docs'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'AI-powered browser development platform for building, deploying, and hosting apps.',
    bestFor: 'Full-stack app building, rapid prototyping, and integrated deployment workflows.',
    uses: 'Full-Stack App Building, Web App Creation, Mobile App Building, Dashboard Building, Rapid Prototyping, Coding, Debugging, Deployment & Hosting, Agent-Assisted Development, Collaboration',
    tags: ['Podcasts', 'Coding', 'IDE'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/replit/200/200',
    url: 'https://replit.com/',
    parentCompany: 'Replit',
    summary: 'Replit is an AI-powered software creation platform for building, iterating on, deploying, and hosting apps from the browser. Replit positions the product around Agent-assisted development, integrated infrastructure, and fast idea-to-app workflows, with support for web apps, mobile apps, dashboards, documents, connected-service queries, and collaborative project work.',
    tagCategories: 'AI app builder, AI coding platform, software development platform, browser IDE, cloud development, developer tool, full-stack app builder, coding assistant, agentic development, rapid prototyping, web app builder, mobile app builder, dashboard builder, startup tool, internal tools, SaaS builder, developer productivity, no-setup development, hosting platform, cloud IDE, team collaboration, educational coding platform, deployment platform, app hosting, natural language programming, vibe coding, AI developer platform, browser-based development, prototyping platform, app creation tool',
    features: 'Agent-assisted app creation, natural language app generation, browser-based coding, full-stack app generation, built-in hosting, database integration, authentication, monitoring, instant deployment, preview environment, design canvas, multi-artifact projects, mobile app generation, dashboard generation, document and file generation, connected service queries, integrations with AI providers, managed AI credentials, optional BYOK, real-time collaboration, version control integration, custom domains, SSL, team workspaces, enterprise controls, SSO and SAML, admin controls, mobile access, prompt-based iteration, debugging assistance, code suggestions, documentation generation, web app publishing, agent chat, autonomous modes, parallel task execution',
    notGoodFor: 'Not good for highly specialized local-only development workflows, guaranteed correct code without review, replacing engineering judgment for architecture, security, QA, and production operations, or teams that need a traditional desktop IDE-first workflow with full manual control over every environment detail. It is also a weaker fit when someone only wants a lightweight coding assistant rather than an integrated build-host-deploy platform.',
    officialTrainingDocs: [
      'https://docs.replit.com/',
      'https://docs.replit.com/core-concepts/how-replit-works',
      'https://docs.replit.com/core-concepts/agent',
      'https://docs.replit.com/getting-started/intro-replit',
      'https://docs.replit.com/getting-started/quickstarts/ask-ai'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI editor and coding agent for repository-aware software development.',
    bestFor: 'Code editing, multi-file changes, bug fixing, and codebase understanding.',
    uses: 'Code Editing, Code Generation, Bug Fixing, Code Review, Refactoring, Codebase Understanding, Terminal Workflows, Repository Navigation, Multi-File Editing, Cloud Agent Tasks, Semantic Code Search',
    tags: ['Podcasts', 'Coding', 'AI IDE'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/cursor/200/200',
    url: 'https://cursor.com/',
    parentCompany: 'Anysphere',
    summary: 'Cursor is an AI editor and coding agent for software development. It is designed to help developers understand codebases, plan and build features, fix bugs, review changes, run terminal workflows, and work with frontier coding models inside an IDE-style environment, with additional support for CLI, APIs, cloud agents, rules, and agent skills.',
    tagCategories: 'AI coding agent, AI code editor, coding assistant, software engineering, developer tool, code generation, code review, bug fixing, refactoring, repository assistant, IDE assistant, terminal assistant, CLI tool, agentic coding, engineering productivity, DevTools, automation, codebase understanding, debugging assistant, test workflow support, programming assistant, cloud development, local development, software delivery, code modernization, AI developer workflow, developer platform, code search, autonomous coding, pair programming',
    features: 'codebase understanding, semantic code search, feature planning, code generation, code editing, bug fixing, refactoring, diff review, terminal command execution, web fetching, browser tool use, checkpoints and restore, rules system, AGENTS.md support, team rules, user rules, project rules, agent skills, CLI support, cloud agents, API access, analytics API, admin API, AI code tracking API, model selection, max context mode, composer workflows, plan mode, code review workflows, repo-aware assistance, multi-file editing, testing assistance, GitHub integration, GitLab integration, JetBrains integration, Slack integration, Linear integration',
    notGoodFor: 'Not good for non-coding general productivity work, guaranteed correct code without review, replacing engineering judgment for architecture, security, testing, and release decisions, or teams that want a purely manual traditional IDE workflow with no agentic assistance. It is also a weaker fit when someone only needs a lightweight chat assistant rather than a code editor and coding-agent platform.',
    officialTrainingDocs: [
      'https://cursor.com/docs',
      'https://cursor.com/docs/get-started/quickstart',
      'https://cursor.com/docs/agent/overview',
      'https://cursor.com/docs/cli/overview',
      'https://cursor.com/docs/api'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    description: 'AI-native IDE and coding agent platform for repository-aware software development.',
    bestFor: 'Code editing, autocomplete, agentic coding, and multi-file repository workflows.',
    uses: 'Code Editing, Code Generation, Bug Fixing, Code Review, Refactoring, Codebase Understanding, Terminal Workflows, Repository Navigation, Autocomplete, Voice Input Coding, Multi-File Editing',
    tags: ['Podcasts', 'Coding', 'AI IDE'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/windsurf/200/200',
    url: 'https://windsurf.com/',
    parentCompany: 'Cognition',
    summary: 'Windsurf is an AI-native IDE and coding agent platform for software development. It is designed to help developers understand codebases, generate and edit code, navigate repositories, run terminal workflows, and collaborate with agentic tools such as Cascade, Tab, Chat, Command, and Supercomplete inside its editor and plugins.',
    tagCategories: 'AI coding agent, AI IDE, coding assistant, software engineering, developer tool, code generation, code review, bug fixing, refactoring, repository assistant, IDE assistant, terminal assistant, agentic coding, engineering productivity, DevTools, automation, codebase understanding, debugging assistant, test workflow support, programming assistant, cloud development, local development, software delivery, code modernization, AI developer workflow, code search, autonomous coding, pair programming, developer platform, enterprise developer tooling',
    features: 'codebase understanding, Cascade agent, code and chat modes, tool calling, voice input, checkpoints, real-time awareness, linter integration, autocomplete, Supercomplete, inline code suggestions, Tab to Jump, Tab to Import, natural-language code edits, Command, terminal command generation, multi-file editing, repo-aware assistance, model selection, in-house SWE models, Claude and GPT model support, BYOK model support for eligible users, plugins for JetBrains and VS Code, browser-based docs and onboarding, settings import from VS Code and Cursor, SSH support, Dev Containers, WSL support, extension marketplace support, gitignore access controls, team and enterprise support',
    notGoodFor: 'Not good for non-coding general productivity work, guaranteed correct code without review, replacing engineering judgment for architecture, security, testing, and release decisions, or teams that want a purely manual traditional IDE workflow with no agentic assistance. It is also a weaker fit when someone only needs a lightweight chat assistant rather than an AI-native editor and coding-agent platform.',
    officialTrainingDocs: [
      'https://docs.windsurf.com/get-started/overview',
      'https://docs.windsurf.com/windsurf/getting-started',
      'https://docs.windsurf.com/windsurf/cascade/cascade',
      'https://docs.windsurf.com/tab/overview',
      'https://docs.windsurf.com/command/windsurf-overview'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
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
    description: 'Google\'s agent-first development platform for autonomous software engineering workflows.',
    bestFor: 'Agentic software development, autonomous coding, and complex engineering tasks.',
    uses: 'Agentic Software Development, Autonomous Code Generation, Code Review, Debugging, Full-Stack App Building, Deployment, Agent Orchestration, Complex Engineering Tasks, Browser-Integrated Coding',
    tags: ['Podcasts', 'Coding', 'Engineering'],
    tier: 'Internal',
    logoUrl: 'https://picsum.photos/seed/antigravity/200/200',
    url: 'https://antigravity.google/',
    parentCompany: 'Google',
    summary: 'Google Antigravity is Google\'s agent-first development platform for software engineering. It is designed to let developers manage autonomous coding agents that can plan, code, browse, validate, iterate, and help build applications across workspaces, with a more visual and agent-managed experience than a traditional coding assistant or terminal-first tool.',
    tagCategories: 'AI coding agent, agentic development platform, developer tool, software engineering, coding assistant, autonomous coding, repository assistant, IDE alternative, browser-integrated coding, engineering productivity, code generation, code review, debugging, refactoring, agent orchestration, developer workflow, AI IDE, workspace management, mission control for agents, cloud development, app development, developer platform, Google AI, Gemini ecosystem, full-stack development, software delivery, prompt-based development, development automation, codebase understanding',
    features: 'agent management, autonomous planning, code generation, code editing, browser integration, web browsing for tasks, validation workflows, iterative development, workspace-based development, implementation plans, agent-first interface, multi-step task execution, full-stack app building, deployment support, Google Cloud workflows, coding assistance beyond autocomplete, project-aware assistance, long-horizon engineering tasks, task-oriented development, skills support, visual development environment, complex engineering task handling, browser-based IDE experience, agent coordination, cloud app workflows, integration with Gemini models',
    notGoodFor: 'Not good for non-coding general productivity work, guaranteed correct code without review, highly manual terminal-only workflows for users who prefer a CLI-first experience, or replacing engineering judgment for architecture, security, testing, and release decisions. It is also a weaker fit when someone specifically wants a lightweight terminal-native tool rather than a visual agent-management development platform.',
    officialTrainingDocs: [
      'https://antigravity.google/docs',
      'https://codelabs.developers.google.com/getting-started-google-antigravity',
      'https://codelabs.developers.google.com/building-with-google-antigravity',
      'https://codelabs.developers.google.com/getting-started-with-antigravity-skills',
      'https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
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
    description: 'AI music creation platform for generating songs, vocals, and instrumentals from prompts and uploads.',
    bestFor: 'Music generation, songwriting prototyping, and browser-first audio ideation.',
    uses: 'Music Generation, Song Creation, Vocal Generation, Instrumental Creation, Beat Making, Audio Editing, Songwriting, Cover Creation, Music Prototyping, Podcast Intros & Outros',
    tags: ['Music and Sound', 'Music Generation', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/suno/200/200',
    url: 'https://suno.com/',
    parentCompany: 'Suno, Inc.',
    summary: 'Suno is an AI music creation platform for generating original songs, vocals, instrumentals, and audio edits from prompts and uploads. It is designed for creators, songwriters, producers, and content teams who want to make music quickly in the browser or mobile app, with added production workflows through Suno Studio.',
    tagCategories: 'AI music generator, music AI, generative audio, song generator, audio creation, songwriting tool, music production, browser-based DAW, creative AI, content creation, royalty-free music, vocal generation, instrumental generation, beat making, producer tool, songwriter assistant, audio editing, music workflow, creator economy, social media music, commercial music creation, audio prototyping, studio tool, generative media, consumer AI, creator platform, music ideation, web app, mobile app',
    features: 'text-to-music generation, song generation, lyric-based generation, vocal generation, instrumental generation, audio uploads, cover creation, extend songs, crop songs, replace section editing, remaster, download audio and video files, web app, iOS app, Android app, private and link-only sharing, library management, style prompting, creative sliders, prompt boosting, Studio multitrack editor, stem extraction, MIDI export, loop recording, EQ, tempo adjustment, generative audio workstation, browser-based production workflow, persona voices, commercial-use plans, community publishing',
    notGoodFor: 'Not good for precise manual audio engineering like a traditional professional DAW, guaranteed copyright-safe outputs without review, highly deterministic production results, or replacing human music judgment for final release-quality mastering and rights decisions. It is also a weaker fit when someone needs advanced offline studio production instead of a browser-first AI music workflow.',
    officialTrainingDocs: [
      'https://help.suno.com/',
      'https://help.suno.com/en/categories/550017',
      'https://help.suno.com/en/articles/7940161',
      'https://help.suno.com/en/categories/1708865',
      'https://suno.com/'
    ]
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI audio platform for high-quality speech, voice agents, dubbing, and audio generation workflows.',
    bestFor: 'Text-to-speech, voice cloning, localization, and conversational voice product development.',
    uses: 'Text-to-Speech, Voice Cloning, Conversational AI Agents, Dubbing & Localization, Voiceover Production, Podcast Narration, Audiobook Production, Sound Effects, Call Automation, Multilingual Audio',
    tags: ['Music and Sound', 'Voice', 'Audio'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/elevenlabs/200/200',
    url: 'https://elevenlabs.io/',
    parentCompany: 'ElevenLabs',
    summary: 'ElevenLabs is an AI audio platform for generating, editing, and deploying realistic speech, voice agents, and other audio experiences. It is designed for creators, developers, and enterprises working on text to speech, speech to text, voice cloning, dubbing, conversational AI, sound effects, music, and production workflows through web apps, APIs, and SDKs.',
    tagCategories: 'AI voice platform, voice AI, audio AI, text to speech, speech to text, voice cloning, conversational AI, voice agents, audio generation, generative audio, dubbing, creator tools, developer platform, enterprise AI, customer support AI, call automation, voiceover tool, podcast production, audiobook production, media localization, accessibility technology, synthetic voice, speech synthesis, audio editing, API platform, multimodal AI, creator economy, production workflow, real-time voice, AI communications',
    features: 'text to speech, speech to text, voice cloning, instant voice cloning, professional voice cloning, conversational AI, voice agents, agent platform, low-latency voice interactions, multilingual support, 70 plus languages, web app, REST API, Python SDK, TypeScript SDK, dubbing, voice changer, voice isolator, sound effects generation, AI music generation, Studio editor, captions, collaboration, multilingual audio workflows, audio timeline editing, custom voices, voice design, marketplace voices, enterprise security, SSO support, trust center resources, API reference, creator workflows, customer service workflows, call automation, voiceovers, audiobooks, podcast narration, localization workflows',
    notGoodFor: 'Not good for guaranteed factual accuracy in spoken content without review, replacing human judgment for legal or brand-sensitive voice use, unrestricted cloning of voices without consent, or advanced manual audio engineering like a full traditional DAW. It is also a weaker fit when someone only needs a general-purpose chatbot rather than a specialized voice and audio platform.',
    officialTrainingDocs: [
      'https://elevenlabs.io/docs/overview/intro',
      'https://elevenlabs.io/api',
      'https://elevenlabs.io/text-to-speech',
      'https://elevenlabs.io/conversational-ai',
      'https://elevenlabs.io/help'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'westlaw-precision',
    name: 'Westlaw Precision',
    description: 'Legal research platform for case law, statutes, citator analysis, and AI-assisted litigation workflows.',
    bestFor: 'Authority-backed legal research, citation validation, and litigation preparation.',
    uses: 'Legal Research, Case Law Search, Statute & Regulation Research, Citation Analysis, Document Validation, Docket Search, AI-Assisted Legal Research, Litigation Prep, Appellate Research',
    tags: ['Legal Research', 'Case Law', 'Litigation'],
    tier: 'Stanford Licensed',
    logoUrl: 'https://picsum.photos/seed/westlawprecision/200/200',
    url: 'https://legal.thomsonreuters.com/en/westlaw/versions-of-westlaw-plans',
    parentCompany: 'Thomson Reuters',
    summary: 'Westlaw Precision is Thomson Reuters\' flagship legal research platform for lawyers and legal professionals. It is designed to help users research case law, statutes, regulations, and secondary sources more efficiently, with features for citation analysis, document validation, litigation research, docket search, and AI-assisted research through Westlaw Precision with CoCounsel.',
    tagCategories: 'legal research, legal tech, research platform, litigation research, law firm technology, in-house legal tech, legal AI, professional services AI, case law research, statutory research, regulatory research, legal drafting support, citation analysis, legal workflow platform, enterprise legal technology, document intelligence, legal productivity, litigation support, due diligence, docket research, appellate research, trial prep, legal knowledge work, lawyer tools, Thomson Reuters legal, AI-assisted legal research',
    features: 'case law search, statute search, regulation search, secondary source search, KeyCite citation analysis, KeyCite Overruled in Part, KeyCite Cited With, Quick Check, AI-Assisted Research, CoCounsel integration, AI Jurisdictional Surveys, Claims Explorer, docket search, case citation lookup, research filters, legal document linking, history and treatment analysis, search and browse by topic, research validation, authority checking, legal question answering with linked authority, workflow-oriented legal research, research history, saved workspaces, training videos, onboarding resources, help center support',
    notGoodFor: 'Not good for general-purpose consumer chat, coding workflows, non-legal business productivity, guaranteed legal correctness without attorney review, or replacing legal judgment in high-stakes matters. It is also a weaker fit when a user mainly wants broad document drafting or autonomous workflow execution instead of a primary legal research and authority-validation platform.',
    officialTrainingDocs: [
      'https://training.thomsonreuters.com/legal-westlaw-precision',
      'https://www.thomsonreuters.com/en-us/help/westlaw-precision',
      'https://training.thomsonreuters.com/category/Westlaw%20Precision/280999852',
      'https://training.thomsonreuters.com/playlist/1_eqrtpgqo'
    ],
    stanfordUniversitySlsProvidedAccess: true,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'lexis-protege',
    name: 'Lexis Protégé',
    description: 'Personalized legal AI assistant inside Lexis+ for research, drafting, and workflow-oriented legal tasks.',
    bestFor: 'Legal drafting, research synthesis, document analysis, and citation-grounded legal workflows.',
    uses: 'Legal Research, Legal Drafting, Case Summarization, Document Analysis, Memo Drafting, Brief Drafting, Interrogatory Drafting, Email Drafting, Legal Workflow Automation, Citation-Backed Research',
    tags: ['Legal Research', 'Drafting', 'Legal AI'],
    tier: 'Stanford Licensed',
    logoUrl: 'https://picsum.photos/seed/lexisprotege/200/200',
    url: 'https://www.lexisnexis.com/en-us/products/lexis-plus-protege.page',
    parentCompany: 'LexisNexis',
    summary: 'Lexis Protégé is LexisNexis\'s personalized AI assistant for legal professionals, delivered within Lexis+ AI and Lexis+ with Protégé. It is designed to help with legal drafting, research, summarization, analysis, and workflow-based legal work using trusted LexisNexis content and linked authority, with newer releases emphasizing purpose-built legal workflows and personalization.',
    tagCategories: 'legal AI, legal research, legal drafting, legal tech, AI assistant, professional services AI, law firm technology, in-house legal tech, litigation support, document analysis, legal workflow platform, enterprise legal technology, legal productivity, case law research, statutory research, regulatory research, citation-backed AI, legal knowledge work, lawyer tools, drafting assistant, research assistant, workflow automation, legal analysis, generative AI, agentic AI, legal operations, document intelligence, authority-grounded AI, Lexis+ AI, legal professional tool',
    features: 'legal drafting, legal research, legal summarization, legal analysis, personalized AI assistance, workflow-based legal tasks, grounded answers with authority, trusted LexisNexis content integration, multi-turn suggestions, draft mode, find similar briefs pleadings and motions, draft interrogatories, memo drafting, email drafting, legal question answering, case summarization, profile setup and personalization, secure legal AI workspace, linked citations, purpose-built legal workflows, broader AI task support inside Lexis+ AI, training videos, university courses, onboarding resources',
    notGoodFor: 'Not good for general-purpose consumer chat, coding workflows, non-legal everyday productivity, guaranteed legal correctness without attorney review, or replacing legal judgment in high-stakes matters. It is also a weaker fit when the user mainly wants a broad autonomous business agent rather than a legal-specific assistant grounded in LexisNexis authority and workflows.',
    officialTrainingDocs: [
      'https://www.lexisnexis.com/en-us/products/lexis-plus-protege.page',
      'https://help.lexisnexis.com/Flare/lexisplusai/US/en_US/Content/Protege/protegeintro.htm',
      'https://supportcenter.lexisnexis.com/app/answers/answer_view/a_id/1128873/~/learning-lexis%2B-ai-prot%C3%A9g%C3%A9---training-videos',
      'https://www.lexisnexis.com/university/Course.aspx?classInfo=Crs~1131~67590',
      'https://www.lexisnexis.com/en-us/training/default.page'
    ],
    stanfordUniversitySlsProvidedAccess: true,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'mistral-le-chat',
    name: 'Mistral',
    description: 'General-purpose Mistral AI assistant experience delivered through Le Chat.',
    bestFor: 'Writing, summarization, research, coding support, and enterprise knowledge workflows.',
    uses: 'Writing, Research, Brainstorming, Coding, Summarization, Document Analysis, Web Search, Deep Research, Voice Chat, Enterprise Knowledge Workflows, Agent Building',
    tags: ['Assistant', 'Research', 'Coding'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/mistrallechat/200/200',
    url: 'https://mistral.ai/products/le-chat',
    parentCompany: 'Mistral AI',
    summary: 'Mistral is Mistral AI\'s general-purpose AI assistant experience, delivered through Le Chat, for conversation, writing, summarization, research, coding help, document analysis, web-assisted answers, and enterprise knowledge workflows. Mistral also supports a broader developer and enterprise platform through its API, Studio, models, agents, and related products, but Le Chat is the main end-user assistant product.',
    tagCategories: 'AI assistant, conversational AI, chatbot, productivity, writing assistant, research assistant, coding assistant, multimodal AI, enterprise AI, business productivity, generative AI, knowledge work, learning assistant, summarization tool, document analysis, search assistant, voice AI, reasoning assistant, agent platform, developer platform, API model, enterprise knowledge assistant, workflow assistant, secure AI assistant, European AI platform, model provider, personal productivity, team productivity, enterprise search, agentic workflows',
    features: 'natural language chat, writing help, summarization, brainstorming, document upload and understanding, image understanding, web search, deep research, agents, projects, libraries, connectors, canvas, code interpreter, voice mode, think mode, chat sharing, enterprise deployments, secure knowledge access, API platform, SDK support, model access, structured developer docs, team and enterprise tiers, multimodal workflows, reasoning support, up-to-date answers with sources, custom enterprise integrations, developer playground, app-building support, model selection, secure admin controls',
    notGoodFor: 'Not good for guaranteed factual accuracy without verification, high-stakes legal or medical decisions without human review, fully deterministic outputs, or replacing specialized tools when the user specifically needs a dedicated coding IDE, a full production ML platform, or a traditional search/database product. It is also a weaker fit when someone only wants a narrow single-purpose workflow rather than a broad assistant and AI platform.',
    officialTrainingDocs: [
      'https://docs.mistral.ai/',
      'https://help.mistral.ai/en/collections/789629-le-chat',
      'https://help.mistral.ai/en/articles/347531-an-overview-of-le-chat-s-capabilities',
      'https://docs.mistral.ai/api',
      'https://mistral.ai/products/le-chat'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
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
  },
  // Podcasts
  {
    id: 'everyday-ai',
    name: 'Everyday AI',
    description: 'A daily AI podcast and newsletter built for business leaders and everyday professionals who want practical ways to use AI at work. It blends AI news, product updates, interviews, and actionable tips across tools like ChatGPT, Gemini, and Claude.',
    bestFor: 'Daily AI news and practical tips for professionals.',
    tags: ['Podcasts', 'News', 'Business'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/everydayai/200/200',
    url: 'https://www.youreverydayai.com/'
  },
  {
    id: 'leveraging-ai',
    name: 'Leveraging AI',
    description: 'A business-focused podcast for leaders who want to apply AI ethically and effectively. Host Isar Meitis and guests turn complex AI topics into practical strategies, real-world use cases, and weekly insights for modern organizations.',
    bestFor: 'Business leaders applying AI ethically and effectively.',
    tags: ['Podcasts', 'Business', 'Strategy'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/leveragingai/200/200',
    url: 'https://leveragingai.buzzsprout.com/'
  },
  {
    id: 'ai-future-law',
    name: 'AI and the Future of Law',
    description: 'A legal podcast exploring how AI is reshaping law, legal practice, and related issues such as contract law, attorney-client privilege, and AI agents in the profession. It is especially relevant for listeners tracking AI’s impact on the legal industry.',
    bestFor: 'Legal professionals tracking AI\'s impact on the industry.',
    tags: ['Podcasts', 'Legal', 'Industry'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/aifuturelaw/200/200',
    url: 'https://www.adr.org/podcasts/ai-and-the-future-of-law/'
  },
  {
    id: 'ai-show',
    name: 'The Artificial Intelligence Show',
    description: 'A weekly show that makes AI approachable and actionable for business and career growth. Hosted by Paul Roetzer and Mike Kaput, it combines timely AI news, listener Q&A, and deeper analysis of what developments in AI actually mean.',
    bestFor: 'Approachable AI news and analysis for career growth.',
    tags: ['Podcasts', 'News', 'Analysis'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/aishow/200/200',
    url: 'https://podcast.smarterx.ai/'
  },
  {
    id: 'nyt-hard-fork',
    name: 'NYT Hard Fork',
    description: 'A weekly tech podcast from The New York Times where Kevin Roose and Casey Newton break down the fast-moving world of technology. It focuses on making sense of the “future that’s already here,” with sharp analysis of AI, platforms, policy, and internet culture.',
    bestFor: 'Sharp analysis of AI, tech platforms, and internet culture.',
    tags: ['Podcasts', 'Tech', 'News'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/nythardfork/200/200',
    url: 'https://www.nytimes.com/column/hard-fork'
  },
  {
    id: 'lawnext',
    name: 'LawNext',
    description: 'A weekly legal innovation podcast hosted by Bob Ambrogi. Through interviews with founders, legal tech leaders, and practitioners, it examines what’s next in law, from AI and legal startups to access to justice and new law firm models.',
    bestFor: 'Legal innovation and legal tech startup insights.',
    tags: ['Podcasts', 'Legal', 'Innovation'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/lawnext/200/200',
    url: 'https://lawnext.libsyn.com/'
  },
  {
    id: 'practical-ai',
    name: 'Practical AI',
    description: 'A show designed to make AI practical, productive, and accessible. It brings together technologists, business leaders, students, and expert guests to discuss real-world AI implementations across topics like machine learning, MLOps, LLMs, and AI governance.',
    bestFor: 'Real-world AI implementations and technical discussions.',
    tags: ['Podcasts', 'Technical', 'Implementation'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/practicalai/200/200',
    url: 'https://practicalai.fm/'
  },
  {
    id: 'how-i-ai',
    name: 'How I AI',
    description: 'An interview-style podcast hosted by Brooke Gramer that highlights how founders, innovators, and creatives are using AI in real life. The show emphasizes human-centered stories, practical workflows, and the personal and professional transformations AI can enable.',
    bestFor: 'Human-centered stories and practical AI workflows.',
    tags: ['Podcasts', 'Interviews', 'Workflows'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/howiai/200/200',
    url: 'https://howiaipodcast.com/'
  },
  {
    id: 'atlas-browser',
    name: 'Atlas Browser',
    description: 'OpenAI\'s AI-powered browser with ChatGPT built in for browsing, page summarization, and on-page assistance.',
    bestFor: 'Web browsing, summarization, and agentic browsing workflows.',
    uses: 'Web Browsing, Page Summarization, Web Research, Autofill & Passwords, Tab Management, On-Page Q&A, Agentic Web Tasks, Browsing Workflow Automation',
    tags: ['Podcasts', 'Browser', 'Research'],
    tier: 'Free',
    logoUrl: 'https://picsum.photos/seed/atlasbrowser/200/200',
    url: 'https://chatgpt.com/atlas/getstarted/',
    parentCompany: 'OpenAI',
    summary: 'Atlas Browser, branded by OpenAI as ChatGPT Atlas, is OpenAI\'s AI-powered web browser with ChatGPT built directly into the browsing experience. It is designed for browsing, page summarization, instant answers, web assistance, autofill, tab management, and agentic help while you are on any site. OpenAI currently describes it as a macOS browser focused on speed, security, compatibility with the modern web, and built-in ChatGPT workflows.',
    tagCategories: 'AI browser, web browser, AI assistant, browsing assistant, agentic browser, productivity, research assistant, summarization tool, web navigation, search assistant, multimodal AI, browser-based AI, knowledge work, business productivity, personal productivity, web automation, browsing workflow, ChatGPT integration, smart browsing, modern browser, desktop browser, macOS browser, AI productivity, contextual assistant, intelligent browsing, browser copilot',
    features: 'built-in ChatGPT, page summarization, instant answers, ask sidebar, agentic browsing help, web assistance on any page, tab management, pin tabs, mute tabs, move tabs between windows, autofill, password saving, passkeys, payment method autofill, address autofill, bookmark import, browser history import, default browser support, settings controls, privacy controls, web compatibility, modern web support, macOS app, built-in browsing workflows, context-aware assistance, page-level help, integrated AI search help',
    notGoodFor: 'Not good for users who need Windows, iOS, or Android availability today, fully offline browsing workflows, guaranteed factual accuracy without verification, or specialized enterprise browser administration beyond what OpenAI currently supports. It is also not the best fit if someone only wants a normal browser without embedded AI assistance or prefers a fully separate chatbot experience.',
    officialTrainingDocs: [
      'https://help.openai.com/en/collections/16051538-chatgpt-atlas',
      'https://help.openai.com/en/articles/12628555-getting-started-with-atlas',
      'https://help.openai.com/en/articles/12628461-setting-up-the-atlas-browser',
      'https://help.openai.com/en/articles/12628371-browsing-the-web-with-chatgpt-atlas',
      'https://openai.com/index/introducing-chatgpt-atlas/'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s general-purpose conversational assistant for writing, research, coding, summarization, and multimodal help.',
    bestFor: 'Writing, research, brainstorming, coding, and learning workflows.',
    uses: 'Writing, Research, Brainstorming, Summarization, Coding, Translation, Study & Learning, Data Analysis, Problem Solving, Content Drafting, Question Answering',
    tags: ['Podcasts', 'General AI', 'Productivity'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/chatgpt/200/200',
    url: 'https://chat.com',
    parentCompany: 'OpenAI',
    summary: 'ChatGPT is OpenAI\'s general-purpose conversational AI assistant for asking questions, drafting and rewriting content, summarizing, brainstorming, coding, reasoning through problems, translation, and multimodal help. It is used for productivity, research, writing, coding, learning, and general task assistance.',
    tagCategories: 'AI assistant, conversational AI, chatbot, productivity, writing assistant, research assistant, education, study tool, coding assistant, programming, brainstorming, summarization, translation, knowledge work, multimodal AI, voice AI, personal productivity, business productivity, enterprise AI, collaboration, search assistant, reasoning model interface, generative AI, workflow assistant',
    features: 'natural language chat, question answering, summarization, rewriting, drafting, brainstorming, coding help, debugging help, translation, explanation, reasoning, multimodal inputs, voice support, projects, custom instructions, saved chat history, data export, sharing chats, personalization, search, research tools, file and context organization, follow-up questions, iterative editing, instruction following',
    notGoodFor: 'Not ideal for guaranteed factual accuracy without verification, high-stakes legal or medical advice without human review, fully deterministic outputs, offline use by default, or direct action in unsupported external systems',
    officialTrainingDocs: [
      'https://help.openai.com/en/collections/3742473-chatgpt',
      'https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview',
      'https://help.openai.com/en/articles/6783457-chatgpt-faq'
    ],
    stanfordUniversitySlsProvidedAccess: 'Limited Access in Stanford AI Playground',
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'codex',
    name: 'Codex',
    description: 'OpenAI\'s AI coding agent for generating, reviewing, and shipping code across repositories and developer tools.',
    bestFor: 'Code generation, review, refactoring, testing, and repository workflows.',
    uses: 'Code Generation, Code Review, Bug Fixing, Refactoring, Test Writing, Repository Navigation, Pull Request Drafting, Multi-File Editing, Long-Running Dev Tasks, CI/CD Support',
    tags: ['Podcasts', 'Coding', 'Developer Tools'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/codexagent/200/200',
    url: 'https://openai.com/codex/',
    parentCompany: 'OpenAI',
    summary: 'Codex is OpenAI\'s AI coding agent for software development. OpenAI describes it as helping developers write, review, and ship code faster, working across local tools and the cloud. It can navigate repositories, edit files, run commands, execute tests, and support parallel agent workflows through the Codex app, CLI, and IDE integrations.',
    tagCategories: 'AI coding agent, coding assistant, software engineering, developer tools, code generation, code review, bug fixing, repository assistant, DevTools, IDE assistant, terminal assistant, engineering productivity, automation, codebase understanding, developer workflow, CI and testing support, pull request support, cloud development, agentic coding, programming assistant, Git workflow, software delivery, refactoring, debugging, technical productivity, AI developer platform',
    features: 'write code, review code, explain codebases, edit files, run terminal commands, execute tests, refactor code, fix bugs, generate features, parallel agents, cloud sandbox tasks, local tool integration, CLI support, IDE integration, VS Code support, Cursor support, Windsurf support, repository navigation, Git functionality, worktree support, automations, multi-project workflows, pull request proposals, code reasoning, developer collaboration, task delegation, long-running coding tasks, environment-aware coding, project-aware assistance',
    notGoodFor: 'Not good for non-coding general-purpose work, guaranteed correctness without review, unsupported external tooling outside its integrations, or replacing human judgment for production-critical architecture, security, and deployment decisions. Outputs should still be reviewed before merge or release.',
    officialTrainingDocs: [
      'https://help.openai.com/en/collections/14937394-codex',
      'https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan',
      'https://developers.openai.com/codex',
      'https://developers.openai.com/codex/app'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'copilot',
    name: 'Copilot',
    description: 'Microsoft\'s AI assistant for chat, search, writing, summarization, image generation, voice interaction, and planning.',
    bestFor: 'Everyday productivity, writing, research, and planning across devices.',
    uses: 'Writing, Research, Web Search, Brainstorming, Summarization, Image Generation, Voice Chat, Planning, Content Drafting, Question Answering, Everyday Productivity',
    tags: ['Podcasts', 'General AI', 'Productivity'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/copilot/200/200',
    url: 'https://copilot.microsoft.com/',
    parentCompany: 'Microsoft',
    summary: 'Copilot is Microsoft\'s general-purpose AI assistant for chat, search, writing, summarization, brainstorming, image generation, voice interaction, and everyday productivity. Microsoft positions it as an AI companion available across web, desktop, and mobile, with related Copilot experiences also extending into Microsoft 365 work apps and business workflows.',
    tagCategories: 'AI assistant, conversational AI, chatbot, productivity, writing assistant, research assistant, search assistant, voice AI, image generation, multimodal AI, consumer AI, business AI, enterprise AI, workplace AI, study tool, summarization, brainstorming, generative AI, natural language assistant, personal productivity, web assistant, mobile assistant, desktop assistant, Microsoft ecosystem, AI companion, everyday AI, knowledge work, task assistant, digital assistant, smart search',
    features: 'natural language chat, question answering, writing help, summarization, brainstorming, search assistance, voice interaction, image generation, web access, mobile app, desktop app, cross-device access, conversational interface, prompt-based assistance, productivity support, idea generation, content drafting, explanation support, planning help, creative assistance, Microsoft integration, business workflow support, app availability across platforms, AI companion experience, contextual help, follow-up conversations, multimodal interaction, everyday task assistance',
    notGoodFor: 'Not good for guaranteed factual accuracy without verification, specialized coding-first workflows, high-stakes legal or medical decisions without human review, or fully autonomous enterprise process automation by itself. It is also not the best fit when the user specifically needs a dedicated Microsoft 365 Copilot, Copilot Studio, or GitHub Copilot workflow rather than the broader consumer assistant experience.',
    officialTrainingDocs: [
      'https://learn.microsoft.com/en-us/copilot/',
      'https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/',
      'https://support.microsoft.com/copilot',
      'https://learn.microsoft.com/en-us/training/paths/get-started-with-microsoft-365-copilot/'
    ],
    stanfordUniversitySlsProvidedAccess: 'Yes, Chat Only (https://uit.stanford.edu/service/microsoft365/mscopilotchat)',
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s general-purpose assistant for writing, coding, analysis, document review, and agentic workflows.',
    bestFor: 'Research, writing, coding, document analysis, and workflow support.',
    uses: 'Writing, Research, Coding, Summarization, Analysis, Document Review, Brainstorming, Prompt Engineering, Agentic Workflows, Vision & Image Analysis, PDF Understanding, File Analysis',
    tags: ['Podcasts', 'General AI', 'Analysis'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/claude/200/200',
    url: 'https://claude.ai/',
    parentCompany: 'Anthropic',
    summary: 'Claude is Anthropic\'s general-purpose AI assistant for conversation, writing, summarization, analysis, coding, research, and workflow support. Anthropic presents Claude across chat and developer experiences, with capabilities spanning text generation, coding, vision, tool use, and agentic workflows for professional and developer use cases.',
    tagCategories: 'AI assistant, conversational AI, chatbot, productivity, writing assistant, research assistant, coding assistant, software development, multimodal AI, business AI, enterprise AI, education, study tool, summarization, analysis, knowledge work, developer platform, API model, agentic workflows, prompt engineering, document analysis, vision model, workflow automation, generative AI, natural language interface, model provider, LLM assistant, workplace AI, personal productivity, reasoning assistant',
    features: 'natural language chat, writing help, summarization, brainstorming, question answering, code generation, code explanation, repository help, vision support, PDF understanding, API access, Messages API, SDK support, tool use, agent workflows, prompt engineering, JSON outputs, extended thinking, RAG support, computer use, Claude Code ecosystem, model selection, multi-turn conversations, system prompts, developer docs, console access, business workflow support, file analysis, professional research assistance',
    notGoodFor: 'Not good for guaranteed factual accuracy without verification, high-stakes expert decisions without human review, or tasks requiring perfect determinism. It is also not the right fit when a user specifically needs a non-chat autonomous work product system, since Anthropic distinguishes Claude Cowork as a separate product for executing multi-step knowledge work on a user\'s behalf.',
    officialTrainingDocs: [
      'https://docs.anthropic.com/en/docs/welcome',
      'https://www.anthropic.com/learn/build-with-claude',
      'https://www.anthropic.com/learn',
      'https://support.anthropic.com/'
    ],
    stanfordUniversitySlsProvidedAccess: 'Limited Access in Stanford AI Playground',
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'claude-cowork',
    name: 'Claude Cowork',
    description: 'Anthropic\'s agentic AI system for delegated multi-step knowledge work across projects and files.',
    bestFor: 'Research synthesis, document preparation, and autonomous workflow completion.',
    uses: 'Research Synthesis, Document Preparation, File Management, Multi-Step Knowledge Work, Project-Based Task Execution, Autonomous Workflow Completion, Business Operations',
    tags: ['Podcasts', 'General AI', 'Workflow'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/claudecowork/200/200',
    url: 'https://www.anthropic.com/product/claude-cowork',
    parentCompany: 'Anthropic',
    summary: 'Claude Cowork is Anthropic\'s agentic AI system for executing multi-step knowledge work on a user\'s behalf. Anthropic describes it as handling work such as research synthesis, document preparation, and file management, and explicitly says it is not a chat assistant. It is positioned as a tool for getting work done across real projects and files rather than just answering questions.',
    tagCategories: 'agentic AI, knowledge work automation, workflow automation, enterprise AI, business productivity, research assistant, document assistant, file management, autonomous workflows, workplace AI, professional productivity, task execution, AI coworker, operations assistant, project assistant, information synthesis, document creation, agent platform, enterprise workflows, desktop AI, work automation, business operations, generative AI, AI for work, agentic workflows, knowledge management, execution agent',
    features: 'multi-step task execution, research synthesis, document preparation, file management, project-based work, autonomous execution, non-chat workflow support, business task handling, real file interaction, knowledge-work delegation, agentic assistance, workflow completion, professional use cases, enterprise-oriented usage, hands-off task execution, work alongside user projects, task follow-through, execution over conversation, productivity acceleration',
    notGoodFor: 'Not good for casual conversational chat, simple Q and A use cases where a standard chatbot is enough, or tasks that require guaranteed correctness without review. Anthropic explicitly frames Cowork as separate from chat and as a system for delegated execution, so it is a weaker fit when the user mainly wants an interactive back-and-forth assistant instead of autonomous knowledge-work execution.',
    officialTrainingDocs: [
      'https://www.anthropic.com/product/claude-cowork',
      'https://www.anthropic.com/learn/claude-for-work',
      'https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork',
      'https://www.anthropic.com/webinars/claude-cowork-in-an-hour-where-do-i-start'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  },
  {
    id: 'harvey-ai',
    name: 'Harvey AI',
    description: 'AI platform built for legal and professional services workflows, research, drafting, and document analysis.',
    bestFor: 'Legal research, contract review, due diligence, drafting, and legal workflow automation.',
    uses: 'Legal Research, Document Analysis, Contract Review, Due Diligence, Legal Drafting, Workflow Automation, Knowledge Management, Bulk File Analysis, Regulatory Research, Tax Research',
    tags: ['Podcasts', 'Legal', 'Workflow'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/harveyai/200/200',
    url: 'https://www.harvey.ai/',
    parentCompany: 'Harvey',
    summary: 'Harvey is an AI platform built for legal and professional services. It is used for legal research, document analysis, drafting, due diligence, contract review, workflow automation, and knowledge work across law firms and in-house legal teams. Harvey also offers related products and modules for assistant-style work, secure document storage, knowledge research, and workflow agents.',
    tagCategories: 'legal AI, professional services AI, AI assistant, legal research, contract analysis, due diligence, document review, legal drafting, enterprise AI, law firm technology, in-house legal tech, workflow automation, knowledge management, document intelligence, compliance support, tax research, regulatory research, professional productivity, business AI, legal operations, generative AI, AI for lawyers, legal workflow platform, secure AI platform, agentic workflows, document automation, legal tech, AI knowledge work',
    features: 'legal research, document analysis, contract review, due diligence, drafting assistance, workflow agents, assistant workflows, secure document storage, bulk file analysis, knowledge research, legal and regulatory research, tax research, enterprise deployment, prompt-based assistance, legal document review, collaboration support, file processing, domain-specific AI, workflow automation, project-based legal work, repository of legal knowledge, professional services workflows, academy training, webinars, certification courses, introductory training, prompt writing guidance, role-based learning',
    notGoodFor: 'Not good for general consumer chat use, real-time internet research, guaranteed factual accuracy without review, heavy numerical calculation, or fully replacing legal judgment. Harvey\'s own help materials say it does not have real-time internet access, responses can vary, and it does not perform calculations well, so human review is still important for high-stakes legal work.',
    officialTrainingDocs: [
      'https://academy.harvey.ai/',
      'https://help.harvey.ai/topics/getting-started',
      'https://help.harvey.ai/articles/getting-started-with-harvey',
      'https://help.harvey.ai/articles/harvey-academy',
      'https://academy.harvey.ai/harvey-introductory-training'
    ],
    stanfordUniversitySlsProvidedAccess: true,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'legora-ai',
    name: 'Legora AI',
    description: 'Legal AI workspace for research, drafting, review, workflow orchestration, and law-firm/in-house collaboration.',
    bestFor: 'Legal research with citations, collaborative document review, and legal drafting workflows.',
    uses: 'Legal Research, Document Review, Legal Drafting, Contract Analysis, Due Diligence, Workflow Orchestration, Collaboration (Law Firm & In-House), Email Summarization, Issue Spotting, Data Extraction',
    tags: ['Podcasts', 'Legal', 'Collaboration'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/legoraai/200/200',
    url: 'https://legora.com/',
    parentCompany: 'Legora',
    summary: 'Legora is a legal AI platform built for lawyers and legal teams to review documents faster, research with citations, draft smarter, and collaborate across complex matters. It is positioned as a collaborative AI workspace for law firms and in-house legal teams, with products spanning legal research, drafting, tabular review, workflows, Word and Outlook add-ins, portal collaboration, and mobile access.',
    tagCategories: 'legal AI, legal tech, AI assistant, professional services AI, legal research, contract analysis, due diligence, document review, legal drafting, enterprise AI, law firm technology, in-house legal tech, workflow automation, document intelligence, collaboration platform, knowledge work, compliance support, business AI, legal operations, generative AI, AI for lawyers, legal workflow platform, secure AI platform, agentic workflows, document automation, legal productivity, legal collaboration, research assistant, drafting assistant, review assistant',
    features: 'citation-backed legal research, document review, drafting assistance, tabular review, workflow orchestration, Word add-in, Outlook add-in, portal collaboration, mobile app, team collaboration, precedent and document analysis, large document set analysis, legal research across internal and external sources, drafting in Microsoft Word, email summarization, email reply drafting, configurable workflows, natural-language workflow creation, collaboration between law firms and in-house teams, legal workspace, legal document summarization, issue spotting, data extraction from documents, secure enterprise deployment, integration-friendly legal workflows',
    notGoodFor: 'Not good for general consumer chat use, non-legal everyday productivity, guaranteed correctness without lawyer review, or replacing legal judgment on high-stakes matters. It is also a weaker fit if the user mainly wants a broad general-purpose assistant rather than a legal-specific workspace centered on research, review, drafting, and collaboration.',
    officialTrainingDocs: [
      'https://support2.legora.com/introduction/welcome/welcome-to-legora',
      'https://legora.com/product',
      'https://legora.com/product/legal-research',
      'https://legora.com/product/workflows',
      'https://legora.com/product/word-add-in'
    ],
    stanfordUniversitySlsProvidedAccess: true,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'lextext-ai',
    name: 'LexText AI',
    description: 'Litigation-focused legal AI platform for drafting, analysis, and argument refinement grounded in case law and primary sources.',
    bestFor: 'Litigation drafting, case law analysis, motion/complaint work, and legal argument refinement.',
    uses: 'Litigation Drafting, Case Law Analysis, Motion Drafting, Complaint Generation, Discovery Drafting, Legal Argument Refinement, Document Analysis, Associate Training, Strategic Litigation Insights',
    tags: ['Legal', 'Litigation', 'Drafting'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/lextextai/200/200',
    url: 'https://www.lextext.ai/',
    parentCompany: 'LexText',
    summary: 'LexText AI is a litigation-focused legal AI platform built to help litigators draft, analyze, evaluate, and refine legal work faster while staying grounded in case law, primary sources, underlying facts, and structured legal reasoning. It is positioned for law firms, law schools, and legal professionals handling high-stakes litigation work.',
    tagCategories: 'legal AI, legal tech, litigation AI, AI assistant, professional services AI, legal research, case law analysis, motion drafting, complaint drafting, answer drafting, discovery drafting, due diligence, document review, legal drafting, enterprise AI, law firm technology, law school technology, workflow automation, document intelligence, legal productivity, legal reasoning, argument development, brief writing, litigation support, legal knowledge work, generative AI, AI for lawyers, legal workflow platform, secure AI platform, legal education, associate training, litigation strategy',
    features: 'document drafting, litigation drafting, complaint generation, answer generation, motion drafting, discovery request drafting, discovery response drafting, case law insights, legal argument refinement, evaluation and iterative refinement, document analysis, primary-source grounding, firm-specific drafting, secure workflows, privilege-conscious design, no training on client-specific data, legal reasoning support, litigation lifecycle support, strategic insights, knowledge-work acceleration, associate training support, partner review support, high-stakes litigation focus',
    notGoodFor: 'Not good for general consumer productivity, non-legal everyday chat, guaranteed correctness without lawyer review, real-time open-web research, or replacing legal judgment in high-stakes matters. It is also a weaker fit for transactional legal work or broad general-purpose assistant use when the user specifically needs a litigation-first platform.',
    officialTrainingDocs: [
      'https://www.lextext.ai/',
      'https://www.lextext.ai/Products',
      'https://www.lextext.ai/About',
      'https://www.lextext.ai/press'
    ],
    stanfordUniversitySlsProvidedAccess: true,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'rhetoric-ai',
    name: 'Rhetoric AI',
    description: 'AI-powered training platform for authentic practice, communication skills, and rubric-based assessment workflows.',
    bestFor: 'Oral advocacy, deposition practice, courtroom simulations, and skills assessment.',
    uses: 'Oral Advocacy Practice, Communication Skills Training, Legal Argument Practice, Deposition Preparation, Courtroom Simulation, Healthcare Scenario Training, Skills Assessment, Presentation Practice, Student Evaluation',
    tags: ['Education', 'Training', 'Legal'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/rhetoricai/200/200',
    url: 'https://www.userhetoric.com/',
    parentCompany: 'Rhetoric, Inc.',
    summary: 'Rhetoric\'s platform is CICERO, an AI-powered learning and training platform built to strengthen real skills through dynamic practice modules, video, audio, and text responses, and real-time feedback. It is designed for universities, professional teams, law-related training, and healthcare education, with an emphasis on authentic performance, academic integrity, customizable rubrics, and instructor-controlled learning workflows.',
    tagCategories: 'AI learning platform, education technology, training platform, skills development, communication training, advocacy training, legal education, healthcare education, professional training, academic integrity, instructional technology, AI coaching, performance practice, learning analytics, enterprise learning, law school technology, oral advocacy, presentation skills, experiential learning, assessment platform, rubric-based evaluation, student skills development, workforce training, higher education AI, professional development',
    features: 'dynamic practice modules, real-time feedback, video responses, audio responses, text responses, customizable rubrics, instructor-defined success criteria, analytics dashboard, skill-based insights, progress tracking, adaptive practice, course alignment, cohort distribution, class assignments, individual assignments, cheating detection, authentic assessment, communication skills practice, oral advocacy practice, legal argument analysis, courtroom simulation practice, deposition preparation, healthcare scenario training, uploaded document context, personalized questions, scenario-based learning, instructor oversight, review and override of AI assessments, enterprise training workflows',
    notGoodFor: 'Not good for general-purpose consumer chat, broad legal research databases, coding workflows, or replacing instructors, lawyers, or professional judgment. It is also a weaker fit when the goal is content generation for the user rather than guided practice, authentic assessment, and skills-building with human oversight.',
    officialTrainingDocs: [
      'https://www.userhetoric.com/',
      'https://www.userhetoric.com/how-it-works',
      'https://www.userhetoric.com/education',
      'https://www.userhetoric.com/firms-enterprise',
      'https://www.userhetoric.com/healthcare'
    ],
    stanfordUniversitySlsProvidedAccess: true,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Google\'s general-purpose AI assistant for writing, research, planning, coding, and multimodal workflows.',
    bestFor: 'Writing, research, brainstorming, summarization, coding, and multimodal help.',
    uses: 'Writing, Research, Brainstorming, Summarization, Planning, Study & Learning, Image Understanding, Voice Chat, Coding, Document Analysis, File Analysis, Custom Gems',
    tags: ['General AI', 'Google', 'Productivity'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/gemini/200/200',
    url: 'https://gemini.google.com/',
    parentCompany: 'Google',
    summary: 'Gemini is Google\'s general-purpose AI assistant for chat, writing, planning, brainstorming, research, learning, and multimodal help. Google also supports Gemini across a broader ecosystem that includes web and mobile apps, connected Google services, custom Gems, and developer access through the Gemini API.',
    tagCategories: 'AI assistant, conversational AI, chatbot, productivity, writing assistant, research assistant, study tool, multimodal AI, voice AI, search assistant, personal productivity, business productivity, enterprise AI, generative AI, knowledge work, learning assistant, brainstorming tool, planning assistant, mobile AI, web assistant, Google ecosystem, developer platform, API model, document assistant, image understanding, reasoning assistant, workflow assistant, connected apps, custom AI helpers',
    features: 'natural language chat, writing help, summarization, brainstorming, planning assistance, research help, multimodal understanding, image understanding, voice interaction, Gemini Live, connected Google apps, custom Gems, personalization, memory-based personalization controls, file and content analysis, source viewing and response checking, mobile app, web app, multi-step task support in select apps, GitHub repository import in web app, developer API access, SDK support, function calling, long context, embeddings, image generation and editing support through Gemini apps, follow-up conversations, prompt-based workflows',
    notGoodFor: 'Not good for guaranteed factual accuracy without verification, high-stakes legal or medical decisions without human review, fully deterministic outputs, or replacing specialized developer and enterprise products when the user specifically needs things like Vertex AI, Gemini Code Assist, or Google Workspace with Gemini. It is also a weaker fit when someone needs a purely offline assistant or a tool limited to one narrow workflow.',
    officialTrainingDocs: [
      'https://support.google.com/gemini/',
      'https://gemini.google.com/',
      'https://ai.google.dev/gemini-api/docs',
      'https://ai.google.dev/gemini-api/docs/quickstart',
      'https://ai.google.dev/api'
    ],
    stanfordUniversitySlsProvidedAccess: 'Yes, Limited Access in Stanford AI Playground AND https://uit.stanford.edu/service/gsuite/geminiapp',
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'nano-banana',
    name: 'Nano Banana',
    description: 'Google\'s native Gemini image generation and editing capability for prompt-based creative workflows.',
    bestFor: 'Image generation, editing, style transfer, and branded visual asset creation.',
    uses: 'Image Generation, Image Editing, Style Transfer, Text Rendering in Images, Product Mockups, Marketing Visuals, Social Media Graphics, Multilingual Visual Content, Branding Assets',
    tags: ['Image', 'Creative', 'Google'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/nanobanana/200/200',
    url: 'https://gemini.google/overview/image-generation/',
    parentCompany: 'Google',
    summary: 'Nano Banana is Google\'s native image generation and image editing capability within Gemini. It is designed for creating and editing images from prompts and reference images, with strengths in contextual edits, style transfer, resizing, text rendering inside images, and conversational multi-turn image workflows. In Google\'s developer documentation, Nano Banana 2 maps to Gemini 3.1 Flash Image, while Nano Banana Pro maps to Gemini 3 Pro Image.',
    tagCategories: 'AI image generator, AI image editor, multimodal AI, creative AI, design tool, visual content creation, image transformation, text-to-image, image-to-image, photo editing, generative media, Google AI, Gemini ecosystem, marketing creative, social media design, product mockups, concept art, visual prototyping, branding, content creation, creative workflow, design automation, prompt-based editing, reference-image editing, enterprise AI, developer API',
    features: 'native image generation, image editing, multi-turn image editing, text-to-image, text-and-image prompting, reference image support, style transfer, contextual editing, object replacement, background changes, image resizing, strong text rendering in images, multilingual text rendering, aspect ratio control, real-world grounding in supported models, developer API access, Google AI Studio support, Vertex AI support, conversational editing, watermarking with SynthID, prompt-based iteration, high-volume image generation, higher-fidelity Pro option, built into Gemini app',
    notGoodFor: 'Not good for pixel-perfect manual design control like a traditional graphics editor, guaranteed factual accuracy in every generated visual, unrestricted sensitive-content generation, or workflows that require fully deterministic outputs. It is also a weaker fit when someone specifically needs manual layer-based editing, advanced vector design, or a non-Google standalone creative suite.',
    officialTrainingDocs: [
      'https://gemini.google/overview/image-generation/',
      'https://ai.google.dev/gemini-api/docs/image-generation',
      'https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-image-preview',
      'https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image-preview',
      'https://ai.google.dev/api'
    ],
    stanfordUniversitySlsProvidedAccess: 'Limited Access in Stanford AI Playground',
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'veo',
    name: 'Veo',
    description: 'Google DeepMind\'s AI video generation family for cinematic and production-oriented text/image-to-video workflows.',
    bestFor: 'Video generation, cinematic storytelling, concept visualization, and prototyping.',
    uses: 'Video Generation, Cinematic Storytelling, Soundtrack Creation, Marketing Video, Social Media Video, Concept Visualization, Prototyping, Animation, Developer Integration',
    tags: ['Video', 'Creative', 'Google'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/veo/200/200',
    url: 'https://deepmind.google/models/veo/',
    parentCompany: 'Google',
    summary: 'Veo is Google DeepMind\'s AI video generation model family for creating high-fidelity videos from text prompts and, in supported workflows, from images and reference assets. Google positions Veo for cinematic video creation, storytelling, creative production, and developer integration through Gemini API, Google AI Studio, Flow, Gemini, and Vertex AI, with newer Veo versions adding native audio, stronger prompt adherence, higher resolutions, and more controllable video generation.',
    tagCategories: 'AI video generator, video generation, text-to-video, image-to-video, multimodal AI, creative AI, generative media, video editing, cinematic AI, storytelling tool, content creation, media generation, developer platform, Google AI, Gemini ecosystem, Vertex AI, creative workflow, marketing content, social media video, concept visualization, prototyping, filmmaking, animation support, reference-based generation, enterprise AI, API model, video production, synthetic media, audio-video generation, prompt-based video',
    features: 'native video generation, text-to-video, image-to-video, reference image support, native audio generation, dialogue generation, sound effects generation, ambient audio generation, cinematic control, prompt adherence, 720p output, 1080p output, 4K output on supported versions, aspect ratio control, portrait and landscape formats, character and asset consistency, video extension, frame-specific generation, first-frame guidance, last-frame guidance, developer API access, Google AI Studio support, Vertex AI support, Flow integration, Gemini integration, high-volume generation options, model family options including Veo 2 and Veo 3.1, creative storytelling support, production-ready workflows',
    notGoodFor: 'Not good for pixel-perfect manual video editing like a traditional NLE, guaranteed factual realism, unrestricted sensitive-content generation, or fully deterministic outputs. It is also a weaker fit when someone needs timeline-based post-production, advanced compositing, or frame-by-frame manual control that is better handled in dedicated video editing and VFX software.',
    officialTrainingDocs: [
      'https://deepmind.google/models/veo/',
      'https://ai.google.dev/gemini-api/docs/video',
      'https://ai.google.dev/gemini-api/docs/models/veo-3.1-generate-preview',
      'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/overview',
      'https://deepmind.google/models/veo/prompt-guide/'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    description: 'Google\'s source-grounded research and learning assistant for synthesis with citations and generated study outputs.',
    bestFor: 'Source-grounded research, study guides, briefings, audio overviews, and collaborative note workflows.',
    uses: 'Source-Grounded Research, Document Synthesis, Study Guide Creation, Audio Overviews, Briefing Generation, Mind Mapping, Flashcard Creation, Quiz Generation, Slide Deck Generation, Collaborative Research, Note-Taking',
    tags: ['Research', 'Learning', 'Google'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/notebooklmtool/200/200',
    url: 'https://notebooklm.google.com/',
    parentCompany: 'Google',
    summary: 'NotebookLM is Google\'s AI-powered research and learning assistant designed to help users understand, organize, and synthesize information from their own sources. It supports grounded chat with inline citations and can turn source material into study guides, briefings, audio overviews, mind maps, quizzes, infographics, slide decks, and other research outputs.',
    tagCategories: 'AI research assistant, learning assistant, study tool, knowledge management, research workflow, document analysis, source-grounded AI, note-taking tool, productivity, education technology, enterprise AI, business productivity, multimodal AI, writing assistant, summarization tool, study assistant, knowledge work, citation-based AI, collaborative research, document intelligence, Google ecosystem, Workspace tool, academic productivity, professional productivity, AI notebook, synthesis tool, source analysis, briefing tool, research companion, learning technology',
    features: 'grounded chat with inline citations, source upload and discovery, PDF support, website support, YouTube support, audio file support, Google Docs support, Google Slides support, source-based summarization, study guide generation, briefing generation, audio overviews, video overviews, mind maps, flashcards, quizzes, infographic generation, slide deck generation, note creation, save chat to notes, note-to-source conversion, notebook sharing, viewer and editor permissions, collaboration, mobile app support, multilingual support, export notes to Google Docs, export notes to Google Sheets, higher limits on paid plans, enterprise data protection on supported plans',
    notGoodFor: 'Not good for fully open-ended chat without source grounding, guaranteed factual accuracy when sources are weak or missing, heavy spreadsheet-style quantitative analysis, or replacing expert judgment in high-stakes legal, medical, or financial decisions. It is also a weaker fit when the user wants a general-purpose assistant rather than a source-based research and synthesis workspace.',
    officialTrainingDocs: [
      'https://support.google.com/notebooklm/',
      'https://support.google.com/notebooklm/answer/16164461',
      'https://workspace.google.com/products/notebooklm/',
      'https://support.google.com/notebooklm/answer/16213268',
      'https://support.google.com/notebooklm/answer/16269187'
    ],
    stanfordUniversitySlsProvidedAccess: 'Yes (https://uit.stanford.edu/service/gsuite/notebooklm)',
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'ai-in-google-vids',
    name: 'AI in Google Vids',
    description: 'Google Workspace AI-assisted video creation inside Google Vids for scripting, storyboarding, voiceovers, and production.',
    bestFor: 'Business videos, training videos, and presentation-style internal communications.',
    uses: 'Business Video Creation, Training Videos, Internal Communications, Explainer Videos, Marketing Videos, Script Generation, Storyboard Creation, AI Voiceover, Presentation Videos',
    tags: ['Video', 'Workspace', 'Google'],
    tier: 'Paid',
    logoUrl: 'https://picsum.photos/seed/googlevids/200/200',
    url: 'https://workspace.google.com/products/vids/',
    parentCompany: 'Google',
    summary: 'AI in Google Vids is Google Workspace\'s AI-assisted video creation experience inside Google Vids. It is designed to help users plan, script, generate, produce, edit, and share business videos faster with Gemini-powered features such as Help me create, AI voiceovers, read-along teleprompter support, and AI-generated video clips, with newer marketing pages also highlighting Veo-powered clip generation.',
    tagCategories: 'AI video creation, business video tool, video productivity, Google Workspace AI, workplace AI, presentation video tool, training video tool, internal communications, marketing content, explainer video creation, script generation, storyboard generation, enterprise AI, collaboration tool, creative productivity, multimodal AI, video editor, text-to-video support, AI voiceover, teleprompter tool, Workspace productivity, team collaboration, video drafting, corporate communications, educational video creation, Google ecosystem, professional content creation',
    features: 'Help me create, prompt-based video draft generation, outline generation, scene suggestions, script generation, storyboard assistance, AI voiceover, read-along teleprompter, AI-generated video clips, Veo-powered clip generation, template support, record video, add audio, scene editing, collaborative editing, sharing, Google Workspace integration, prompt refinement, document-assisted prompting with @ files, business video workflows, video production assistance, presentation-style video creation, browser-based editing, first-draft automation, team collaboration, supported Gemini features for eligible plans',
    notGoodFor: 'Not good for high-end cinematic post-production, frame-accurate manual editing, complex VFX workflows, unrestricted consumer entertainment video generation, or guaranteed factual accuracy without review. It is also a weaker fit when someone needs a full professional nonlinear editor or advanced motion graphics suite rather than a Workspace-native business video creation tool.',
    officialTrainingDocs: [
      'https://workspace.google.com/products/vids/',
      'https://support.google.com/docs/answer/15082958',
      'https://support.google.com/docs/answer/15067819',
      'https://support.google.com/docs/answer/16143507',
      'https://support.google.com/docs/answer/15609411'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: true
  },
  {
    id: 'google-flow',
    name: 'Google Flow',
    description: 'Google\'s AI filmmaking tool for generating clips/scenes and managing multi-model creative workflows.',
    bestFor: 'AI filmmaking, scene building, visual storytelling, and video prototyping.',
    uses: 'AI Filmmaking, Cinematic Clip Creation, Scene Building, Visual Storytelling, Video Prototyping, Image Generation, Image Editing, Multi-Model Creative Workflows, Asset Management',
    tags: ['Video', 'Filmmaking', 'Google'],
    tier: 'Freemium',
    logoUrl: 'https://picsum.photos/seed/googleflow/200/200',
    url: 'https://labs.google.com/search/experiment/38',
    parentCompany: 'Google',
    summary: 'Google Flow is Google\'s AI filmmaking tool for creating cinematic clips, scenes, and stories with consistency using Google\'s generative models. It is designed for creators to generate videos from text, ingredients, frames, and images, then edit clips, build scenes, manage project assets, and use models like Veo, Imagen, Gemini, and Nano Banana inside one filmmaking workflow.',
    tagCategories: 'AI filmmaking tool, AI video creation, video generation, creative AI, multimodal AI, filmmaker tool, storytelling platform, text-to-video, image-to-video, scene builder, content creation, media generation, creative workflow, Google AI, Google Labs, video production, cinematic AI, generative media, visual storytelling, video editor, creator tools, prompt-based video, image generation, creative productivity, video prototyping, asset management, synthetic media, business creativity, professional content creation',
    features: 'text-to-video generation, image-to-video generation, create clips from prompts, create videos from ingredients, frame-based generation, clip editing, scene building, Scenebuilder, project management, asset collections, image creation, image editing, model selection, Veo support, Imagen support, Gemini support, Nano Banana Pro support, consistency across scenes, cinematic storytelling workflows, AI Credits system, prompt-based iteration, uploaded asset support, frame guidance, project-based workflow, creative control across assets, story construction, browser-based tool, creator-focused workflow',
    notGoodFor: 'Not good for frame-accurate professional post-production, traditional timeline-based nonlinear editing, advanced compositing or VFX, guaranteed factual realism, or fully deterministic outputs. It is also a weaker fit when someone needs a general-purpose chatbot, a coding tool, or a full manual video-editing suite rather than an AI-native filmmaking workspace.',
    officialTrainingDocs: [
      'https://support.google.com/flow/',
      'https://support.google.com/flow/answer/16353333',
      'https://support.google.com/flow/answer/16353334',
      'https://support.google.com/flow/answer/16935718',
      'https://support.google.com/flow/answer/16352836'
    ],
    stanfordUniversitySlsProvidedAccess: false,
    robertCrownLawLibraryFavorite: false
  }

];
