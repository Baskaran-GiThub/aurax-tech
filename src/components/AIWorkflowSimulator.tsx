import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  CheckCircle2, 
  Clock, 
  Send, 
  UserCheck, 
  Database, 
  MessageSquare, 
  Mail, 
  BellRing, 
  Play, 
  RotateCcw, 
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  X
} from 'lucide-react';
import { ServiceCategoryId } from '../types';

interface AIWorkflowSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
}

export const AIWorkflowSimulator: React.FC<AIWorkflowSimulatorProps> = ({
  isOpen,
  onClose,
  onOpenProjectModal
}) => {
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [testLeadName, setTestLeadName] = useState('Sarah Jenkins');
  const [testLeadCompany, setTestLeadCompany] = useState('Apex Tech Global');
  const [testLeadService, setTestLeadService] = useState('Website & AI Automation');

  const steps = [
    {
      id: 1,
      title: '1. Website Enquiry Received',
      channel: 'Web Form / Chat Widget',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      action: 'Lead submits contact form inquiring about website redesign and custom AI chatbot.',
      output: `Payload captured: { name: "${testLeadName}", company: "${testLeadCompany}", service: "${testLeadService}" }`,
      time: '0.1s'
    },
    {
      id: 2,
      title: '2. AI Lead Qualification',
      channel: 'Example AI Processing Layer',
      icon: Bot,
      color: 'from-purple-500 to-indigo-500',
      action: 'AI model reads project requirements, scores lead priority (High Priority - Score 94/100), and drafts preliminary scope.',
      output: 'Example output: High-intent lead detected. Suggested next step: review requirements and prepare a preliminary scope.',
      time: '0.4s'
    },
    {
      id: 3,
      title: '3. Automated CRM Entry',
      channel: 'Example CRM Integration',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      action: 'Contact & Deal created automatically in CRM with AI tags, estimated value, and assigned account manager.',
      output: `CRM Deal ID #8921 created for ${testLeadCompany}. Status: Lead Qualified.`,
      time: '0.8s'
    },
    {
      id: 4,
      title: '4. Instant WhatsApp & Email Response',
      channel: 'Example Messaging Integration',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-600',
      action: 'Personalized WhatsApp message sent to client with custom calendar link for instant booking.',
      output: `WhatsApp message delivered to ${testLeadName}: "Hi Sarah, thank you for reaching out to Aurax. Here is your preliminary AI project outline..."`,
      time: '1.2s'
    },
    {
      id: 5,
      title: '5. Sales Team Slack/Teams Notification',
      channel: 'Example Team Notification',
      icon: BellRing,
      color: 'from-amber-500 to-orange-500',
      action: 'Instant notification pushed to sales team channel with client summary and calendar slot status.',
      output: `Slack Alert: 🚀 New Hot Lead! ${testLeadName} (${testLeadCompany}) requested ${testLeadService}.`,
      time: '1.5s'
    },
    {
      id: 6,
      title: '6. Automated Follow-Up Workflow',
      channel: 'Smart Nurture Sequence',
      icon: Clock,
      color: 'from-cyan-500 to-blue-600',
      action: 'If no booking occurs within 24h, AI system triggers friendly case study follow-up sequence.',
      output: 'Example sequence scheduled: follow-up email and messaging reminder based on the configured workflow.',
      time: '24h Auto-Pilot'
    }
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSimulating && currentStep >= 0 && currentStep < steps.length) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1200);
    } else if (currentStep >= steps.length) {
      setIsSimulating(false);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, currentStep, steps.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Interactive AI Automation Pipeline</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                  Demo Simulation
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Explore an example architecture showing how enquiries can move through AI qualification, CRM updates, notifications, and follow-up automation.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Controls Bar */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Sample Client Name
              </label>
              <input
                type="text"
                value={testLeadName}
                onChange={(e) => setTestLeadName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={testLeadCompany}
                onChange={(e) => setTestLeadCompany(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
              />
            </div>

            <div className="flex items-center gap-2 pt-4 md:pt-0">
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin text-amber-300" />
                    <span>Processing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Start Test Enquiry</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setCurrentStep(-1)}
                className="p-2.5 text-slate-400 hover:text-white bg-slate-800 rounded-xl border border-slate-700"
                title="Reset Simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workflow Steps Vertical Stack */}
          <div className="space-y-3">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = idx === currentStep && currentStep < steps.length;
              const isCompleted = idx < currentStep;

              return (
                <div
                  key={step.id}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/50 scale-[1.01]'
                      : isCompleted
                      ? 'bg-slate-950/80 border-emerald-500/40 opacity-90'
                      : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-r ${step.color} text-slate-950 font-bold shrink-0 mt-0.5`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">{step.title}</h4>
                          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                            {step.channel}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">{step.action}</p>
                        
                        {(isActive || isCompleted) && (
                          <div className="mt-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400">
                            {step.output}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Done ({step.time})
                        </span>
                      ) : isActive ? (
                        <span className="inline-flex items-center gap-1 text-xs text-blue-400 font-medium bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 animate-pulse">
                          <Zap className="w-3.5 h-3.5" /> Processing...
                        </span>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {currentStep >= steps.length && !isSimulating && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-300">Demo Workflow Complete</h4>
                <p className="text-xs text-slate-300 mt-1">Example flow completed: enquiry captured → qualification logic applied → CRM step prepared → response triggered → team notified → follow-up scheduled.</p>
              </div>
            </div>
          )}

          {/* Final Callout */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Want to implement this AI automation loop in your business?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Aurax can design integrations using AI services, messaging APIs, CRMs, and email workflows based on the client's operational stack.
              </p>
            </div>
            <button
              onClick={() => { onClose(); onOpenProjectModal('ai-automation'); }}
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Build AI Automation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
