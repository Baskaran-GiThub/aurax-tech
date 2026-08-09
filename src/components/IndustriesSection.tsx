import React, { useState } from 'react';
import { industriesData } from '../data/industriesData';
import { 
  Rocket, 
  Briefcase, 
  Activity, 
  Utensils, 
  Building2, 
  ShoppingBag, 
  GraduationCap, 
  Users, 
  Compass, 
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ServiceCategoryId } from '../types';

interface IndustriesSectionProps {
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenProjectModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(industriesData[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return Rocket;
      case 'Briefcase': return Briefcase;
      case 'Activity': return Activity;
      case 'Utensils': return Utensils;
      case 'Building2': return Building2;
      case 'ShoppingBag': return ShoppingBag;
      case 'GraduationCap': return GraduationCap;
      case 'Users': return Users;
      case 'Compass': return Compass;
      default: return MapPin;
    }
  };

  const activeIndObj = industriesData.find(i => i.id === selectedIndustry) || industriesData[0];

  return (
    <section className="py-20 bg-slate-900/60 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Tailored Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for Your Industry’s Unique Challenges
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Aurax builds specialized software, AI automation pipelines, and growth engines optimized for specific vertical workflows.
          </p>
        </div>

        {/* Industry Grid Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {industriesData.map((ind) => {
            const IconComp = getIcon(ind.iconName);
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/25 scale-[1.02]' 
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <IconComp className="w-5 h-5" />
                <span className="text-xs font-bold">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Detail Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700 bg-slate-950/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Industry Focus: {activeIndObj.name}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Specialized Digital Solutions for {activeIndObj.name}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeIndObj.description}
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Primary Engineered Solutions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeIndObj.keySolutions.map((sol, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-center lg:text-left">
            <h4 className="text-sm font-bold text-white">
              Popular Tech Stack for {activeIndObj.name}:
            </h4>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {activeIndObj.popularTech.map((tech, i) => (
                <span key={i} className="text-xs font-mono font-medium text-blue-300 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-xs text-slate-400 pt-2 leading-relaxed">
              * Note: Aurax custom builds every architecture from scratch to match your team’s exact workflows and security requirements.
            </p>

            <button
              onClick={() => onOpenProjectModal()}
              className="w-full py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Build for {activeIndObj.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
