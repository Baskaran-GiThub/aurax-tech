import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    tagline: 'High-converting, ultra-fast web platforms engineered for credibility, lead acquisition, and seamless user experiences.',
    iconName: 'Globe',
    badge: 'Core Digital Pillar',
    problem: 'Outdated, slow, or template-bound websites fail to convert premium clients, lack security compliance, and slow down marketing ROI.',
    solution: 'Aurax builds performance-driven custom web platforms with modern design architecture, lightning-fast Core Web Vitals, and native business integrations.',
    offerings: [
      {
        title: 'Corporate & Custom Web Applications',
        description: 'Bespoke corporate portals, custom React/Next.js architectures, and WordPress builds customized for brand authority.'
      },
      {
        title: 'E-Commerce & Payment Gateway Integration',
        description: 'High-conversion online stores integrated with Stripe, PayPal, Razorpay, or regional UAE/GCC payment processors.'
      },
      {
        title: 'Landing Pages & Portfolio Sites',
        description: 'Conversion-optimized, mobile-first landing pages tailored for high-converting marketing campaigns.'
      },
      {
        title: 'Booking & Appointment Systems',
        description: 'Automated scheduling engines with WhatsApp instant notifications and calendar synchronizations.'
      },
      {
        title: 'Migration, Redesign & Speed Optimization',
        description: 'Legacy web modernization with 90+ Lighthouse speed scores and zero downtime migration.'
      },
      {
        title: 'SEO-Ready Development & Maintenance',
        description: 'Clean semantic HTML markup, structured metadata, schema protocols, and managed monthly security updates.'
      }
    ],
    businessBenefits: [
      'Increases organic lead conversion by up to 3x with fast load times.',
      'Establishes immediate trust and authority across international target markets.',
      'Connects directly to your CRM, WhatsApp, and marketing tools.',
      'Ensures complete mobile responsiveness across all devices.'
    ],
    process: [
      'Discovery & Sitemap Architecture',
      'High-Fidelity Wireframes & UX Prototyping',
      'Clean Modular Frontend Engineering',
      'Integration of Gateways & Forms',
      'Speed & SEO Validation (Sub-1s loads)',
      'Global CDN Deployment & Monitoring'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'WordPress', 'Node.js', 'Stripe', 'Vercel / Cloudflare'],
    faqs: [
      {
        question: 'How long does a corporate website development take?',
        answer: 'Standard custom corporate sites typically take 2 to 4 weeks depending on scope, integrations, and content readiness.'
      },
      {
        question: 'Do you build SEO-friendly websites?',
        answer: 'Yes, every Aurax website is built with SEO best practices: semantic code, OpenGraph markup, XML sitemaps, fast asset delivery, and mobile-first design.'
      },
      {
        question: 'Can we edit the content ourselves after launch?',
        answer: 'Absolutely. We provide intuitive content management configurations or headless CMS integrations so your team can easily make content updates.'
      }
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform mobile apps for iOS and Android built for intuitive UX, speed, and business growth.',
    iconName: 'Smartphone',
    badge: 'Mobile First',
    problem: 'Businesses struggle with clunky hybrid mobile apps that crash, have poor offline support, or fail App Store guidelines.',
    solution: 'We build high-performance mobile applications using Flutter and React Native, backing them with scalable cloud APIs and robust offline caching.',
    offerings: [
      {
        title: 'iOS & Android Native Experience',
        description: 'Cross-platform solutions powered by Flutter & React Native providing 60FPS fluid native UI on both platforms.'
      },
      {
        title: 'Customer & Booking Applications',
        description: 'Customer facing ordering, scheduling, loyalty reward apps with real-time push notifications.'
      },
      {
        title: 'E-Commerce Mobile Solutions',
        description: 'Fast checkout mobile storefronts with Apple Pay, Google Pay, and localized regional payment gateways.'
      },
      {
        title: 'Internal Business Apps & Portals',
        description: 'Field service tools, inventory scanners, and employee tracking systems built for secure enterprise operations.'
      },
      {
        title: 'API & Payment Integrations',
        description: 'Deep integration with existing backend ERPs, CRMs, location services, and push notification systems.'
      },
      {
        title: 'App Store Deployment & Support',
        description: 'End-to-end Apple App Store and Google Play Store submission management and long-term release support.'
      }
    ],
    businessBenefits: [
      'Direct customer engagement via instant push notifications.',
      'Reduced operational friction for field teams and internal managers.',
      'Higher retention and repeat purchases compared to web-only setups.',
      'Seamless hardware utilization (Camera, GPS, Biometrics, Bluetooth).'
    ],
    process: [
      'Mobile UX Strategy & User Flow Mapping',
      'Figma Component Library & UI Design',
      'Cross-Platform App Development',
      'API Backend Wiring & Payment Setup',
      'Rigorous Device Testing & QA',
      'App Store Submission & Live Launch'
    ],
    techStack: ['Flutter', 'React Native', 'iOS / Swift', 'Android / Kotlin', 'Firebase', 'GraphQL', 'REST APIs'],
    faqs: [
      {
        question: 'Should we choose Flutter or Native development?',
        answer: 'Flutter allows us to ship a single codebase to both iOS and Android simultaneously, saving up to 40% in cost while maintaining 100% native performance.'
      },
      {
        question: 'Do you handle App Store and Play Store approval?',
        answer: 'Yes, Aurax manages the entire submission, review guideline compliance, and publication process for both Apple App Store and Google Play.'
      }
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Tailored enterprise software, SaaS platforms, and internal portals engineered to solve complex operational bottlenecks.',
    iconName: 'Code',
    badge: 'Enterprise Architecture',
    problem: 'Off-the-shelf software rarely fits specific operational workflows, forcing teams into manual spreadsheets and fragmented tools.',
    solution: 'We build bespoke SaaS products, custom CRMs, client portals, and workflow engines aligned 100% with your exact business processes.',
    offerings: [
      {
        title: 'Custom Web Applications & SaaS MVPs',
        description: 'Scalable multi-tenant software architectures built from ground zero for modern tech startups.'
      },
      {
        title: 'Custom CRM & Business Portals',
        description: 'Tailored customer portals, vendor dashboards, and internal team management systems.'
      },
      {
        title: 'Inventory & ERP Management',
        description: 'Centralized resource tracking, automated stock alerts, and multi-location management.'
      },
      {
        title: 'Booking & Workflow Automation Systems',
        description: 'Complex multi-step booking logic, automated invoicing, and custom task routing engines.'
      },
      {
        title: 'API Development & Middleware Integrations',
        description: 'Connecting disconnected third-party software, legacy databases, and cloud microservices.'
      },
      {
        title: 'Business Process Digitization',
        description: 'Replacing paper forms and spreadsheets with secure, role-based cloud applications.'
      }
    ],
    businessBenefits: [
      'Complete ownership of custom IP without recurring per-user SaaS license fees.',
      'Eliminates manual data entry errors across departments.',
      'Gives management real-time operational visibility through custom reporting dashboards.',
      'Scales seamlessly as your enterprise team and transaction volumes grow.'
    ],
    process: [
      'Requirements Deep Dive & Flow Blueprint',
      'Database Modeling & System Architecture',
      'Agile Sprint Development & Iteration',
      'Security & Access Control Implementation',
      'End-to-End System Testing',
      'Staff Training & Smooth Onboarding'
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API', 'GraphQL', 'Redis'],
    faqs: [
      {
        question: 'How do you ensure our custom software remains scalable?',
        answer: 'We design microservice or modular monolith architectures on cloud platforms like AWS and GCP with clean database schemas and automated CI/CD pipelines.'
      },
      {
        question: 'Will we own the intellectual property (IP) and source code?',
        answer: 'Yes, 100%. Upon project completion and handoff, full source code ownership and repository rights belong to your company.'
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    tagline: 'Practical AI agents, intelligent chatbots, and workflow automations that run 24/7 to scale business operations.',
    iconName: 'Bot',
    badge: 'Primary Differentiator',
    problem: 'Growing companies waste hundreds of hours manually qualifying leads, answering repetitive inquiries, and transferring data between tools.',
    solution: 'Aurax deploys custom AI assistants, WhatsApp automation loops, and intelligent workflow agents that turn manual tasks into instant 24/7 background processes.',
    offerings: [
      {
        title: '24/7 Conversational AI Chatbots',
        description: 'Trained on your company knowledge base to instantly answer client questions and capture leads on web & WhatsApp.'
      },
      {
        title: 'Lead Qualification & CRM Automation',
        description: 'Automated workflow pipelines that score incoming inquiries, populate your CRM, and notify sales teams instantly.'
      },
      {
        title: 'WhatsApp Business API Automation',
        description: 'Instant WhatsApp auto-replies, interactive booking menus, order updates, and automated customer follow-ups.'
      },
      {
        title: 'Document & Email AI Processing',
        description: 'Extract key data from invoices, contracts, and customer emails automatically into structured system records.'
      },
      {
        title: 'Custom AI Agents & Internal Knowledge Assistants',
        description: 'Secure enterprise AI models trained on internal SOPs, helping team members find answers in seconds.'
      },
      {
        title: 'API & Multi-Tool Integration Loops',
        description: 'Connecting website forms -> AI analysis -> CRM -> WhatsApp -> Email -> Team Slack/Teams notifications seamlessly.'
      }
    ],
    businessBenefits: [
      'Responds to customer inquiries in seconds instead of hours, dramatically boosting conversion rates.',
      'Can reduce repetitive customer-support workload when implemented around the right workflows.',
      'Eliminates missed sales leads outside of regular business hours.',
      'Saves dozens of team working hours per week on repetitive data transfers.'
    ],
    process: [
      'Workflow & Data Audit',
      'Knowledge Base Ingestion & AI Prompt Architecture',
      'Automation Pipeline Build & Webhook Wiring',
      'Human-in-the-Loop Safeguard Setup',
      'Live Testing & Performance Tuning',
      'Team Training & Continuous Monitoring'
    ],
    techStack: ['Gemini API', 'OpenAI', 'WhatsApp API', 'Make / n8n', 'Zapier', 'Python', 'Vector DBs', 'LangChain'],
    faqs: [
      {
        question: 'Can the AI chatbot handle complex customer questions accurately?',
        answer: 'Yes. We train AI models strictly on your official documents, FAQs, and product catalogs with strict fallback rules to route complex queries to human agents.'
      },
      {
        question: 'Will AI replace our existing team?',
        answer: 'No, AI automation empowers your existing team by taking over tedious repetitive tasks, allowing them to focus on high-value sales and customer relationships.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    tagline: 'Data-backed search engine optimization, paid advertising, and lead generation campaigns built for measurable ROI.',
    iconName: 'TrendingUp',
    badge: 'Measurable Growth',
    problem: 'Businesses waste marketing budget on vanity metrics like clicks and impressions instead of qualified sales leads and revenue.',
    solution: 'We execute ROI-focused growth strategies combining technical SEO, high-conversion Google & Meta ads, and automated email nurturing.',
    offerings: [
      {
        title: 'Technical & On-Page SEO',
        description: 'Comprehensive site audits, keyword strategy, schema markup, and content optimizations for top search visibility.'
      },
      {
        title: 'Local SEO & Google Business Profile',
        description: 'Dominating local search results across UAE, UK, US, Australia, and India for service-based businesses.'
      },
      {
        title: 'Targeted Google Ads & PPC Campaigns',
        description: 'High-intent search advertising focused strictly on lead acquisition and buyer keyword targeting.'
      },
      {
        title: 'Meta (Facebook & Instagram) Advertising',
        description: 'Visual advertising funnels with retargeting custom audiences to capture potential customers.'
      },
      {
        title: 'Landing Page & Conversion Rate Optimization (CRO)',
        description: 'A/B testing page designs, CTA triggers, and messaging to maximize leads per visitor.'
      },
      {
        title: 'Growth Analytics & Transparent Reporting',
        description: 'Real-time performance dashboards tracking cost per lead (CPL), conversions, and return on ad spend (ROAS).'
      }
    ],
    businessBenefits: [
      'A structured foundation for generating and measuring qualified inbound enquiries.',
      'Clear, honest metrics with zero vanity fluff or unrealistic ranking claims.',
      'Higher return on marketing spend through continuous campaign optimization.',
      'Long-term organic search authority that builds compounding traffic.'
    ],
    process: [
      'Market & Competitor Keyword Research',
      'Funnel & Landing Page Optimization',
      'Ad Creative & Strategy Setup',
      'Campaign Launch & Daily Monitoring',
      'Conversion Rate Tuning & A/B Testing',
      'Transparent Monthly ROI Reporting'
    ],
    techStack: ['Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Google Tag Manager'],
    faqs: [
      {
        question: 'Do you guarantee #1 ranking on Google?',
        answer: 'We do not make deceptive guaranteed ranking promises. We focus on ethical, white-hat technical SEO and content strategies that build sustainable, high-converting organic rankings.'
      },
      {
        question: 'How soon can we see results from digital marketing?',
        answer: 'Paid Ads (Google/Meta) generate qualified leads within days of launch. SEO builds compounding growth usually showing clear momentum within 3 to 6 months.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Managed Technology',
    tagline: 'Secure cloud hosting, CI/CD pipelines, and managed technical operations designed to keep systems reliable and maintainable.',
    iconName: 'Cloud',
    badge: 'High Availability',
    problem: 'Server downtime, slow infrastructure, unpatched security vulnerabilities, and lack of technical support disrupt business operations.',
    solution: 'Aurax manages cloud infrastructure on AWS, GCP, Azure, and Cloudflare, providing monitoring, automated backups, and structured technical support.',
    offerings: [
      {
        title: 'Cloud Infrastructure & Migration',
        description: 'Seamless migration of legacy applications to scalable AWS, Google Cloud, or Azure environments.'
      },
      {
        title: 'DevOps & CI/CD Pipeline Automation',
        description: 'Automated testing and zero-downtime deployment workflows for rapid software updates.'
      },
      {
        title: 'Monitoring & Server Security',
        description: 'Proactive performance monitoring, SSL setup, firewall rules, and DDoS protection.'
      },
      {
        title: 'Automated Backup & Disaster Recovery',
        description: 'Scheduled daily database backups and fast recovery protocols to protect business critical data.'
      },
      {
        title: 'Website & Application Maintenance',
        description: 'Monthly security patching, bug fixes, performance monitoring, and content updates.'
      },
      {
        title: 'Managed Technical Support',
        description: 'Technical troubleshooting, maintenance, and infrastructure advisory based on the agreed support plan.'
      }
    ],
    businessBenefits: [
      'Architecture and monitoring practices designed to improve reliability and reduce avoidable downtime.',
      'Reduced server spending through optimal cloud resource scaling.',
      'Peace of mind knowing expert engineers handle updates, backups, and security.',
      'Rapid recovery from potential system outages.'
    ],
    process: [
      'Cloud Architecture Review',
      'Security & Cost Optimization Audit',
      'Automated CI/CD Pipeline Setup',
      'Monitoring & Alert Wiring',
      'Backup Schedule & Test Restoration',
      'Proactive Monthly Maintenance'
    ],
    techStack: ['AWS', 'Google Cloud Platform', 'Cloudflare', 'Docker', 'GitHub Actions', 'Linux', 'Nginx', 'Kubernetes'],
    faqs: [
      {
        question: 'Which cloud provider do you recommend?',
        answer: 'We evaluate your application needs: AWS and GCP for heavy enterprise/AI workloads, Cloudflare and Vercel for fast global edge websites, and hybrid setups for maximum value.'
      },
      {
        question: 'What is included in monthly website maintenance?',
        answer: 'Monthly maintenance covers software security updates, automated database backups, speed checks, bug fixes, uptime monitoring, and dedicated tech support hours.'
      }
    ]
  }
];
