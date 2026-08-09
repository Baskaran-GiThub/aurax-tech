import React from 'react';
import { 
  Target, 
  Layers, 
  TrendingUp, 
  Eye, 
  Globe2, 
  HeartHandshake,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ServiceCategoryId } from '../types';

interface WhyAuraxSectionProps {
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
}

export const WhyAuraxSection: React.FC<WhyAuraxSectionProps> = ({ onOpenProjectModal }) => {
  const pillars = [
    {
      icon: Target,
      title: 'Business-First Technology',
      description: 'Technology decisions should solve real business problems, reduce operational costs, and drive measurable revenue—never technology for technology’s sake.',
      accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: Layers,
      title: 'One Technology Partner',
      description: 'Consolidate web development, custom software, AI automation, and digital marketing under a single accountable engineering relationship.',
      accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Architecting clean codebases, microservices, and cloud databases designed to effortlessly scale as your business and user base grow.',
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Eye,
      title: 'Transparent Delivery',
      description: 'Clear scope boundaries, predictable sprint milestones, transparent communication, and zero hidden technical debt.',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Globe2,
      title: 'Global Delivery Model',
      description: 'A remote-first delivery approach designed for startups and growing businesses across UAE, UK, North America, Australia, India, and other markets.',
      accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Support',
      description: 'Support can continue beyond launch through agreed maintenance, optimization, automation tuning, and infrastructure services.',
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="why-aurax-section" className="py-20 bg-slate-950 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            The Aurax Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Build with Aurax
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We bridge the gap between complex software engineering, intelligent AI automation, and real-world business results.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${p.accent}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Pillar 0{idx + 1}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-white">Looking for an end-to-end technology partner?</p>
            <p className="text-xs text-slate-400 mt-0.5">Explore how our unified engineering approach accelerates project timelines.</p>
          </div>
          <button
            onClick={() => onOpenProjectModal()}
            className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg flex items-center gap-1.5 shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
