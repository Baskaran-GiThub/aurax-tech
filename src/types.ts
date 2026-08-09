export type ActivePage = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

export type ServiceCategoryId = 
  | 'web-dev'
  | 'mobile-dev'
  | 'custom-software'
  | 'ai-automation'
  | 'digital-marketing'
  | 'cloud-devops';

export interface ServiceDetail {
  id: ServiceCategoryId;
  title: string;
  tagline: string;
  iconName: string;
  badge: string;
  problem: string;
  solution: string;
  offerings: {
    title: string;
    description: string;
  }[];
  businessBenefits: string[];
  process: string[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: ServiceCategoryId;
  categoryLabel: string;
  industry: string;
  region: string;
  tagline: string;
  challenge: string;
  solution: string;
  servicesDelivered: string[];
  technologies: string[];
  results: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  mockupType: 'dashboard' | 'mobile' | 'ai-pipeline' | 'ecom';
  mockupAccent: string;
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  description: string;
  keySolutions: string[];
  popularTech: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface AIWorkflowStep {
  id: string;
  number: number;
  title: string;
  channel: string;
  action: string;
  output: string;
  icon: string;
}

export interface MarketRegion {
  code: string;
  name: string;
  flag: string;
  currency: string;
  focusText: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  serviceRequired: ServiceCategoryId | 'multiple' | 'advisory';
  approximateBudget: string;
  projectDescription: string;
  preferredContactMethod: 'email' | 'phone' | 'whatsapp';
}

export interface EstimateOptions {
  serviceType: ServiceCategoryId;
  platforms: string[];
  aiIntegrationLevel: 'none' | 'chatbot' | 'agent-workflow' | 'full-custom-ai';
  marketingScope: 'none' | 'seo-foundations' | 'full-growth-campaign';
  supportLevel: 'launch-only' | 'monthly-maintenance' | 'dedicated-devops';
  timelinePreference: 'standard' | 'expedited';
}
