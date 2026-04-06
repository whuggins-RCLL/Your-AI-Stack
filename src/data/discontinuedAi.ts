export type DiscontinuedAIItem = {
  platformName: string;
  parentCompany: string;
  status:
    | 'scheduled_shutdown'
    | 'service_retired'
    | 'offline'
    | 'product_wound_down'
    | 'acquired_and_wound_down'
    | 'defunct_company';
  summary: string;
  reasonDiscontinued: string;
  datesActive: Record<string, string>;
  relevantUrls: string[];
};

export const discontinuedAiMeta = {
  generatedAt: '2026-04-06',
  timezone: 'America/Los_Angeles',
  scopeWindow: { start: '2023-01-01', end: '2026-04-06' },
};

export const discontinuedAiItems: DiscontinuedAIItem[] = [
  {
    platformName: 'OpenAI Sora (consumer app/web experience)',
    parentCompany: 'OpenAI',
    status: 'scheduled_shutdown',
    summary: 'Consumer-facing AI video app/web experience with a feed and creator workflow.',
    reasonDiscontinued: 'OpenAI announced product sunset and advised exports before shutdown.',
    datesActive: { appLaunchDate: '2025-09-30', announcedShutdownDate: '2026-03-24', scheduledEndOfAppWeb: '2026-04-26' },
    relevantUrls: ['https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation']
  },
  {
    platformName: 'OpenAI Sora API',
    parentCompany: 'OpenAI',
    status: 'scheduled_shutdown',
    summary: 'Developer API access for Sora-related video generation.',
    reasonDiscontinued: 'Sunset announced alongside the Sora product wind-down timeline.',
    datesActive: { announcedShutdownDate: '2026-03-24', scheduledApiDiscontinuation: '2026-09-24' },
    relevantUrls: ['https://developers.openai.com/api/docs/guides/video-generation']
  },
  {
    platformName: 'ChatGPT Plugins (Plugins Beta / Plugin Store)',
    parentCompany: 'OpenAI',
    status: 'service_retired',
    summary: 'Third-party plugin ecosystem for tool calls in ChatGPT.',
    reasonDiscontinued: 'Replaced by GPTs/actions as the preferred integration model.',
    datesActive: { approxLaunch: '2023-03-23', newPluginChatsDisabled: '2024-03-19', pluginConversationsEnd: '2024-04-09' },
    relevantUrls: ['https://openai.com/index/chatgpt-plugins/']
  },
  {
    platformName: 'Cortana (Windows standalone app)',
    parentCompany: 'Microsoft',
    status: 'service_retired',
    summary: 'Standalone Windows voice assistant app and related experiences.',
    reasonDiscontinued: 'Retired as Microsoft shifted to newer AI assistant strategy.',
    datesActive: { windowsStandaloneRetired: '2023-03-01' },
    relevantUrls: ['https://support.microsoft.com/en-us/Cortana/end-of-support-for-cortana']
  },
  {
    platformName: 'Bing Search APIs (Bing Search v7 + Bing Custom Search APIs)',
    parentCompany: 'Microsoft',
    status: 'service_retired',
    summary: 'Developer APIs for raw Bing web/image/news/video search integration.',
    reasonDiscontinued: 'Retired with migration guidance toward Azure AI agent grounding.',
    datesActive: { retirementDate: '2025-08-11' },
    relevantUrls: ['https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement']
  },
  {
    platformName: 'QnA Maker (Azure Cognitive Services)',
    parentCompany: 'Microsoft',
    status: 'service_retired',
    summary: 'Knowledge base FAQ bot tooling in Azure cognitive stack.',
    reasonDiscontinued: 'Deprecated in favor of Azure AI Language Question Answering.',
    datesActive: { retirementDate: '2025-03-31' },
    relevantUrls: ['https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/qna-maker-is-being-retired-hello-question-answering/3437552']
  },
  {
    platformName: 'Google Duplex on the Web',
    parentCompany: 'Google',
    status: 'service_retired',
    summary: 'Assistant feature for web-task form filling and flows.',
    reasonDiscontinued: 'Shut down as a standalone web-focused feature.',
    datesActive: { shutdownYear: '2023-01-01' },
    relevantUrls: ['https://www.engadget.com/google-duplex-on-the-web-shutdown-announced-225937564.html']
  },
  {
    platformName: 'Everyday Robots',
    parentCompany: 'Alphabet (X / Google)',
    status: 'product_wound_down',
    summary: 'General-purpose robot learning effort for everyday tasks.',
    reasonDiscontinued: 'Consolidated into DeepMind robotics work.',
    datesActive: { consolidatedIntoDeepMindRobotics: '2023-01-01' },
    relevantUrls: ['https://x.company/projects/everyday-robots/']
  },
  {
    platformName: 'Artifact',
    parentCompany: 'Nokto, Inc.',
    status: 'acquired_and_wound_down',
    summary: 'AI-personalized news reader and discovery product.',
    reasonDiscontinued: 'Founders cited limited market opportunity; team/tech later acquired by Yahoo.',
    datesActive: { publicLaunch: '2023-02-22', windDownAnnounced: '2024-01-12', acquiredByYahooAnnouncement: '2024-04-02' },
    relevantUrls: ['https://techcrunch.com/2024/01/12/instagram-co-founders-news-aggregation-startup-artifact-to-shut-down/']
  },
  {
    platformName: 'Nota News',
    parentCompany: 'Nota / HeyNota',
    status: 'offline',
    summary: 'AI-driven local news network across multiple sites.',
    reasonDiscontinued: 'Taken offline after plagiarism scandal and review.',
    datesActive: { sitesTakenOffline: '2026-03-31' },
    relevantUrls: ['https://www.axios.com/local/richmond/2026/04/03/nota-ai-news-sites-shut-down-plagiarism']
  },
  {
    platformName: 'Smashing',
    parentCompany: 'Smashing',
    status: 'offline',
    summary: 'AI-powered reading curation and summarization app.',
    reasonDiscontinued: 'Company cited insufficient growth and sustainability.',
    datesActive: { shutdownAnnounced: '2025-04-16' },
    relevantUrls: ['https://techcrunch.com/2025/04/16/smashing-the-reading-curation-app-by-goodreads-founder-shuts-down/']
  },
  {
    platformName: 'Yupp',
    parentCompany: 'Ber Sarai Labs Inc.',
    status: 'scheduled_shutdown',
    summary: 'Model-comparison platform for side-by-side AI output evaluation.',
    reasonDiscontinued: 'Company cited weak product-market fit and demand.',
    datesActive: { launchAnnouncement: '2025-06-13', shutdownAnnounced: '2026-03-31', platformAccessUntil: '2026-04-15' },
    relevantUrls: ['https://techcrunch.com/2026/03/31/yupp-ai-shuts-down-33m-a16z-crypto-chris-dixon/']
  },
  {
    platformName: 'Cove',
    parentCompany: 'Cove',
    status: 'offline',
    summary: 'AI collaboration workspace built around an infinite canvas.',
    reasonDiscontinued: 'Product ended as team joined Microsoft.',
    datesActive: { shutdownDate: '2026-04-01' },
    relevantUrls: ['https://techcrunch.com/2026/03/18/microsoft-hires-the-team-of-sequioa-backed-ai-collaboration-platform-cove/']
  },
  {
    platformName: 'Dot',
    parentCompany: 'New Computer',
    status: 'offline',
    summary: 'Personalized AI companion app.',
    reasonDiscontinued: 'Company announced wind-down and data export period.',
    datesActive: { shutdownAnnounced: '2025-09-05', serviceOperationalUntil: '2025-10-05' },
    relevantUrls: ['https://techcrunch.com/2025/09/05/personalized-ai-companion-app-dot-is-shutting-down/']
  },
  {
    platformName: 'Humane AI Pin',
    parentCompany: 'Humane',
    status: 'offline',
    summary: 'Wearable AI pin reliant on cloud services.',
    reasonDiscontinued: 'Shut down in connection with HP asset acquisition.',
    datesActive: { shutdownAnnounced: '2025-02-18', deviceStopWorkingDate: '2025-02-28' },
    relevantUrls: ['https://techcrunch.com/2025/02/18/humanes-ai-pin-is-dead-as-hp-buys-startups-assets-for-116m/']
  },
  {
    platformName: 'Woebot (direct-to-consumer app)',
    parentCompany: 'Woebot Health',
    status: 'service_retired',
    summary: 'Consumer mental-health chatbot app.',
    reasonDiscontinued: 'Company retired consumer app and published data timelines.',
    datesActive: { appRetired: '2025-06-30' },
    relevantUrls: ['https://woebothealth.com/FAQ/']
  },
  {
    platformName: 'Yara AI',
    parentCompany: 'Yara AI',
    status: 'offline',
    summary: 'AI mental wellness/therapy-adjacent chatbot.',
    reasonDiscontinued: 'Shutdown messaging and reporting cited safety concerns.',
    datesActive: { shutdownMonth: '2025-11-01' },
    relevantUrls: ['https://yara-ai.com/']
  },
  {
    platformName: 'Kintsugi (commercial operations)',
    parentCompany: 'Kintsugi',
    status: 'product_wound_down',
    summary: 'Voice-biomarker product for depression/anxiety screening.',
    reasonDiscontinued: 'Commercial operations shut down amid regulatory and funding constraints.',
    datesActive: { shutdownAnnounced: '2026-04-02' },
    relevantUrls: ['https://www.kintsugihealth.com/blog/open-source']
  },
  {
    platformName: 'Babylon Health',
    parentCompany: 'Babylon Health',
    status: 'defunct_company',
    summary: 'AI-enabled telehealth company with symptom/triage experiences.',
    reasonDiscontinued: 'Bankruptcy and asset liquidation.',
    datesActive: { bankruptcyReportingDate: '2023-08-31' },
    relevantUrls: ['https://techcrunch.com/2023/08/31/the-fall-of-babylon-failed-tele-health-startup-once-valued-at-nearly-2b-goes-bankrupt-and-sold-for-parts/']
  },
  {
    platformName: 'Olive AI',
    parentCompany: 'Olive AI',
    status: 'defunct_company',
    summary: 'Healthcare automation and revenue cycle AI platform.',
    reasonDiscontinued: 'Sold substantially all assets and wound down operations.',
    datesActive: { shutdownAnnounced: '2023-11-01' },
    relevantUrls: ['https://www.healthcaredive.com/news/olive-ai-shuts-down/698455/']
  },
  {
    platformName: 'Ghost Autonomy',
    parentCompany: 'Ghost Autonomy',
    status: 'defunct_company',
    summary: 'Autonomous-driving software startup.',
    reasonDiscontinued: 'Cited uncertain profitability and funding conditions.',
    datesActive: { shutdownDate: '2024-04-03' },
    relevantUrls: ['https://techcrunch.com/2024/04/03/openai-backed-ghost-autonomy-shuts-down/']
  },
  {
    platformName: 'CodeParrot AI',
    parentCompany: 'CodeParrot AI',
    status: 'offline',
    summary: 'Design-to-code developer tool.',
    reasonDiscontinued: 'Reported closure after growth and scaling difficulties.',
    datesActive: { shutdownReported: '2025-07-17' },
    relevantUrls: ['https://www.ycombinator.com/companies/codeparrot-ai']
  },
  {
    platformName: 'subtl.ai',
    parentCompany: 'subtl.ai',
    status: 'defunct_company',
    summary: 'Enterprise GenAI document search/discovery startup.',
    reasonDiscontinued: 'Reported inability to raise additional capital.',
    datesActive: { shutdownReported: '2025-07-03' },
    relevantUrls: ['https://inc42.com/buzz/genai-startup-subtl-ai-shuts-shop-after-failing-to-raise-funds/']
  },
  {
    platformName: 'Builder.ai',
    parentCompany: 'Builder.ai',
    status: 'defunct_company',
    summary: 'No-code/low-code app builder marketed with AI assistant features.',
    reasonDiscontinued: 'Entered insolvency proceedings after financial collapse.',
    datesActive: { insolvencyReported: '2025-05-20' },
    relevantUrls: ['https://techcrunch.com/2025/05/20/once-worth-over-1b-microsoft-backed-builder-ai-is-running-out-of-money/']
  },
  {
    platformName: 'Untether AI',
    parentCompany: 'Untether AI',
    status: 'defunct_company',
    summary: 'AI inference chip startup.',
    reasonDiscontinued: 'Closed operations as engineering team joined AMD.',
    datesActive: { shutdownReported: '2025-06-06' },
    relevantUrls: ['https://www.eetimes.com/untether-ai-shuts-down-engineering-team-joins-amd/']
  },
  {
    platformName: 'Tesla Dojo (in-house effort/team)',
    parentCompany: 'Tesla',
    status: 'product_wound_down',
    summary: 'Internal AI training supercomputer/chip effort.',
    reasonDiscontinued: 'Reporting indicated team disband and strategic pivot.',
    datesActive: { shutdownReported: '2025-08-07' },
    relevantUrls: ['https://techcrunch.com/2025/08/07/tesla-shuts-down-dojo-the-ai-training-supercomputer-that-musk-said-would-be-key-to-full-self-driving/']
  },
  {
    platformName: 'Vercept Vy',
    parentCompany: 'Vercept',
    status: 'acquired_and_wound_down',
    summary: 'Desktop computer-use agent product.',
    reasonDiscontinued: 'Wound down after Anthropic acquisition.',
    datesActive: { acquisitionAnnouncement: '2026-02-25', approxShutdownDate: '2026-03-25' },
    relevantUrls: ['https://www.anthropic.com/news/acquires-vercept']
  },
  {
    platformName: 'Monarch Tractor (AI/autonomous platform)',
    parentCompany: 'Monarch Tractor',
    status: 'defunct_company',
    summary: 'AI-driven electric/autonomous tractor startup.',
    reasonDiscontinued: 'Reported collapse with layoffs and operational shutdown.',
    datesActive: { collapseReported: '2026-04-02' },
    relevantUrls: ['https://www.sfgate.com/tech/article/monarch-ai-tractor-failure-22183476.php']
  },
  {
    platformName: 'Claude Explains (Anthropic blog pilot)',
    parentCompany: 'Anthropic',
    status: 'offline',
    summary: 'Pilot AI-generated blog with human editorial oversight.',
    reasonDiscontinued: 'Short-lived pilot that was shut down.',
    datesActive: { pilotShutdownReported: '2025-06-09' },
    relevantUrls: ['https://techcrunch.com/2025/06/09/anthropics-ai-generated-blog-dies-an-early-death/']
  }
];
