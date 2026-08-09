import React, { useState } from 'react';
import { 
  Code2, 
  ArrowRight, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';
import { ActivePage, ServiceCategoryId } from '../types';
import { AuraxBrand } from './AuraxBrand';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
  onOpenConsultation: () => void;
  onSelectServiceTab?: (serviceId: ServiceCategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenProjectModal,
  onOpenConsultation,
  onSelectServiceTab
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const handleServiceNav = (id: ServiceCategoryId) => {
    setActivePage('services');
    if (onSelectServiceTab) {
      onSelectServiceTab(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top High-Impact Callout Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 mb-16 border border-slate-700/60 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Transform Your Business Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Ready to Build, Automate, or Scale Your Tech Infrastructure?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Partner with Aurax for custom software, intelligent AI workflows, high-converting web portals, and dedicated cloud operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all"
            >
              Book Consultation
            </button>
            <button
              onClick={() => onOpenProjectModal()}
              className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Core Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
<AuraxBrand />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Aurax is an international technology and digital solutions company combining custom software engineering, AI workflow automation, and digital growth engines.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Target Markets: UAE, UK, USA, Australia, India & International</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-slate-300">Email address will be added before launch</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-slate-300">Phone / WhatsApp will be added before launch</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-300 mb-2">
                Technology & AI updates — coming soon
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email..."
                  required
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl text-xs font-semibold transition-colors shrink-0 flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Thanks — newsletter delivery will be enabled before launch.
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Core Capabilities */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleServiceNav('web-dev')} className="hover:text-blue-400 transition-colors text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceNav('mobile-dev')} className="hover:text-blue-400 transition-colors text-left">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceNav('custom-software')} className="hover:text-blue-400 transition-colors text-left">
                  Custom Software & Portals
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceNav('ai-automation')} className="hover:text-blue-400 transition-colors text-left flex items-center gap-1 text-blue-400 font-medium">
                  <span>AI & Automation</span>
                  <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1 py-0.2 rounded">Core</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceNav('digital-marketing')} className="hover:text-blue-400 transition-colors text-left">
                  Digital Growth & SEO
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceNav('cloud-devops')} className="hover:text-blue-400 transition-colors text-left">
                  Cloud, DevOps & Managed Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Process */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-left">
                  About Aurax Studios
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-left">
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('home'); setTimeout(() => { document.getElementById('why-aurax-section')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-blue-400 transition-colors text-left">
                  Why Choose Aurax
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('home'); setTimeout(() => { document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-blue-400 transition-colors text-left">
                  6-Step Delivery Process
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors text-left">
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Target Industries */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Industries Served
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Startups & Tech MVPs</li>
              <li>Professional Services & Law</li>
              <li>Healthcare & Medical Clinics</li>
              <li>Restaurants & Hospitality</li>
              <li>Real Estate & Property</li>
              <li>Retail & E-Commerce</li>
              <li>Education & Training Academies</li>
              <li>Recruitment & Staffing</li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>© {new Date().getFullYear()} Aurax Innovative Studios. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Preferences</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Center</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#linkedin" className="p-2 bg-slate-900 hover:bg-blue-600/20 hover:text-blue-400 rounded-lg transition-colors border border-slate-800">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="#twitter" className="p-2 bg-slate-900 hover:bg-blue-600/20 hover:text-blue-400 rounded-lg transition-colors border border-slate-800">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#github" className="p-2 bg-slate-900 hover:bg-blue-600/20 hover:text-blue-400 rounded-lg transition-colors border border-slate-800">
              <Github className="w-3.5 h-3.5" />
            </a>
            <a href="#instagram" className="p-2 bg-slate-900 hover:bg-blue-600/20 hover:text-blue-400 rounded-lg transition-colors border border-slate-800">
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
