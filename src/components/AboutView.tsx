import React from 'react';
import { 
  Code2, 
  Target, 
  Eye, 
  Globe2, 
  ShieldCheck, 
  HeartHandshake, 
  Zap, 
  ArrowRight,
  Layers,
  Cpu
} from 'lucide-react';
import { ServiceCategoryId } from '../types';

interface AboutViewProps {
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenProjectModal,
  onOpenConsultation
}) => {
  const values = [
    {
      title: 'Business-First Engineering',
      desc: 'We evaluate code and architecture based on real-world business outcomes, user conversion rates, and long-term maintainability.'
    },
    {
      title: 'Purpose-Built Experiences',
      desc: 'We choose the right level of custom design and engineering for the client’s goals, budget, performance needs, and long-term maintainability.'
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear scope boundaries, predictable sprint deliverables, transparent status updates, and zero hidden technical debt.'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We stay committed beyond product launch—managing cloud infrastructure, AI fine-tuning, and continuous feature expansion.'
    }
  ];

  return (
    <div className="py-12 bg-tech-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            About Aurax Innovative Studios
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Combining Technology, AI Automation & Digital Growth
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Aurax is a technology and digital solutions studio built to help startups, SMEs, and growing businesses strengthen their digital presence, develop software, automate workflows, and pursue digital growth.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 border border-slate-800 bg-slate-950/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Our Mission</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower growing businesses worldwide with robust custom software, intelligent AI automation, and performance-driven digital marketing—enabling them to operate faster, eliminate manual bottlenecks, and compete on an international scale.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-slate-800 bg-slate-950/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Our Vision</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the most trusted international technology partner for visionary entrepreneurs and enterprises—recognized for uncompromising code quality, practical AI integrations, and transparent long-term client relationships.
            </p>
          </div>
        </div>

        {/* How Aurax Works — Unified Engineering Approach */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-950/90 shadow-2xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              The Technology + Business Approach
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 tracking-tight">
              How Aurax Operates as Your Tech Partner
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Instead of juggling separate freelance designers, offshore coders, and digital marketing agencies, Aurax unifies all four digital pillars under one disciplined relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'BUILD', desc: 'Custom web, mobile & software solutions designed for performance, usability, and maintainability.' },
              { step: '02', title: 'AUTOMATE', desc: 'AI chatbots, WhatsApp APIs & webhook workflows eliminating manual labor.' },
              { step: '03', title: 'GROW', desc: 'Data-driven technical SEO, Google Ads & lead generation campaigns.' },
              { step: '04', title: 'OPERATE', desc: 'Cloud deployment, CI/CD pipelines, backups & managed technical support.' }
            ].map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {p.step}
                </span>
                <h3 className="text-base font-bold text-white mt-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Remote Delivery Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Global Remote Delivery
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Designed for International Client Engagement
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Aurax is being structured for remote international delivery using modern collaboration, project-tracking, and cloud development tools across UAE, United Kingdom, Australia, United States, India, and other markets.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Remote-friendly communication planned around the client’s working hours and project needs.</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Secure cloud code repositories, staging previews, and automated deployment pipelines.</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Transparent sprint tracking with full client visibility at every milestone.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-center sm:text-left">
            <Globe2 className="w-10 h-10 text-blue-400 mx-auto sm:mx-0" />
            <h3 className="text-lg font-bold text-white">Ready to Discuss Your Architecture?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect with Aurax to review your project scope, timeline, and suitable technology options.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
              >
                Book Consultation
              </button>
              <button
                onClick={() => onOpenProjectModal()}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight text-center">
            Our Operating Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-blue-400">0{i + 1}</span>
                <h3 className="text-sm font-bold text-white">{v.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
