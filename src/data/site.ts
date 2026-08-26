/**
 * Central, easily editable content for Visionex Media Services.
 */

export const company = {
  name: "Visionex Media Services",
  short: "Visionex",
  fullLegal: "Visionex Media Pvt Ltd",
  description: "Visionex Media Services is an IT and technology solutions company engineering software, cloud and security systems for organisations that depend on them.",
  tagline: "Engineering the Digital Future.",
  email: "info@VisionexMedia.com",
  phone: "+91 9834949813",
  address: "Office 1205 Ambience Court, Plot No. 2, Sector 19D, Vashi, Navi Mumbai, Maharashtra 400705",
  legalEntity: "Visionex Media Pvt Ltd",
  jurisdiction: "India",
  lastUpdated: "2026-08-17",
};

export const social = {
  facebook: "https://www.facebook.com/people/Visionex-Media/61593857698401/",
  instagram: "https://www.instagram.com/_visionex_media/",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  capabilities: string[];
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom systems built to survive scale, change and time.",
    summary:
      "We design and build custom software for organisations whose requirements outgrow off-the-shelf tooling — from internal platforms to customer-facing systems, engineered around clear domain models and long-term maintainability.",
    capabilities: [
      "Domain-driven architecture and system design",
      "Greenfield product builds and legacy modernisation",
      "Automated testing and continuous delivery pipelines",
      "Performance engineering and observability",
    ],
    deliverables: [
      "Technical architecture",
      "Production codebase",
      "Test suite & CI",
      "Handover documentation",
    ],
    stack: ["TypeScript", "Go", "Python", "PostgreSQL", "Docker"],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    short: "High-performance web platforms with real engineering behind the interface.",
    summary:
      "Web applications built for speed, accessibility and operational reliability — server-rendered where it matters, measured against real performance budgets, and designed to be maintained by your team.",
    capabilities: [
      "Server-rendered and edge-deployed frontends",
      "Design systems and component libraries",
      "Accessibility and Core Web Vitals engineering",
      "Complex state, data and realtime interfaces",
    ],
    deliverables: [
      "Design system",
      "Application frontend",
      "Performance report",
      "Component documentation",
    ],
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "Native-quality mobile products with a shared engineering core.",
    summary:
      "Mobile applications engineered for reliability on real devices and real networks — offline behaviour, background sync, release pipelines and store operations included.",
    capabilities: [
      "Cross-platform and native application development",
      "Offline-first data and sync strategies",
      "Push, deep-linking and device integrations",
      "Release automation and store operations",
    ],
    deliverables: [
      "iOS & Android builds",
      "Release pipeline",
      "Crash & analytics wiring",
      "Store submission support",
    ],
    stack: ["React Native", "Swift", "Kotlin", "Fastlane"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Infrastructure defined in code, designed for cost and resilience.",
    summary:
      "Cloud platforms architected around clear failure domains, predictable cost and reproducible environments — from migration through to steady-state operations.",
    capabilities: [
      "Cloud architecture and migration planning",
      "Infrastructure as code and environment parity",
      "Autoscaling, resilience and disaster recovery",
      "Cost modelling and FinOps guardrails",
    ],
    deliverables: ["Reference architecture", "IaC modules", "Runbooks", "Cost model"],
    stack: ["AWS", "Azure", "Terraform", "Kubernetes"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Applied intelligence wired into systems that already run your business.",
    summary:
      "Pragmatic AI engineering: retrieval systems, document and workflow automation, and model integration built with evaluation, guardrails and human review designed in from the start.",
    capabilities: [
      "Retrieval-augmented systems over private data",
      "Workflow and back-office automation",
      "Model integration, evaluation and guardrails",
      "Data pipelines and vector infrastructure",
    ],
    deliverables: [
      "Solution design",
      "Evaluation harness",
      "Production integration",
      "Operating guidelines",
    ],
    stack: ["Python", "LLM APIs", "Vector databases", "Event queues"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Security engineered into the architecture, not bolted on afterwards.",
    summary:
      "Security work grounded in the way your systems are actually built — threat modelling, identity architecture, hardening and continuous assurance across the delivery lifecycle.",
    capabilities: [
      "Threat modelling and architecture review",
      "Identity, access and secrets management",
      "Application and infrastructure hardening",
      "Secure SDLC and dependency assurance",
    ],
    deliverables: [
      "Threat model",
      "Findings & remediation plan",
      "Hardened baselines",
      "Security playbooks",
    ],
    stack: ["OIDC / OAuth 2.0", "Zero-trust patterns", "SAST / DAST", "Secrets management"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    short: "Technical judgement where the decisions are expensive to reverse.",
    summary:
      "Independent engineering advisory for technology strategy, platform decisions, delivery health and build-versus-buy calls — written down, evidenced, and directly actionable.",
    capabilities: [
      "Technology strategy and roadmapping",
      "Architecture and code due diligence",
      "Delivery and engineering-practice assessment",
      "Vendor and platform evaluation",
    ],
    deliverables: [
      "Assessment report",
      "Target architecture",
      "Prioritised roadmap",
      "Decision records",
    ],
    stack: ["Architecture reviews", "ADRs", "Capability mapping"],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    short: "Networks, environments and operations that stay boring under load.",
    summary:
      "Infrastructure design and operations engineering — networking, environments, monitoring and incident response built so that reliability is measured rather than assumed.",
    capabilities: [
      "Network and environment architecture",
      "Observability, alerting and SLOs",
      "Backup, continuity and recovery testing",
      "Operational tooling and automation",
    ],
    deliverables: [
      "Infrastructure design",
      "Monitoring stack",
      "SLO definitions",
      "Incident runbooks",
    ],
    stack: ["Linux", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    slug: "system-integration",
    title: "API & System Integration",
    short: "Making separate systems behave like one coherent platform.",
    summary:
      "Integration engineering across internal services, third-party platforms and legacy systems — API design, event architecture and data contracts that hold up as the estate grows.",
    capabilities: [
      "API design, versioning and governance",
      "Event-driven and message-based integration",
      "Legacy system interfacing and data migration",
      "Contract testing and integration monitoring",
    ],
    deliverables: ["API specifications", "Integration layer", "Contract tests", "Migration plan"],
    stack: ["REST", "GraphQL", "gRPC", "Kafka", "OpenAPI"],
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    short: "A full engineering function for teams building a product from zero.",
    summary:
      "End-to-end product engineering — discovery, architecture, build and iteration — run as an embedded team with the discipline of an internal engineering organisation.",
    capabilities: [
      "Product discovery and technical shaping",
      "MVP architecture and iterative delivery",
      "Instrumentation and product analytics",
      "Scaling teams, processes and platforms",
    ],
    deliverables: [
      "Product architecture",
      "Release cadence",
      "Analytics foundation",
      "Scaling plan",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
];

export const methodology = [
  {
    step: "01",
    name: "Discover",
    body: "Constraints, systems and objectives mapped before a single line of code. We document what exists, what it costs, and what must be true for the work to succeed.",
  },
  {
    step: "02",
    name: "Architect",
    body: "Architecture decisions written down and defended — data models, boundaries, failure domains, security posture and the trade-offs behind each choice.",
  },
  {
    step: "03",
    name: "Engineer",
    body: "Incremental delivery with automated testing, review and continuous integration. Progress is measured in working software, not status reports.",
  },
  {
    step: "04",
    name: "Deploy",
    body: "Reproducible environments, controlled releases and observability from day one, so the first production day looks like every day after it.",
  },
  {
    step: "05",
    name: "Evolve",
    body: "Systems are maintained against real usage — performance, cost, security and capability reviewed on a cadence rather than in a crisis.",
  },
];

export const industries = [
  { name: "Financial Services", note: "Regulated data flows, auditability and resilience." },
  { name: "Healthcare & Life Sciences", note: "Sensitive data handling and interoperability." },
  { name: "Logistics & Supply Chain", note: "Realtime tracking, routing and integration." },
  { name: "Retail & Commerce", note: "High-traffic platforms and order systems." },
  { name: "Manufacturing", note: "Operational data, telemetry and automation." },
  { name: "Public Sector", note: "Accessibility, transparency and long service life." },
  { name: "Energy & Utilities", note: "Asset monitoring and field systems." },
  { name: "Professional Services", note: "Workflow platforms and internal tooling." },
];

export const ecosystem = [
  {
    layer: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "React Native"],
  },
  { layer: "Backend", items: ["Node.js", "Go", "Python", "Java", "REST", "GraphQL"] },
  { layer: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Serverless"] },
  { layer: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Vector stores"] },
  {
    layer: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Observability"],
  },
  {
    layer: "AI",
    items: ["LLM integration", "RAG pipelines", "Embeddings", "Evaluation harnesses"],
  },
  {
    layer: "Security",
    items: ["OAuth 2.0 / OIDC", "Zero-trust", "Secrets management", "SAST / DAST"],
  },
  { layer: "APIs", items: ["OpenAPI", "gRPC", "Webhooks", "Event streaming", "Contract testing"] },
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  discipline: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  stack: string[];
  image: "dashboard" | "infrastructure" | "security" | "software";
};

/**
 * PLACEHOLDER CASE STUDIES.
 * These are illustrative engagement shapes, not real clients or results.
 * Replace the copy below with confirmed project details before publishing.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "operations-platform",
    title: "Unified Operations Platform",
    sector: "[Sector placeholder]",
    discipline: "Product Engineering",
    summary:
      "An internal operations platform consolidating fragmented tooling into a single system of record. Placeholder project — replace with a confirmed engagement.",
    challenge:
      "[Placeholder] Describe the operational problem, the systems in play, and the constraints that shaped the engagement.",
    approach: [
      "[Placeholder] Discovery of existing workflows and data ownership.",
      "[Placeholder] Target architecture and phased migration plan.",
      "[Placeholder] Incremental delivery against production usage.",
    ],
    outcome:
      "[Placeholder] Describe the confirmed outcome. Do not publish metrics that have not been verified with the client.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "dashboard",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration & Platform Rebuild",
    sector: "[Sector placeholder]",
    discipline: "Cloud Solutions",
    summary:
      "A staged migration from self-managed infrastructure to a codified cloud platform. Placeholder project — replace with a confirmed engagement.",
    challenge:
      "[Placeholder] Describe the legacy estate, its cost profile and its reliability constraints.",
    approach: [
      "[Placeholder] Infrastructure assessment and dependency mapping.",
      "[Placeholder] Infrastructure-as-code foundation and environment parity.",
      "[Placeholder] Cutover strategy with rollback paths.",
    ],
    outcome: "[Placeholder] Describe the confirmed outcome once verified.",
    stack: ["AWS", "Terraform", "Kubernetes", "Grafana"],
    image: "infrastructure",
  },
  {
    slug: "security-hardening",
    title: "Security Architecture Programme",
    sector: "[Sector placeholder]",
    discipline: "Cybersecurity",
    summary:
      "A threat-model-led hardening programme across application and infrastructure layers. Placeholder project — replace with a confirmed engagement.",
    challenge: "[Placeholder] Describe the risk profile and the drivers behind the programme.",
    approach: [
      "[Placeholder] Threat modelling across critical flows.",
      "[Placeholder] Identity and secrets architecture.",
      "[Placeholder] Secure SDLC integration and assurance cadence.",
    ],
    outcome: "[Placeholder] Describe the confirmed outcome once verified.",
    stack: ["OIDC", "Zero-trust", "Secrets management", "SAST"],
    image: "security",
  },
  {
    slug: "integration-layer",
    title: "Enterprise Integration Layer",
    sector: "[Sector placeholder]",
    discipline: "API & System Integration",
    summary:
      "An event-driven integration layer connecting legacy systems to modern services. Placeholder project — replace with a confirmed engagement.",
    challenge: "[Placeholder] Describe the fragmentation problem and the systems involved.",
    approach: [
      "[Placeholder] API and event contract design.",
      "[Placeholder] Incremental strangler-pattern rollout.",
      "[Placeholder] Contract testing and integration monitoring.",
    ],
    outcome: "[Placeholder] Describe the confirmed outcome once verified.",
    stack: ["Kafka", "OpenAPI", "Go", "PostgreSQL"],
    image: "software",
  },
];

export const whyVisionex = [
  {
    title: "Engineering-led",
    body: "Every engagement is owned by engineers who write the architecture and the code. No translation layer between the decision and the implementation.",
  },
  {
    title: "Built to be handed over",
    body: "Documentation, tests and infrastructure definitions are deliverables, not afterthoughts. Your team can take ownership at any point.",
  },
  {
    title: "Security by default",
    body: "Threat modelling, least privilege and dependency assurance are part of the delivery process rather than a separate audit.",
  },
  {
    title: "Designed for scale",
    body: "Systems are architected around explicit failure domains, cost models and growth paths — not around today's traffic alone.",
  },
];

export const solutions = [
  {
    name: "Digital Platform Modernisation",
    body: "Replatforming legacy estates onto maintainable architectures without stopping the business.",
    services: ["software-development", "cloud-solutions", "system-integration"],
  },
  {
    name: "Cloud & Reliability Engineering",
    body: "Codified infrastructure, measured reliability and predictable operating cost.",
    services: ["cloud-solutions", "it-infrastructure"],
  },
  {
    name: "Secure by Design Delivery",
    body: "Security architecture embedded into the engineering lifecycle from the first sprint.",
    services: ["cybersecurity", "it-consulting"],
  },
  {
    name: "Applied AI & Automation",
    body: "Intelligence added to existing operations with evaluation and human oversight built in.",
    services: ["ai-automation", "system-integration"],
  },
  {
    name: "Product Zero-to-One",
    body: "An embedded engineering function for teams taking a new product to market.",
    services: ["product-engineering", "web-applications", "mobile-apps"],
  },
];

export const projectTypes = [
  "Software Development",
  "Web Application",
  "Mobile App",
  "Cloud & Infrastructure",
  "AI & Automation",
  "Cybersecurity",
  "IT Consulting",
  "System Integration",
  "Other",
];

export const faqs = [
  {
    question: "What kinds of organisations does Visionex work with?",
    answer:
      "Organisations whose software, cloud or security requirements have outgrown off-the-shelf tooling — from mid-market teams building a first internal platform to enterprises modernising legacy estates.",
  },
  {
    question: "Do you work on fixed-scope projects or ongoing engagements?",
    answer:
      "Both. Some engagements are scoped, delivered and handed over; others run as an embedded engineering function over a longer period. We agree the shape during discovery, not after the contract is signed.",
  },
  {
    question: "Who owns the code and infrastructure after delivery?",
    answer:
      "You do. Source code, infrastructure-as-code, documentation and credentials are handed over as standard deliverables — engagements are designed so your team can take ownership at any point.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on scope, timeline and the discipline involved. After an initial scoping conversation we provide a written estimate — see the budget ranges on our contact form as a starting reference point.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Yes — we regularly integrate with in-house teams, either leading a specific workstream or embedding engineers directly into your existing delivery process.",
  },
  {
    question: "What does the first engagement typically look like?",
    answer:
      "A discovery phase: constraints, systems and objectives mapped before any code is written. It produces a written scope and architecture direction you can act on with or without us.",
  },
];

export const budgetRanges = [
  "Under $25,000",
  "$25,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000+",
  "Not yet defined",
];
