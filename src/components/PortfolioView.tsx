import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CaseStudy, ServiceCategoryId } from '../types';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Globe, 
  X, 
  Quote, 
  ShieldCheck, 
  Activity,
  Bot,
  LayoutDashboard,
  Smartphone,
  ShoppingBag
} from 'lucide-react';

interface PortfolioViewProps {
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onOpenProjectModal }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredProjects = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  const renderMockupVisual = (cs: CaseStudy) => {
    return (
      <div className={`p-6 rounded-2xl bg-gradient-to-br ${cs.mockupAccent} border border-white/20 shadow-xl text-white relative overflow-hidden group`}>
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4 text-xs">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] ml-2 font-semibold text-white/90">{cs.region}</span>
          </div>
          <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded text-white font-bold">
            {cs.categoryLabel}
          </span>
        </div>

        {/* Visual Content representation based on mockup type */}
        <div className="space-y-3 py-2">
          <h4 className="text-base font-extrabold tracking-tight text-white leading-snug">
            {cs.title}
          </h4>
          <p className="text-xs text-white/90 leading-relaxed font-medium">
            {cs.tagline}
          </p>

          {/* Key Metric Highlights Badge Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {cs.results.map((r, i) => (
              <div key={i} className="p-2 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/20">
                <p className="text-sm font-extrabold text-white font-mono">{r.value}</p>
                <p className="text-[10px] text-white/80 leading-tight">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white/90 font-medium">
          <span>{cs.industry}</span>
          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Blueprint <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 bg-tech-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Aurax Concept Lab
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Concept Builds & Solution Blueprints
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Representative solution concepts showing how Aurax approaches websites, automation and custom software. Verified client work will be added as projects are completed.
          </p>
          <p className="text-xs text-slate-400 font-mono italic">
            * These are clearly labelled internal concept builds, not client case studies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Concepts' },
            { id: 'web-dev', label: 'Web Development' },
            { id: 'mobile-dev', label: 'Mobile Apps' },
            { id: 'custom-software', label: 'Custom Software & AI' },
            { id: 'digital-marketing', label: 'Digital Growth' },
            { id: 'cloud-devops', label: 'Cloud & DevOps' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                filter === btn.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCaseStudy(cs)}
              className="cursor-pointer"
            >
              {renderMockupVisual(cs)}
            </div>
          ))}
        </div>

        {/* Modal Detail Drawer for Selected Case Study */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
              
              {/* Modal Header */}
              <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                    {selectedCaseStudy.categoryLabel} — {selectedCaseStudy.region}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedCaseStudy.title}</h3>
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Challenge vs Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2">
                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">Business Challenge</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedCaseStudy.challenge}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Aurax Solution</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedCaseStudy.solution}</p>
                  </div>
                </div>

                {/* Key Measured Results */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Concept Attributes</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedCaseStudy.results.map((r, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <p className="text-lg font-extrabold text-blue-400 font-mono">{r.value}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Delivered & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services Delivered</h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {selectedCaseStudy.servicesDelivered.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCaseStudy.technologies.map((t, i) => (
                        <span key={i} className="text-[11px] font-mono text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Placeholder */}
                {selectedCaseStudy.testimonial && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 relative">
                    <Quote className="w-6 h-6 text-blue-500/30 absolute top-3 right-3" />
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{selectedCaseStudy.testimonial.quote}"
                    </p>
                    <div className="pt-2 border-t border-slate-800/80 text-[11px] font-bold text-white flex items-center justify-between">
                      <span>{selectedCaseStudy.testimonial.author}</span>
                      <span className="text-slate-400 font-normal">{selectedCaseStudy.testimonial.role}</span>
                    </div>
                  </div>
                )}

                {/* Modal Action CTA */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-xl border border-slate-700"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      const serviceCat = selectedCaseStudy.category;
                      setSelectedCaseStudy(null);
                      onOpenProjectModal(serviceCat);
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg flex items-center gap-2"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
