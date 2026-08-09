import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Layers, 
  Bot, 
  Globe, 
  Smartphone, 
  Code, 
  TrendingUp, 
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { ServiceCategoryId, EstimateOptions } from '../types';

interface ProjectEstimatorProps {
  onOpenProjectModalWithScope: (summaryText: string, serviceId: ServiceCategoryId) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onOpenProjectModalWithScope
}) => {
  const [options, setOptions] = useState<EstimateOptions>({
    serviceType: 'web-dev',
    platforms: ['Desktop Web', 'Mobile Responsive'],
    aiIntegrationLevel: 'chatbot',
    marketingScope: 'seo-foundations',
    supportLevel: 'monthly-maintenance',
    timelinePreference: 'standard'
  });

  const serviceCategories = [
    { id: 'web-dev' as ServiceCategoryId, label: 'Website Development', icon: Globe },
    { id: 'mobile-dev' as ServiceCategoryId, label: 'Mobile App Dev', icon: Smartphone },
    { id: 'custom-software' as ServiceCategoryId, label: 'Custom Software & SaaS', icon: Code },
    { id: 'ai-automation' as ServiceCategoryId, label: 'AI & Automation', icon: Bot },
    { id: 'digital-marketing' as ServiceCategoryId, label: 'Digital Growth & SEO', icon: TrendingUp },
    { id: 'cloud-devops' as ServiceCategoryId, label: 'Cloud & Managed Support', icon: Cloud }
  ];

  const calculateEstimate = () => {
    let baseTime = '2 - 3 Weeks';
    let scopeList = [];

    if (options.serviceType === 'web-dev') {
      baseTime = options.timelinePreference === 'expedited' ? '1 - 2 Weeks' : '2 - 4 Weeks';
      scopeList = ['Custom Design Prototype', 'Sub-1s Load Speed', 'SEO Foundations', 'Form & WhatsApp Setup'];
    } else if (options.serviceType === 'mobile-dev') {
      baseTime = options.timelinePreference === 'expedited' ? '4 - 6 Weeks' : '6 - 10 Weeks';
      scopeList = ['Flutter iOS & Android Build', 'Push Notifications', 'API Backend', 'App Store Publishing'];
    } else if (options.serviceType === 'custom-software') {
      baseTime = options.timelinePreference === 'expedited' ? '4 - 8 Weeks' : '8 - 12 Weeks';
      scopeList = ['Custom Web Portal / SaaS MVP', 'Role Access Controls', 'PostgreSQL DB', 'Cloud Microservices'];
    } else if (options.serviceType === 'ai-automation') {
      baseTime = options.timelinePreference === 'expedited' ? '1 - 2 Weeks' : '2 - 3 Weeks';
      scopeList = ['Gemini AI Agent Setup', 'WhatsApp API Integration', 'CRM Webhook Sync', 'Internal SOP Training'];
    } else if (options.serviceType === 'digital-marketing') {
      baseTime = 'Monthly Retainer (Ongoing)';
      scopeList = ['Technical SEO Audit', 'Google Ads Campaign', 'Meta Ad Retargeting', 'Monthly ROI Dashboard'];
    } else {
      baseTime = 'Instant Onboarding';
      scopeList = ['Cloud Infrastructure Audit', 'CI/CD Pipeline Setup', 'Daily Backups', 'Managed Uptime Monitoring'];
    }

    if (options.aiIntegrationLevel === 'agent-workflow') {
      scopeList.push('Multi-step AI Workflow Qualification');
    } else if (options.aiIntegrationLevel === 'full-custom-ai') {
      scopeList.push('Custom Enterprise AI Fine-Tuning');
    }

    return { baseTime, scopeList };
  };

  const { baseTime, scopeList } = calculateEstimate();

  const handleGenerateRequest = () => {
    const summary = `Estimated Scope Summary: Service: ${options.serviceType}, AI Level: ${options.aiIntegrationLevel}, Timeline: ${baseTime}, Includes: ${scopeList.join(', ')}`;
    onOpenProjectModalWithScope(summary, options.serviceType);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/80 bg-slate-900/90 shadow-2xl relative overflow-hidden my-12">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-2xl mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5" /> Interactive Scope & Time Estimator
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
          Configure Your Project Architecture
        </h3>
        <p className="text-slate-300 text-sm mt-2">
          Select your technology requirements to generate an instant estimate of project scope, timelines, and deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Step 1: Select Service Pillar */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
              1. Select Primary Technology Pillar
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceCategories.map((cat) => {
                const IconComp = cat.icon;
                const isSelected = options.serviceType === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setOptions({ ...options, serviceType: cat.id })}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected 
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/15'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <IconComp className={`w-5 h-5 mb-2 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold leading-snug">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: AI Integration Requirement */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
              2. AI & Automation Integration Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'none', label: 'Standard Web / App Build', desc: 'Core software without AI models' },
                { id: 'chatbot', label: '24/7 AI Conversational Chatbot', desc: 'Trained on company FAQs and documents' },
                { id: 'agent-workflow', label: 'Multi-Step AI Workflow Agents', desc: 'Qualifies leads, updates CRM & sends WhatsApp' },
                { id: 'full-custom-ai', label: 'Custom Enterprise RAG / LLM', desc: 'Secure internal model trained on proprietary data' },
              ].map((ai) => (
                <button
                  key={ai.id}
                  onClick={() => setOptions({ ...options, aiIntegrationLevel: ai.id as any })}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    options.aiIntegrationLevel === ai.id 
                      ? 'bg-indigo-600/20 border-indigo-500 text-white' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-200">{ai.label}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{ai.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timeline Preference */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
              3. Desired Development Speed
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'standard', label: 'Standard Agile Sprints', desc: 'Optimal balance of QA and milestone reviews' },
                { id: 'expedited', label: 'Expedited Launch', desc: 'Dedicated engineering team for fast release' }
              ].map((tl) => (
                <button
                  key={tl.id}
                  onClick={() => setOptions({ ...options, timelinePreference: tl.id as any })}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    options.timelinePreference === tl.id 
                      ? 'bg-blue-600/20 border-blue-500 text-white' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-200">{tl.label}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{tl.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Scope Output Summary Box */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 shadow-xl sticky top-28">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Estimated Output
            </span>
            <h4 className="text-lg font-bold text-white mt-2">Project Scope Summary</h4>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Estimated Delivery:</span>
            </div>
            <span className="text-xs font-bold text-blue-300 font-mono">{baseTime}</span>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Key Deliverables Included:
            </p>
            <ul className="space-y-2 text-xs">
              {scopeList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleGenerateRequest}
            className="w-full py-3.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>Request Proposal with this Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
