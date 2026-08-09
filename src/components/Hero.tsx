import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Bot, 
  TrendingUp, 
  Cloud, 
  CheckCircle2, 
  Play, 
  Zap, 
  Activity,
  Layers,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ServiceCategoryId } from '../types';

interface HeroProps {
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
  onExploreServices: () => void;
  onOpenAIWorkflowDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenProjectModal,
  onExploreServices,
  onOpenAIWorkflowDemo
}) => {
  const [activeNode, setActiveNode] = useState<number>(1);

  const nodeDetails = [
    {
      id: 0,
      title: 'BUILD',
      subtitle: 'Software & Mobile',
      icon: Code,
      accent: 'bg-white text-black',
      description: 'Websites, native iOS/Android mobile apps, and custom web applications.',
      metrics: 'Responsive, performance-focused engineering'
    },
    {
      id: 1,
      title: 'AUTOMATE',
      subtitle: 'AI & Workflows',
      icon: Bot,
      accent: 'bg-white text-black',
      description: 'AI assistants, messaging automation, and CRM-integrated workflows.',
      metrics: 'Automated qualification and follow-up workflows'
    },
    {
      id: 2,
      title: 'GROW',
      subtitle: 'Digital Marketing',
      icon: TrendingUp,
      accent: 'bg-white text-black',
      description: 'Data-driven technical SEO, Google Ads, and high-converting lead campaigns.',
      metrics: 'Transparent, ROI-focused conversion analytics'
    },
    {
      id: 3,
      title: 'OPERATE',
      subtitle: 'Cloud & DevOps',
      icon: Cloud,
      accent: 'bg-white text-black',
      description: 'Cloud deployment, CI/CD pipelines, monitoring, and managed technical support.',
      metrics: 'Containerized security & backup protection'
    }
  ];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-tech-grid">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gradient pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-white/20 px-4 py-1.5 text-xs text-white/80 backdrop-blur-md hover:border-white transition-all cursor-pointer font-mono"
            onClick={onOpenAIWorkflowDemo}
          >
            <span className="w-2 h-2 bg-white animate-pulse" />
            <span className="font-bold text-white uppercase tracking-widest text-[10px]">Next-Gen Tech Studio</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 hover:text-white transition-colors text-[11px] uppercase tracking-wider">
              Live AI Automation Demo <ChevronRight className="w-3.5 h-3.5 text-white" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] italic">
              Build. <br />
              <span className="text-white/30">
                Automate.
              </span> <br />
              Grow.
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal max-w-2xl pt-2">
              Websites, custom software, AI automation, and digital growth solutions engineered for high-performance international businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenProjectModal()}
                className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all flex items-center gap-2.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <span>Explore Services</span>
                <Layers className="w-4 h-4" />
              </button>
            </div>

            {/* Value Propositions Pill Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/60 font-mono uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Purpose-Built Experiences</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>AI Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Global Remote Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Technology Workflow Diagram Visual */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 border border-white/20 bg-[#080808] shadow-2xl relative">
              
              {/* Header bar of visual mockup */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-white/30" />
                  <div className="w-2.5 h-2.5 bg-white/50" />
                  <div className="w-2.5 h-2.5 bg-white" />
                  <span className="text-white/60 text-[11px] ml-2">AURAX_ENGINE.SYS</span>
                </div>
                <div className="flex items-center gap-1.5 text-white text-[10px] uppercase font-bold tracking-widest bg-white/10 px-2 py-0.5 border border-white/20">
                  <Activity className="w-3 h-3 animate-spin" /> Live System
                </div>
              </div>

              {/* Interactive Node Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {nodeDetails.map((node) => {
                  const IconComponent = node.icon;
                  const isActive = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`p-3.5 text-left transition-all border ${
                        isActive 
                          ? 'bg-white/10 border-white text-white' 
                          : 'bg-[#050505] border-white/10 hover:border-white/30 text-white/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 bg-white text-black font-bold`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono text-white/40">0{node.id + 1}</span>
                      </div>
                      <p className="text-xs font-bold text-white tracking-widest uppercase">{node.title}</p>
                      <p className="text-[10px] text-white/50 font-mono mt-0.5">{node.subtitle}</p>
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail View Screen */}
              <div className="p-4 bg-[#050505] border border-white/10 text-xs space-y-2">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Architecture: {nodeDetails[activeNode].title}
                  </span>
                  <span className="text-[9px] font-bold text-white bg-white/10 px-1.5 py-0.5 border border-white/20 uppercase tracking-widest">
                    OPTIMIZED
                  </span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  {nodeDetails[activeNode].description}
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span>BENCHMARK:</span>
                  <span className="text-white font-bold">{nodeDetails[activeNode].metrics}</span>
                </div>
              </div>

              {/* Interactive AI Automation Trigger */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono">
                <div className="text-[10px] text-white/50 uppercase tracking-wider">
                  <span>Simulate AI Pipeline</span>
                </div>
                <button
                  onClick={onOpenAIWorkflowDemo}
                  className="px-3 py-1.5 text-[10px] font-bold text-black bg-white hover:bg-white/90 border border-white transition-all flex items-center gap-1 uppercase tracking-widest"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Run Demo</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
