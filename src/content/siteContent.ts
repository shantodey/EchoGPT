export const siteContent = {
  brand: {
    name: "EchoGPT",
    logoAlt: "EchoGPT logo",
    homeLabel: "EchoGPT Homepage",
    footerDescription:
      "Multi-AI sidebar for your browser. Switch models, summarize tabs, and speed up research in one place.",
    version: "Version 2.4.0 (Latest)",
    copyright: "© 2026 EchoGPT. All rights reserved.",
    builtByLabel: "Built by",
    builtBy: "Shanto Dey",
  },
  urls: {
    home: "/",
    login: "https://echogpt.live/login",
    website: "https://echogpt.live",
    chromeExtension:"https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj",
    Shanto_Dey: "https://github.com/shantodey",
  },
  navigation: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Models", href: "#models" },
      { label: "Preview", href: "#preview" },
      { label: "Why EchoGPT", href: "#why-echogpt" },
      { label: "FAQ", href: "#faq" },
    ],
    primaryLabel: "Primary Navigation",
    mobileLabel: "Mobile Navigation",
    signIn: "Sign in",
    addToChrome: "Add to Chrome",
    themeSwitch: (theme: "dark" | "light") =>
      `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
    menuToggle: "Toggle mobile menu",
  },
  metadata: {
    title: "EchoGPT — Multi-AI Chat Sidebar",
    description:
      "Summarize pages, explain what you select, and switch models without leaving your tab. Multi-model AI productivity extension powered by GPT-4o, Claude 3.5, Gemini 1.5, Llama 3.1, and Mistral.",
    keywords: [
      "EchoGPT",
      "AI sidebar",
      "Chrome Extension",
      "ChatGPT",
      "Claude 3.5",
      "Gemini 1.5",
      "Llama 3",
      "Mistral",
      "Productivity",
      "Summarizer",
    ],
    socialTitle: "EchoGPT — Every AI. One sidebar.",
    socialDescription:
      "Summarize pages, explain what you select, and switch models without leaving your tab.",
  },
  hero: {
    badge: "Now supporting five model providers",
    title: "Every AI. One sidebar.",
    description:
      "Summarize pages, explain what you select, and switch models without leaving your tab.",
    explore: "Explore the app",
    activeMesh: "ECHO-MESH ACTIVE",
    latency: "LATENCY: 18ms",
    router: "EchoGPT Smart Router",
    inspect: "Hover any node to inspect",
    connected: "Connected",
    socialProofCount: "10,000+",
    socialProofLabel: "active tab-savers",
    rating: "★ 4.9",
    ratingLabel: "Chrome Store rating",
    networkAlt: "Network diagram of EchoGPT connecting to multiple AI models",
  },
  features: {
    eyebrow: "Features",
    title: "Four ways EchoGPT saves you a tab switch",
    description:
      "Built directly into your browser window so you can query models, analyze content, and draft replies right beside your work.",
    learnMore: "Learn more",
    items: [
      {
        id: "multi-model",
        title: "Multi-model chat",
        description:
          "Switch providers mid-conversation without losing context or restarting your thread.",
        tag: "Dynamic Routing",
      },
      {
        id: "summarize",
        title: "Summarize page",
        description:
          "Condense long articles, dense docs, or PDF tabs into clear action points in seconds.",
        tag: "1-Click Digest",
      },
      {
        id: "explain",
        title: "Explain selection",
        description:
          "Highlight any complex term, foreign phrase, or code snippet for instant inline clarity.",
        tag: "Inline Tooltip",
      },
      {
        id: "shortcut",
        title: "Shortcut launch",
        description:
          "Hit Ctrl+Shift+E (Cmd+Shift+E) anywhere to summon the sidebar without touching your mouse.",
        tag: "Keyboard First",
      },
    ],
  },
  models: {
    eyebrow: "AI models",
    title: "One prompt box, five providers",
    description:
      "Pick a model per message, or let EchoGPT route to the one you used last. No separate logins, no juggling tabs.",
    benefits: [
      {
        title: "Zero setup hassle:",
        description:
          "Access top AI APIs instantly or plug your own keys for maximum cost efficiency.",
      },
      {
        title: "Side-by-side comparison:",
        description:
          "Ask a question once and compare answers from multiple LLMs instantly.",
      },
    ],
    chooseModel: "Choose a model",
    available: "5 Available",
    providerLabel: "Provider:",
    ready: "Ready for in-browser prompts",
    connected: "Connected",
    items: [
      {
        id: "gpt",
        name: "GPT",
        version: "GPT-4o & GPT-4o mini",
        provider: "OpenAI",
        context: "128k context",
        speed: "Fast (180ms)",
        description:
          "Omni-modal reasoning, swift structured output, and stellar multilingual comprehension.",
        color: "#7F77DD",
      },
      {
        id: "claude",
        name: "Claude",
        version: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        context: "200k context",
        speed: "Fast (210ms)",
        description:
          "Industry-leading technical writing, complex nuanced coding, and thoughtful edge-case handling.",
        color: "#D85A30",
      },
      {
        id: "gemini",
        name: "Gemini",
        version: "Gemini 1.5 Pro & Flash",
        provider: "Google",
        context: "1M-2M context",
        speed: "Ultra-fast (120ms)",
        description:
          "Massive context window ideal for whole-codebase audits, video analysis, and thick PDFs.",
        color: "#5DCAA5",
      },
      {
        id: "llama",
        name: "Llama",
        version: "Llama 3.1 70B & 405B",
        provider: "Meta AI",
        context: "128k context",
        speed: "Blazing (150ms)",
        description:
          "Open-weights powerhouse running privately for uncensored exploration and custom workflows.",
        color: "#EF9F27",
      },
      {
        id: "mistral",
        name: "Mistral",
        version: "Mistral Large 2",
        provider: "Mistral AI",
        context: "128k context",
        speed: "Quick (190ms)",
        description:
          "European flagship model with exceptional reasoning, math accuracy, and code synthesis.",
        color: "#7F77DD",
      },
    ],
  },
  preview: {
    eyebrow: "Product preview",
    title: "See it in the sidebar",
    description:
      "A native browser companion that stays docked to the right edge. Summon it anytime with Ctrl+Shift+E.",
    browserUrl: "https://investor.sample.com/q3-results",
    sidebarLabel: "EchoGPT Sidebar 340px",
    newChat: "New chat",
    routedTo: "Routed to",
    context: "Context: 1 tab attached",
    inputPlaceholder: "Ask about this tab or compare models...",
    send: "Send message",
    conversations: [
      {
        id: "summary",
        title: "Summarized: Q3 report",
        user: "Summarize this quarterly earnings page in 3 bullets.",
        model: "GPT-4o",
        ai: "Here's the key takeaway from the Q3 earnings filing:\n• Revenue grew 28% YoY driven by enterprise AI adoption.\n• Gross margins expanded to 74% with optimized GPU fleet routing.\n• Free cash flow hit $420M, exceeding consensus estimates by 14%.",
      },
      {
        id: "explain",
        title: "Explained: selection",
        user: "Explain this highlighted snippet: 'zk-SNARK zero knowledge proof'",
        model: "Claude 3.5",
        ai: "A zk-SNARK is a cryptographic technique that lets one party prove to another that a statement is mathematically true without disclosing any secret info about the statement itself.",
      },
      {
        id: "code",
        title: "Refactor: React Hook",
        user: "Can you optimize this useEffect memory leak on line 42?",
        model: "Gemini 1.5",
        ai: "Add an AbortController cleanup in the return handler. This cancels in-flight fetches when the component unmounts and prevents state updates on unmounted trees.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why choose EchoGPT",
    title: "Fewer tabs, faster answers",
    description:
      "No third-party analytics. Settings stay on your device. HTTPS by default. Keep your focus where your work is.",
    highlights: [
      {
        title: "Local & Private",
        description:
          "Prompts route directly to the model provider APIs. Zero data persistence on third-party servers.",
      },
      {
        title: "Lightweight Extension",
        description:
          "Under 1.2MB footprint. No background idle battery drain or bloated tab memory consumption.",
      },
    ],
    benchmark: "Tab clutter vs. Focus",
    benchmarkLabel: "Benchmark",
    withoutLabel: "Without EchoGPT",
    withoutValue: "5 tabs open",
    withoutDescription: "Separate tabs competing for browser memory and attention",
    withLabel: "With EchoGPT",
    withValue: "1 sidebar",
    withDescription: "80% tab reduction • Instant shortcut recall",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions people ask before installing",
    description:
      "Everything you need to know about privacy, model support, and browser integration.",
    items: [
      {
        id: "item-1",
        question: "Is my browsing data collected or stored?",
        answer:
          "No. EchoGPT adheres strictly to a zero-logging privacy model. Page summaries and highlighted selections are transmitted directly to the respective AI provider via encrypted HTTPS endpoints solely to process your immediate prompt. Your history and browsing behaviors are never saved on external servers or sold to advertisers.",
      },
      {
        id: "item-2",
        question: "Which models are supported in EchoGPT?",
        answer:
          "EchoGPT supports leading models including OpenAI (GPT-4o, GPT-4o mini), Anthropic (Claude 3.5 Sonnet), Google (Gemini 1.5 Pro & Flash), Meta (Llama 3.1 70B/405B), and Mistral Large. You can freely switch models mid-chat or set your favorite default.",
      },
      {
        id: "item-3",
        question: "Does it work on every website and PDF?",
        answer:
          "Yes. The extension runs in an isolated sidebar container that works seamlessly across blogs, documentation sites, internal portals, Google Docs, Notion, and in-browser PDF viewers without altering the website's native stylesheets.",
      },
      {
        id: "item-4",
        question: "How do I trigger EchoGPT while browsing?",
        answer:
          "You can press the global hotkey Ctrl+Shift+E (Cmd+Shift+E on macOS) to instantly summon or dismiss the sidebar. You can also select any text on any page and click the floating EchoGPT pill to explain, summarize, translate, or rewrite the highlighted excerpt.",
      },
      {
        id: "item-5",
        question: "Do I need separate API keys or subscriptions?",
        answer:
          "EchoGPT works right out of the box with ready-to-use access tiers. If you prefer using your own OpenAI, Anthropic, or Google Cloud API keys, you can add them directly in settings for zero-markup pay-per-token usage.",
      },
    ],
  },
  cta: {
    badge: "INSTANT INSTALL • NO CREDIT CARD",
    title: "Bring every AI into one sidebar.",
    description:
      "Free to install. Two-minute setup. Start reading, summarizing, and writing faster across all your browser tabs today.",
    seeFeatures: "See all features",
    benefits: [
      "Works with Chrome, Brave, Arc & Edge",
      "Manifest V3 Compliant",
      "End-to-end encrypted",
    ],
  },
  footer: {
    sections: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "AI Models", href: "#models" },
          { label: "Sidebar Demo", href: "#preview" },
          { label: "Chrome Extension", href: "chromeExtension", badge: "Free" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "website" },
          { label: "Blog & Updates", href: "website" },
          { label: "Community", href: "website" },
          { label: "Contact Support", href: "website" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "website" },
          { label: "Terms of Service", href: "website" },
          { label: "Security Overview", href: "website" },
          { label: "Cookie Settings", href: "website" },
        ],
      },
    ],
  },
} as const

export type SiteContent = typeof siteContent
export type NavLinkItem = SiteContent["navigation"]["links"][number]
export type FeatureItem = SiteContent["features"]["items"][number]
export type ModelInfo = SiteContent["models"]["items"][number]
export type ChatConversation = SiteContent["preview"]["conversations"][number]
export type FaqItem = SiteContent["faq"]["items"][number]
