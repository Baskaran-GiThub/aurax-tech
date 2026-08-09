import { CaseStudy } from '../types';

// Internal concept builds only. Replace with verified client work as Aurax completes projects.
export const portfolioData: CaseStudy[] = [
  {
    id: 'concept-business-site',
    title: 'Modern Service Business Website',
    category: 'web-dev',
    categoryLabel: 'Concept Build — Website',
    industry: 'Professional Services',
    region: 'Aurax Concept Lab',
    tagline: 'A conversion-focused corporate website blueprint for a growing service business.',
    challenge: 'Many small businesses rely on dated websites that are difficult to use on mobile and do not clearly guide visitors toward enquiries.',
    solution: 'A responsive site structure with strong service positioning, fast-loading pages, enquiry CTAs, analytics readiness, and SEO foundations.',
    servicesDelivered: ['UX & Information Architecture', 'Responsive Website Development', 'Lead Capture Flow', 'SEO Foundations'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    results: [
      { label: 'Status', value: 'Concept' },
      { label: 'Primary Goal', value: 'Leads' },
      { label: 'Delivery Model', value: 'Responsive' }
    ],
    mockupType: 'dashboard',
    mockupAccent: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'concept-ai-lead-flow',
    title: 'AI Lead Qualification Workflow',
    category: 'ai-automation',
    categoryLabel: 'Concept Build — Automation',
    industry: 'Sales & Customer Operations',
    region: 'Aurax Concept Lab',
    tagline: 'A practical automation blueprint connecting web enquiries, AI qualification, CRM and follow-up.',
    challenge: 'Businesses can lose enquiries when responses are delayed or lead information is captured inconsistently.',
    solution: 'A configurable workflow that captures enquiry data, applies qualification logic, updates CRM records and triggers appropriate follow-up actions.',
    servicesDelivered: ['Workflow Design', 'AI Assistant Integration', 'CRM Automation', 'Notification Logic'],
    technologies: ['Gemini API', 'Webhooks', 'CRM API', 'WhatsApp Business API'],
    results: [
      { label: 'Status', value: 'Concept' },
      { label: 'Primary Goal', value: 'Speed' },
      { label: 'Architecture', value: 'Modular' }
    ],
    mockupType: 'ai-pipeline',
    mockupAccent: 'from-indigo-600 to-purple-500'
  },
  {
    id: 'concept-client-portal',
    title: 'Customer Operations Portal',
    category: 'custom-software',
    categoryLabel: 'Concept Build — Software',
    industry: 'SME Operations',
    region: 'Aurax Concept Lab',
    tagline: 'A secure client-portal concept for requests, documents, status tracking and internal workflows.',
    challenge: 'Email chains and spreadsheets become difficult to manage as customer requests, documents and approvals increase.',
    solution: 'A role-based portal blueprint that centralizes requests, workflow status, documents and notifications in one interface.',
    servicesDelivered: ['Product Discovery', 'Portal UX', 'Workflow Architecture', 'API Integration Planning'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Cloud Storage'],
    results: [
      { label: 'Status', value: 'Concept' },
      { label: 'Primary Goal', value: 'Clarity' },
      { label: 'Model', value: 'Scalable' }
    ],
    mockupType: 'dashboard',
    mockupAccent: 'from-emerald-600 to-teal-500'
  }
];
