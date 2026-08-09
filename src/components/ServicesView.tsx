import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceCategoryId } from '../types';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Bot, 
  TrendingUp, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Layers,
  Zap,
  Sparkles
} from 'lucide-react';

interface ServicesViewProps {
  initialServiceId?: ServiceCategoryId;
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  initialServiceId = 'web-dev',
  onOpenProjectModal,
  onOpenConsultation
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceCategoryId>(initialServiceId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'Code': return Code;
      case 'Bot': return Bot;
      case 'TrendingUp': return TrendingUp;
      case 'Cloud': return Cloud;
      default: return Layers;
    }
  };

  return (
    <div className="py-12 bg-tech-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Core Capability Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Excellence Across 6 Key Pillars
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Positioned around measurable business results, conversion rate optimization, operational automation, and long-term enterprise scalability.
          </p>
        </div>

        {/* Service Selector Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {servicesData.map((s) => {
            const IconComp = getIcon(s.iconName);
            const isSelected = selectedServiceId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => { setSelectedServiceId(s.id); setOpenFaqIndex(null); }}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-xl shadow-blue-600/20 scale-[1.02]' 
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <IconComp className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                  {s.id === 'ai-automation' && (
                    <span className="text-[9px] font-bold uppercase bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded border border-amber-400/40">
                      Core
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold leading-tight">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-12 border border-slate-700 bg-slate-950/90 shadow-2xl space-y-12">
          
          {/* Service Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-800 pb-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {activeService.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeService.title}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                {activeService.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenProjectModal(activeService.id)}
                  className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
                >
                  <span>Start {activeService.title} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
                >
                  Book Technical Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                <span className="font-bold text-red-400 block mb-1">Common Business Problem:</span>
                <p className="text-slate-300">{activeService.problem}</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <span className="font-bold text-emerald-400 block mb-1">The Aurax Solution:</span>
                <p className="text-slate-300">{activeService.solution}</p>
              </div>
            </div>
          </div>

          {/* Detailed Capabilities Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Core Capabilities & Scope of Delivery</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeService.offerings.map((off, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{off.title}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {off.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits & Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
            {/* Business Benefits */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                Business Benefits & Outcomes
              </h4>
              <ul className="space-y-3 text-xs">
                {activeService.businessBenefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Roadmap */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                Execution Roadmap
              </h4>
              <ol className="space-y-3 text-xs font-mono">
                {activeService.process.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[11px] shrink-0 border border-blue-500/30">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-xs">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Primary Technologies Utilized for {activeService.title}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeService.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono font-medium text-blue-300 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-400" />
              <span>Frequently Asked Questions — {activeService.title}</span>
            </h3>

            <div className="space-y-3">
              {activeService.faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div key={i} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-200 hover:text-white flex items-center justify-between gap-4"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
