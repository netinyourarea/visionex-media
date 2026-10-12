/**
 * Central, easily editable content for Visionex Media Private Limited.
 */

export const company = {
  name: "Visionex Media Private Limited",
  short: "Visionex",
  fullLegal: "Visionex Media Private Limited",
  description: "Visionex Media Private Limited is an IT and technology solutions company engineering software, cloud and security systems for organisations that depend on them.",
  tagline: "Engineering the Digital Future.",
  email: "ind.visionmedia@gmail.com",
  phone: "+91 7304854196",
  address: "Unit No. C227, Bhoomi Mall, Plot No. 09, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614",
  legalEntity: "Visionex Media Private Limited",
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
  price: number; // Under 25,000 INR
  timeline: string;
  badge?: string;
  capabilities: string[];
  deliverables: string[];
  stack: string[];
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom systems built to survive scale, change and time.",
    summary:
      "We design and build custom software for organisations whose requirements outgrow off-the-shelf tooling — from internal platforms to customer-facing systems, engineered around clear domain models and long-term maintainability.",
    price: 24500,
    timeline: "2–4 Weeks Sprint",
    badge: "Most Requested",
    capabilities: [
      "Domain-driven architecture and system design",
      "Greenfield product builds and legacy modernisation",
      "Automated testing and continuous delivery pipelines",
      "Performance engineering and observability",
    ],
    deliverables: [
      "Technical architecture specification",
      "Production-ready codebase & repository",
      "Comprehensive test suite & CI/CD",
      "System handover & operational documentation",
    ],
    stack: ["TypeScript", "Go", "Python", "PostgreSQL", "Docker"],
    features: [
      {
        title: "Clean Domain Architecture",
        description: "Explicit domain boundaries and clean separation of concerns ensuring codebase longevity and zero vendor lock-in.",
      },
      {
        title: "High Throughput & Low Latency",
        description: "Engineered for optimal database querying, asynchronous queue handling, and sub-100ms response benchmarks.",
      },
      {
        title: "Rigorous Test Harness",
        description: "Unit, integration, and end-to-end automated tests with git-triggered validation preventing regressions.",
      },
      {
        title: "Production Observability",
        description: "Structured telemetry, OpenTelemetry hooks, health probes, and runtime metrics built into the core.",
      },
    ],
    process: [
      { step: "01", title: "Discovery & Domain Modeling", description: "Deep dive into your domain entities, business logic, constraints, and operational goals." },
      { step: "02", title: "Architecture & Interface Design", description: "Design schema models, API contracts, dependency boundaries, and failure mitigations." },
      { step: "03", title: "Test-Driven Sprint Delivery", description: "Rapid incremental development with automated test pipelines and preview environments." },
      { step: "04", title: "Production Hardening & Handover", description: "Load testing, vulnerability scans, CI/CD deployment, and full code handover." },
    ],
    faqs: [
      { question: "What is included in the ₹24,500 software engineering sprint?", answer: "A complete custom development sprint covering core architecture, implementation of scoped domain modules, CI/CD pipeline, and full source code handover with tests." },
      { question: "Do we retain full intellectual property?", answer: "Yes, 100% of the codebase, documentation, and architecture assets are transferred with full IP ownership to your company." },
      { question: "What tech stacks do you support?", answer: "Our core stacks include TypeScript/Node.js, Go, Python, PostgreSQL, Redis, and containerized Docker environments." },
    ],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    short: "High-performance web platforms with real engineering behind the interface.",
    summary:
      "Web applications built for speed, accessibility and operational reliability — server-rendered where it matters, measured against real performance budgets, and designed to be maintained by your team.",
    price: 18500,
    timeline: "2–3 Weeks Sprint",
    badge: "High Performance",
    capabilities: [
      "Server-rendered and edge-deployed frontends",
      "Design systems and component libraries",
      "Accessibility and Core Web Vitals engineering",
      "Complex state, data and realtime interfaces",
    ],
    deliverables: [
      "Custom UI design system & token definitions",
      "Full responsive web application frontend",
      "Core Web Vitals performance report (95+ score)",
      "Component documentation & Storybook/living docs",
    ],
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
    features: [
      {
        title: "Edge & SSR Rendering",
        description: "Sub-second initial page loads and optimal SEO via server-rendered and edge-cached architecture.",
      },
      {
        title: "Reusable Design Tokens",
        description: "Unified typography, color palette, and component primitives that streamline future feature development.",
      },
      {
        title: "Accessible & WCAG Compliant",
        description: "Keyboard navigable, screen-reader ready, and structured with semantic HTML5 standards.",
      },
      {
        title: "Realtime Reactive State",
        description: "Optimistic updates, offline-tolerant caching, and WebSocket/SSE connectivity for instant user feedback.",
      },
    ],
    process: [
      { step: "01", title: "UI/UX & Wireframe Mapping", description: "Translating product user journeys into responsive layout hierarchy and state flows." },
      { step: "02", title: "Component Library Construction", description: "Building accessible atomic components matching your corporate brand guidelines." },
      { step: "03", title: "Application State & API Wiring", description: "Connecting dynamic backend services with caching, validation, and error boundaries." },
      { step: "04", title: "Performance Tuning & Launch", description: "Lighthouse optimization, bundle slimming, CDN configuration, and production cutover." },
    ],
    faqs: [
      { question: "How fast will the web application load?", answer: "We target 95+ Google Lighthouse scores with sub-second LCP (Largest Contentful Paint) and zero layout shifts." },
      { question: "Is mobile responsiveness guaranteed?", answer: "Yes, every layout is tested across iOS Safari, Android Chrome, tablet viewports, and desktop resolutions." },
      { question: "Can this integrate with our existing backend or headless CMS?", answer: "Yes, we connect directly with REST, GraphQL, Supabase, Firebase, or custom backend services." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "Native-quality mobile products with a shared engineering core.",
    summary:
      "Mobile applications engineered for reliability on real devices and real networks — offline behaviour, background sync, release pipelines and store operations included.",
    price: 21000,
    timeline: "3–4 Weeks Sprint",
    badge: "iOS & Android",
    capabilities: [
      "Cross-platform and native application development",
      "Offline-first data and sync strategies",
      "Push, deep-linking and device integrations",
      "Release automation and store operations",
    ],
    deliverables: [
      "Production iOS & Android application binaries",
      "Automated release pipeline configuration",
      "Crash reporting & telemetry wiring",
      "App Store & Google Play submission guidance",
    ],
    stack: ["React Native", "Swift", "Kotlin", "Fastlane"],
    features: [
      {
        title: "60 FPS Fluid Interactions",
        description: "Native driver animations, gesture handlers, and layout computations engineered for high framerates.",
      },
      {
        title: "Offline-First Sync Engine",
        description: "Local SQLite/WatermelonDB persistence with conflict resolution when network reconnects.",
      },
      {
        title: "Native Device Capabilities",
        description: "Camera, biometrics (FaceID/Fingerprint), push notifications, geolocation, and haptics integration.",
      },
      {
        title: "Automated Store Builds",
        description: "Fastlane deployment pipelines producing signed release bundles without manual developer intervention.",
      },
    ],
    process: [
      { step: "01", title: "Mobile Architecture Setup", description: "Configuring cross-platform build targets, native bridges, and credential keystores." },
      { step: "02", title: "Native UI & Gesture Assembly", description: "Developing touch-first interfaces adapted to iOS Human Interface and Android Material guidelines." },
      { step: "03", title: "Device Integrations & Sync", description: "Implementing offline data storage, push certificates, and secure authentication tokens." },
      { step: "04", title: "TestFlight / Internal Testing", description: "Distributing beta builds to stakeholders, monitoring crash analytics, and preparing store listings." },
    ],
    faqs: [
      { question: "Do you publish to both Apple App Store and Google Play?", answer: "Yes, we prepare all bundle identifiers, provisioning profiles, asset sets, and submission checklists." },
      { question: "Does the app work when the user has no internet?", answer: "Yes, we build offline caching so key flows remain usable and synchronize automatically upon reconnection." },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Infrastructure defined in code, designed for cost and resilience.",
    summary:
      "Cloud platforms architected around clear failure domains, predictable cost and reproducible environments — from migration through to steady-state operations.",
    price: 22500,
    timeline: "2–3 Weeks Sprint",
    badge: "AWS & Azure",
    capabilities: [
      "Cloud architecture and migration planning",
      "Infrastructure as code and environment parity",
      "Autoscaling, resilience and disaster recovery",
      "Cost modelling and FinOps guardrails",
    ],
    deliverables: [
      "Cloud reference architecture documentation",
      "Modular Terraform / OpenTofu IaC scripts",
      "Disaster recovery & runbook blueprints",
      "Monthly cloud cost optimization model",
    ],
    stack: ["AWS", "Azure", "Terraform", "Kubernetes"],
    features: [
      {
        title: "Codified Infrastructure (IaC)",
        description: "Zero manual console clicks. Reproduce complete staging and production environments within minutes.",
      },
      {
        title: "Multi-Zone High Availability",
        description: "Engineered across multiple availability zones with automated failover and zero single points of failure.",
      },
      {
        title: "FinOps Cost Guardrails",
        description: "Resource right-sizing, autoscaling policies, and budget alerts preventing unexpected billing surges.",
      },
      {
        title: "Hardened Security Perimeter",
        description: "Private VPC subnets, strict security groups, WAF rules, and least-privilege IAM policies.",
      },
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Assessing existing compute workloads, storage footprints, and networking constraints." },
      { step: "02", title: "Terraform IaC Authoring", description: "Writing modular, version-controlled cloud templates for networking, clusters, and databases." },
      { step: "03", title: "Automated Deployment & CI/CD", description: "Wiring GitHub Actions / GitLab CI for automated plan/apply steps with manual approval gates." },
      { step: "04", title: "Failover Drills & Handover", description: "Testing automated recovery, verifying backups, and delivering comprehensive architecture runbooks." },
    ],
    faqs: [
      { question: "Can you help reduce our existing AWS or Azure cloud bill?", answer: "Yes, our cloud engagements typically achieve 25–45% reductions in monthly compute and database costs." },
      { question: "Do you support containerization with Kubernetes?", answer: "Yes, we architect managed EKS/AKS clusters with ingress controllers, secret stores, and autoscalers." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Applied intelligence wired into systems that already run your business.",
    summary:
      "Pragmatic AI engineering: retrieval systems, document and workflow automation, and model integration built with evaluation, guardrails and human review designed in from the start.",
    price: 24000,
    timeline: "2–4 Weeks Sprint",
    badge: "Intelligent Systems",
    capabilities: [
      "Retrieval-augmented systems over private data",
      "Workflow and back-office automation",
      "Model integration, evaluation and guardrails",
      "Data pipelines and vector infrastructure",
    ],
    deliverables: [
      "AI solution design & evaluation harness",
      "Vector search & document ingestion pipeline",
      "Production LLM integration with guardrails",
      "Operational prompt engineering guidelines",
    ],
    stack: ["Python", "LLM APIs", "Vector databases", "Event queues"],
    features: [
      {
        title: "Enterprise RAG on Private Data",
        description: "Semantic search across internal PDFs, spreadsheets, and databases with strict hallucination filtering.",
      },
      {
        title: "Prompt Guardrails & Safety",
        description: "Input sanitization, output schema enforcement via Pydantic/Zod, and rate-limiting safeguards.",
      },
      {
        title: "Deterministic Fallbacks",
        description: "Rule-based and human-in-the-loop escalation paths when model confidence falls below defined thresholds.",
      },
      {
        title: "Cost & Token Efficiency",
        description: "Semantic prompt caching, token optimization, and intelligent model routing between fast and frontier models.",
      },
    ],
    process: [
      { step: "01", title: "Use-Case Feasibility & Data Audit", description: "Mapping high-impact repetitive workflows and validating input document quality." },
      { step: "02", title: "RAG & Pipeline Prototyping", description: "Chunking strategies, embedding generation, vector indexing, and benchmark testing." },
      { step: "03", title: "Production Model Integration", description: "Connecting LLM orchestrators with internal APIs, asynchronous queues, and webhook listeners." },
      { step: "04", title: "Evaluation & Guardrail Tuning", description: "Running automated test suites measuring precision, recall, latency, and token economics." },
    ],
    faqs: [
      { question: "Will our proprietary business data be shared with public models?", answer: "No, we configure private endpoints with zero data retention policies and on-premise vector embeddings." },
      { question: "How do you prevent AI hallucinations?", answer: "Through strict RAG grounding, citation validation, structured JSON outputs, and programmatic schema checks." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Security engineered into the architecture, not bolted on afterwards.",
    summary:
      "Security work grounded in the way your systems are actually built — threat modelling, identity architecture, hardening and continuous assurance across the delivery lifecycle.",
    price: 19500,
    timeline: "2–3 Weeks Sprint",
    badge: "Zero-Trust",
    capabilities: [
      "Threat modelling and architecture review",
      "Identity, access and secrets management",
      "Application and infrastructure hardening",
      "Secure SDLC and dependency assurance",
    ],
    deliverables: [
      "Comprehensive threat model & risk matrix",
      "Vulnerability assessment & remediation roadmap",
      "Hardened server & container security baselines",
      "Security incident playbooks & compliance checklist",
    ],
    stack: ["OIDC / OAuth 2.0", "Zero-trust patterns", "SAST / DAST", "Secrets management"],
    features: [
      {
        title: "Zero-Trust Architecture",
        description: "Explicit verification for every request, least-privilege microsegmentation, and ephemeral credentials.",
      },
      {
        title: "Automated Code Scanning",
        description: "Static and dynamic analysis (SAST/DAST) baked into GitHub Actions to catch CVEs prior to production.",
      },
      {
        title: "Secrets Vault Isolation",
        description: "Centralized secret rotation using HashiCorp Vault / AWS Secrets Manager with zero hardcoded credentials.",
      },
      {
        title: "Compliance Readiness",
        description: "Alignment with ISO 27001, SOC2, and DPDP Indian Data Protection Act architectural guidelines.",
      },
    ],
    process: [
      { step: "01", title: "Threat Modeling Workshop", description: "Diagramming data flows, trust boundaries, attack vectors, and high-value target assets." },
      { step: "02", title: "Vulnerability Scanning & Code Review", description: "Executing automated security suites and manual inspection of critical authentication handlers." },
      { step: "03", title: "Remediation & Hardening", description: "Patching exposed endpoints, configuring WAF protections, and tightening IAM roles." },
      { step: "04", title: "Verification & Security Playbook", description: "Verifying fixes, generating executive sign-off audit reports, and delivering incident runbooks." },
    ],
    faqs: [
      { question: "Do you provide an audit certificate upon completion?", answer: "Yes, we provide a formal Technical Vulnerability Assessment Report with remediation sign-off." },
      { question: "Can you review third-party APIs and libraries we depend on?", answer: "Yes, Software Bill of Materials (SBOM) and supply-chain dependency auditing are standard deliverables." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    short: "Technical judgement where the decisions are expensive to reverse.",
    summary:
      "Independent engineering advisory for technology strategy, platform decisions, delivery health and build-versus-buy calls — written down, evidenced, and directly actionable.",
    price: 14500,
    timeline: "1–2 Weeks Advisory",
    badge: "Advisory & Strategy",
    capabilities: [
      "Technology strategy and roadmapping",
      "Architecture and code due diligence",
      "Delivery and engineering-practice assessment",
      "Vendor and platform evaluation",
    ],
    deliverables: [
      "Engineering health & technical debt assessment report",
      "Target architecture blueprint & ADRs",
      "Prioritised 12-month engineering roadmap",
      "Vendor & build-vs-buy evaluation matrix",
    ],
    stack: ["Architecture reviews", "ADRs", "Capability mapping", "Cost modeling"],
    features: [
      {
        title: "Pragmatic Architecture Decisions",
        description: "Architecture Decision Records (ADRs) clearly defining trade-offs, risks, and business impacts.",
      },
      {
        title: "Codebase Due Diligence",
        description: "Objective analysis of maintainability, test coverage, technical debt, and team delivery velocity.",
      },
      {
        title: "Vendor Contract Appraisal",
        description: "Unbiased technical vetting of software proposals, cloud contracts, and offshore vendor claims.",
      },
      {
        title: "Delivery Process Streamlining",
        description: "Fixing delivery bottlenecks, CI/CD friction, and release cadences for internal tech squads.",
      },
    ],
    process: [
      { step: "01", title: "Stakeholder Interviews", description: "Meeting tech leads, product managers, and founders to understand business priorities." },
      { step: "02", title: "Repository & System Inspection", description: "Deep inspection of code repos, deployment logs, infrastructure topology, and documentation." },
      { step: "03", title: "Synthesis & Options Modeling", description: "Drafting concrete recommendations with cost/benefit analysis and risk scoring." },
      { step: "04", title: "Executive Readout & Roadmap", description: "Presenting actionable findings and delivering step-by-step modernization milestones." },
    ],
    faqs: [
      { question: "Who delivers the advisory engagement?", answer: "Engagements are led directly by Senior Principal Engineers with 10+ years of high-scale systems experience." },
      { question: "Is this report actionable for non-technical executives?", answer: "Yes, our deliverables include an executive summary for leadership alongside deep technical specifications." },
    ],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    short: "Networks, environments and operations that stay boring under load.",
    summary:
      "Infrastructure design and operations engineering — networking, environments, monitoring and incident response built so that reliability is measured rather than assumed.",
    price: 16500,
    timeline: "2–3 Weeks Sprint",
    badge: "Reliability & SRE",
    capabilities: [
      "Network and environment architecture",
      "Observability, alerting and SLOs",
      "Backup, continuity and recovery testing",
      "Operational tooling and automation",
    ],
    deliverables: [
      "Infrastructure network topology diagram",
      "Centralized Grafana/Prometheus monitoring stack",
      "SLO/SLA definitions and alerting rules",
      "Automated backup & incident runbooks",
    ],
    stack: ["Linux", "Kubernetes", "Prometheus", "Grafana"],
    features: [
      {
        title: "Automated Incident Alerting",
        description: "PagerDuty/Slack notifications routed on symptom-based alerts rather than noisy server CPU spikes.",
      },
      {
        title: "Immutable OS & Linux Baselines",
        description: "Kernel hardening, automated security patching, and SSH key rotation across all production nodes.",
      },
      {
        title: "Reliable Disaster Backups",
        description: "Automated snapshotting with tested restore pipelines to ensure RPO and RTO guarantees are met.",
      },
      {
        title: "Unified Log Aggregation",
        description: "Centralized indexing of application and system logs for instantaneous troubleshooting during incidents.",
      },
    ],
    process: [
      { step: "01", title: "Environment Discovery", description: "Inventorying virtual servers, VPC peering, firewall configurations, and service dependencies." },
      { step: "02", title: "Observability Deployment", description: "Installing node exporters, application metrics collectors, and logging agents." },
      { step: "03", title: "Threshold & Alert Tuning", description: "Setting SLO thresholds, alert silence rules, and on-call escalation policies." },
      { step: "04", title: "Chaos & Recovery Drills", description: "Simulating node failures, verifying automated failover, and finalizing operations runbooks." },
    ],
    faqs: [
      { question: "Can you configure monitoring on our existing Linux servers?", answer: "Yes, we set up Prometheus, Grafana, and Loki with pre-configured dashboards for system health." },
      { question: "Do you help with database replication and backups?", answer: "Yes, automated point-in-time recovery and read-replica failovers are included." },
    ],
  },
  {
    slug: "system-integration",
    title: "API & System Integration",
    short: "Making separate systems behave like one coherent platform.",
    summary:
      "Integration engineering across internal services, third-party platforms and legacy systems — API design, event architecture and data contracts that hold up as the estate grows.",
    price: 17500,
    timeline: "2–3 Weeks Sprint",
    badge: "API & Middleware",
    capabilities: [
      "API design, versioning and governance",
      "Event-driven and message-based integration",
      "Legacy system interfacing and data migration",
      "Contract testing and integration monitoring",
    ],
    deliverables: [
      "OpenAPI 3.0 / Swagger specifications",
      "Robust integration middleware layer",
      "Automated contract test suite",
      "Data transformation & migration scripts",
    ],
    stack: ["REST", "GraphQL", "gRPC", "Kafka", "OpenAPI"],
    features: [
      {
        title: "Resilient Retry & Circuit Breakers",
        description: "Exponential backoff, dead-letter queues, and circuit breaker patterns to prevent cascading downtime.",
      },
      {
        title: "Type-Safe Contract Tests",
        description: "Pact/contract testing ensuring upstream API modifications never break downstream consumers.",
      },
      {
        title: "High-Speed Message Brokers",
        description: "Kafka/RabbitMQ event pipelines capable of processing thousands of asynchronous events per second.",
      },
      {
        title: "Bidirectional Synchronization",
        description: "Idempotent webhooks and state reconciliation reconciling discrepancies between disparate CRMs and ERPs.",
      },
    ],
    process: [
      { step: "01", title: "System Interface Mapping", description: "Cataloging schemas, authentication mechanisms, rate limits, and error formats for each system." },
      { step: "02", title: "Data Contract Specification", description: "Authoring OpenAPI or Protobuf schemas and establishing single source-of-truth data models." },
      { step: "03", title: "Middleware & Queue Engineering", description: "Developing robust connector services with logging, rate limiting, and automated retries." },
      { step: "04", title: "Integration Validation & Go-Live", description: "Running end-to-end integration test suites with synthetic payloads and deploying to production." },
    ],
    faqs: [
      { question: "Can you integrate legacy ERP/accounting systems with modern web apps?", answer: "Yes, we build adapter services and secure webhook relays that interface with legacy SQL and SOAP APIs." },
      { question: "How do you handle API downtime from third-party services?", answer: "We implement dead-letter queues and persistent caching so operations continue seamlessly without data loss." },
    ],
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    short: "A full engineering function for teams building a product from zero.",
    summary:
      "End-to-end product engineering — discovery, architecture, build and iteration — run as an embedded team with the discipline of an internal engineering organisation.",
    price: 24800,
    timeline: "3–4 Weeks MVP Sprint",
    badge: "Full-Lifecycle MVP",
    capabilities: [
      "Product discovery and technical shaping",
      "MVP architecture and iterative delivery",
      "Instrumentation and product analytics",
      "Scaling teams, processes and platforms",
    ],
    deliverables: [
      "Full-stack product technical architecture",
      "Functional MVP build ready for real users",
      "Product analytics & user instrumentation",
      "Roadmap & technical scaling documentation",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    features: [
      {
        title: "Zero-to-One Product Launch",
        description: "From product requirements document (PRD) to deployed product in the hands of early paying customers.",
      },
      {
        title: "Built-In Auth & Billing",
        description: "Pre-wired user authentication, role-based access control, and Stripe/Razorpay subscription integration.",
      },
      {
        title: "Data-Driven Event Telemetry",
        description: "PostHog / Mixpanel instrumentation tracking retention, feature adoption, and funnel conversion.",
      },
      {
        title: "Clean Modular Handover",
        description: "Architected so in-house engineers can step in effortlessly and continue building on day one.",
      },
    ],
    process: [
      { step: "01", title: "Product Discovery & Scope Cut", description: "Defining the core value hypothesis and scoping an aggressive, high-impact MVP feature set." },
      { step: "02", title: "Architecture & Foundation Setup", description: "Setting up database schemas, auth providers, CI/CD environments, and core services." },
      { step: "03", title: "Feature Sprint & Weekly Demos", description: "Iterative feature delivery with working weekly staging deployments and feedback cycles." },
      { step: "04", title: "Launch Readiness & Handover", description: "Production load verification, analytics validation, billing testing, and full team onboarding." },
    ],
    faqs: [
      { question: "Is this suitable for a startup founder building an MVP?", answer: "Yes, it is designed specifically to launch a polished, production-ready MVP without hiring an entire full-time dev squad upfront." },
      { question: "What happens after the MVP is delivered?", answer: "You receive all repositories, documentation, and credentials, plus an onboarding walkthrough for your future team." },
    ],
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
  "Under ₹10,000",
  "₹10,000 – ₹15,000",
  "₹15,000 – ₹20,000",
  "₹20,000 – ₹25,000",
  "Custom Scope (< ₹25,000)",
];
