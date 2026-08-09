import { ProcessStep } from '../types';

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Business Alignment & Discovery',
    description: 'We analyze your core business objectives, target buyer personas, operational friction points, and growth targets before writing a single line of code.',
    deliverables: ['Business Goals Audit', 'User Journey Mapping', 'Technical Requirement Scope']
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Architecture & Blueprinting',
    description: 'We construct full system architecture, database models, API specs, wireframe milestones, and transparent project timelines with clearly defined deliverables.',
    deliverables: ['System Architecture Diagram', 'Project Timeline & Milestones', 'Database & API Specifications']
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'UX & Premium Visual Styling',
    description: 'We design intuitive UI/UX prototypes that project international trust, with tailored responsive layouts, micro-interactions, and conversion-focused CTAs.',
    deliverables: ['High-Fidelity Figma Prototypes', 'Design System & Component Library', 'Interactive Desktop & Mobile Previews']
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'Agile Engineering & AI Integration',
    description: 'Our engineering team develops scalable frontend components, secure cloud backend APIs, custom AI automation loops, and payment gateway wiring.',
    deliverables: ['Clean Production Codebase', 'API & Database Integration', 'AI Automation Pipeline Setup']
  },
  {
    number: '05',
    title: 'Test & Launch',
    subtitle: 'Performance QA & Deployment',
    description: 'We execute rigorous cross-device testing, sub-second speed optimization, security audits, SEO metadata audits, and seamless production deployment.',
    deliverables: ['Speed & Core Web Vitals Audit', 'Cross-Device & Mobile QA Pass', 'Production Cloud Launch']
  },
  {
    number: '06',
    title: 'Support & Grow',
    subtitle: 'Maintenance, AI Tuning & Growth',
    description: 'Aurax remains your long-term technology partner. We manage cloud infrastructure, continuous AI tuning, feature upgrades, and digital growth campaigns.',
    deliverables: ['Monthly Managed Tech Support', 'Security & Uptime Monitoring', 'Growth Campaign Optimizations']
  }
];
