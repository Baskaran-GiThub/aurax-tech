import React, { useState } from 'react';
import { processStepsData } from '../data/processData';
import { CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process-section" className="py-20 bg-slate-900/50 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Engineered Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Proven 6-Step Development Process
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            From initial business discovery to post-launch AI automation and cloud support, every project follows a transparent, predictable roadmap.
          </p>
        </div>

        {/* Steps Horizontal Bar for Large Screens & Accordion for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {processStepsData.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-xl shadow-blue-500/15'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                      isActive ? 'bg-blue-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.number}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white tracking-wide">{step.title}</p>
                      <p className="text-xs text-slate-400">{step.subtitle}</p>
                    </div>
                  </div>

                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Step Detail Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border border-slate-700 bg-slate-950/90 shadow-2xl space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-3xl font-extrabold font-mono text-blue-400">
                {processStepsData[activeStep].number}
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Stage {activeStep + 1} of 6
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {processStepsData[activeStep].title} — {processStepsData[activeStep].subtitle}
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {processStepsData[activeStep].description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Stage Deliverables:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {processStepsData[activeStep].deliverables.map((deliv, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
