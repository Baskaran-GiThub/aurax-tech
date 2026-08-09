/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActivePage, ServiceCategoryId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { WhyAuraxSection } from './components/WhyAuraxSection';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { AIWorkflowSimulator } from './components/AIWorkflowSimulator';
import { ConsultationModal } from './components/ConsultationModal';
import { ContactFormModal } from './components/ContactFormModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';

import { portfolioData } from './data/portfolioData';
import { servicesData } from './data/servicesData';

import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Code, 
  TrendingUp, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Layers,
  ChevronRight,
  MessageSquare,
  Play
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedRegion, setSelectedRegion] = useState<string>('UAE');
  const [selectedServiceTab, setSelectedServiceTab] = useState<ServiceCategoryId>('web-dev');

  // Modals state
  const [aiSimulatorOpen, setAiSimulatorOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectModalService, setProjectModalService] = useState<ServiceCategoryId>('web-dev');
  const [projectModalSummary, setProjectModalSummary] = useState('');

  const handleOpenProjectModal = (service?: ServiceCategoryId) => {
    if (service) {
      setProjectModalService(service);
    } else {
      setProjectModalService('web-dev');
    }
    setProjectModalSummary('');
    setProjectModalOpen(true);
  };

  const handleOpenProjectModalWithScope = (summary: string, serviceId: ServiceCategoryId) => {
    setProjectModalService(serviceId);
    setProjectModalSummary(summary);
    setProjectModalOpen(true);
  };

  const handleSelectServiceTab = (serviceId: ServiceCategoryId) => {
    setSelectedServiceTab(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* Top Main Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenProjectModal={handleOpenProjectModal}
        onSelectServiceTab={handleSelectServiceTab}
      />

      {/* Main Page Content Body */}
      <main className="flex-grow">
        
        {/* PAGE 1: HOME PAGE */}
        {activePage === 'home' && (
          <div className="space-y-0">
            
            {/* 1. Homepage Hero */}
            <Hero
              onOpenProjectModal={handleOpenProjectModal}
              onExploreServices={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenAIWorkflowDemo={() => setAiSimulatorOpen(true)}
            />

            {/* 2. International Trust Bar & Metrics */}
            <section className="py-8 bg-slate-950 border-t border-b border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-6">
                  Target Markets for Aurax Solutions
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-2">🇦🇪 UAE & GCC</span>
                  <span className="flex items-center gap-2">🇬🇧 United Kingdom</span>
                  <span className="flex items-center gap-2">🇺🇸 United States</span>
                  <span className="flex items-center gap-2">🇦🇺 Australia</span>
                  <span className="flex items-center gap-2">🇮🇳 India</span>
                </div>
              </div>
            </section>

            {/* 3. Core Capabilities Grid (BUILD, AUTOMATE, GROW, OPERATE) */}
            <section className="py-20 bg-slate-900/40 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
                    Four Strategic Capabilities
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    One Unified Technology Partner
                  </h2>
                  <p className="text-slate-300 text-base leading-relaxed">
                    Aurax combines modern web engineering, custom software development, AI automation pipelines, and digital growth under a single accountable relationship.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      id: 'web-dev' as ServiceCategoryId,
                      title: 'BUILD',
                      subtitle: 'Web, Mobile & Software',
                      icon: Code,
                      accent: 'from-blue-600 to-cyan-500',
                      points: ['Corporate Websites & Portals', 'Flutter Native Mobile Apps', 'Custom SaaS & Internal Tools']
                    },
                    {
                      id: 'ai-automation' as ServiceCategoryId,
                      title: 'AUTOMATE',
                      subtitle: 'AI & Business Workflows',
                      icon: Bot,
                      accent: 'from-indigo-600 to-purple-500',
                      points: ['AI Assistants & Chatbots', 'WhatsApp & CRM Automation', 'Lead Qualification Workflows']
                    },
                    {
                      id: 'digital-marketing' as ServiceCategoryId,
                      title: 'GROW',
                      subtitle: 'Digital Growth & Marketing',
                      icon: TrendingUp,
                      accent: 'from-amber-500 to-rose-500',
                      points: ['Technical SEO & Local SEO', 'Targeted Google & Meta Ads', 'Conversion Rate Optimization']
                    },
                    {
                      id: 'cloud-devops' as ServiceCategoryId,
                      title: 'OPERATE',
                      subtitle: 'Cloud, DevOps & Support',
                      icon: Cloud,
                      accent: 'from-emerald-600 to-teal-500',
                      points: ['AWS/GCP Cloud Architecture', 'CI/CD Automated Pipelines', 'Managed Technical Support']
                    }
                  ].map((cap, i) => {
                    const IconComponent = cap.icon;
                    return (
                      <div
                        key={i}
                        className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-6"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className={`p-3 rounded-2xl bg-gradient-to-r ${cap.accent} text-slate-950 font-bold`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-500">0{i + 1}</span>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-white tracking-wide">{cap.title}</h3>
                            <p className="text-xs font-medium text-slate-400">{cap.subtitle}</p>
                          </div>

                          <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                            {cap.points.map((pt, j) => (
                              <li key={j} className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            handleSelectServiceTab(cap.id);
                            setActivePage('services');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full py-2.5 px-3 text-xs font-bold text-blue-400 hover:text-white bg-slate-900 hover:bg-blue-600 rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Explore {cap.title} Pillar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 4. Why Aurax Section */}
            <WhyAuraxSection onOpenProjectModal={handleOpenProjectModal} />

            {/* 5. AI & Automation Feature Highlight Card */}
            <section className="py-16 bg-slate-950 relative border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-3xl p-8 sm:p-12 border border-indigo-500/30 bg-gradient-to-r from-slate-950 via-indigo-950/30 to-slate-950 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-8 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 inline-flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" /> Major Aurax Differentiator
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Automate Lead Qualification & Repetitive Support with Practical AI
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Explore how AI assistants, WhatsApp integrations, and CRM workflows can capture enquiries, qualify leads, and automate follow-up steps.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setAiSimulatorOpen(true)}
                        className="px-6 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Run Live AI Workflow Simulator</span>
                      </button>

                      <button
                        onClick={() => handleOpenProjectModal('ai-automation')}
                        className="px-5 py-3 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
                      >
                        Build Custom AI Agent
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-2">
                    <p className="text-slate-400 text-[11px] font-bold uppercase">Automated Pipeline Execution:</p>
                    <p className="text-emerald-400">Website Enquiry → AI Qualification → CRM Entry → WhatsApp Response → Sales Team Alert</p>
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Status: Active</span>
                      <span>Response Time: &lt; 1.5s</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 6. Interactive Project Scope & Time Estimator */}
            <section className="py-12 bg-slate-900/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProjectEstimator
                  onOpenProjectModalWithScope={handleOpenProjectModalWithScope}
                />
              </div>
            </section>

            {/* 7. Selected Work Preview */}
            <section className="py-20 bg-slate-950 border-t border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      Case Study Blueprints
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                      Selected Portfolio Work
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0"
                  >
                    <span>View All Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {portfolioData.slice(0, 3).map((cs) => (
                    <div
                      key={cs.id}
                      onClick={() => {
                        setActivePage('portfolio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-800 space-y-4 cursor-pointer"
                    >
                      <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                        {cs.region}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">{cs.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{cs.challenge}</p>
                      
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 font-mono text-xs">
                        <div>
                          <p className="text-emerald-400 font-bold">{cs.results[0].value}</p>
                          <p className="text-[10px] text-slate-400">{cs.results[0].label}</p>
                        </div>
                        <div>
                          <p className="text-blue-400 font-bold">{cs.results[1]?.value || '100%'}</p>
                          <p className="text-[10px] text-slate-400">{cs.results[1]?.label || 'Success'}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Industries Grid */}
            <IndustriesSection onOpenProjectModal={handleOpenProjectModal} />

            {/* 9. 6-Step Methodology */}
            <ProcessSection />

            {/* 10. Technology Matrix */}
            <TechStackSection />

            {/* 11. Final High-Impact CTA Section */}
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                  Ready to Build. Automate. Grow.
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Let’s Build Your Digital Technology Flagship.
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Whether starting a new project or modernizing an existing enterprise platform, our team is ready to deliver.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => handleOpenProjectModal()}
                    className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="px-7 py-4 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-2xl transition-all"
                  >
                    Book a Technical Consultation
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* PAGE 2: SERVICES PAGE */}
        {activePage === 'services' && (
          <ServicesView
            initialServiceId={selectedServiceTab}
            onOpenProjectModal={handleOpenProjectModal}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {/* PAGE 3: PORTFOLIO / OUR WORK PAGE */}
        {activePage === 'portfolio' && (
          <PortfolioView
            onOpenProjectModal={handleOpenProjectModal}
          />
        )}

        {/* PAGE 4: ABOUT PAGE */}
        {activePage === 'about' && (
          <AboutView
            onOpenProjectModal={handleOpenProjectModal}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {/* PAGE 5: CONTACT PAGE */}
        {activePage === 'contact' && (
          <ContactView
            onOpenConsultation={() => setConsultationOpen(true)}
            selectedRegion={selectedRegion}
          />
        )}

      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenProjectModal={handleOpenProjectModal}
        onOpenConsultation={() => setConsultationOpen(true)}
        onSelectServiceTab={handleSelectServiceTab}
      />

      {/* Floating Modals & Widgets */}
      <AIWorkflowSimulator
        isOpen={aiSimulatorOpen}
        onClose={() => setAiSimulatorOpen(false)}
        onOpenProjectModal={handleOpenProjectModal}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        selectedRegion={selectedRegion}
      />

      <ContactFormModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        prefilledService={projectModalService}
        prefilledScopeSummary={projectModalSummary}
        selectedRegion={selectedRegion}
      />

      <WhatsAppWidget />

    </div>
  );
}

