import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar,
  ArrowRight,
  Bot
} from 'lucide-react';
import { ServiceCategoryId, ContactFormData } from '../types';

interface ContactViewProps {
  onOpenConsultation: () => void;
  selectedRegion: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onOpenConsultation,
  selectedRegion
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: selectedRegion === 'UAE' ? 'United Arab Emirates' :
             selectedRegion === 'UK' ? 'United Kingdom' :
             selectedRegion === 'USA' ? 'United States' :
             selectedRegion === 'AUS' ? 'Australia' : 'India',
    serviceRequired: 'web-dev',
    approximateBudget: '$5,000 - $15,000',
    projectDescription: '',
    preferredContactMethod: 'email'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.projectDescription) {
      setSubmitted(true);
    }
  };


  return (
    <div className="py-12 bg-tech-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Your Project or Request a Quote
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Whether you need a custom corporate website, mobile application, bespoke software, or AI automation pipeline, Aurax can review the requirement and prepare a suitable delivery approach.
          </p>
        </div>

        {/* Quick Actions Bar */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white">Prefer a project discussion?</h3>
            <p className="text-xs text-slate-400 mt-0.5">Use the consultation option to share a preferred time for a project discussion.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              disabled
              className="px-4 py-2.5 text-xs font-bold text-slate-400 bg-slate-800 border border-slate-700 rounded-xl flex items-center gap-1.5 cursor-not-allowed"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp — Coming Soon</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* Main Form & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-10 border border-slate-700 bg-slate-950/90 shadow-2xl space-y-6">
            <h2 className="text-xl font-bold text-white">Project Brief & Quote Request Form</h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Thank you for contacting Aurax Studios!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  This local demo has captured your project brief successfully. Before launch, this form will be connected to the official Aurax email/CRM workflow for real enquiries.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 / +44 / +1 Phone number"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Country / Target Region</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="UAE, UK, USA, Australia, India..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Primary Service Required *</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value as any })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="web-dev">Website Development</option>
                      <option value="mobile-dev">Mobile App Development</option>
                      <option value="custom-software">Custom Software & Portals</option>
                      <option value="ai-automation">AI & Automation Solutions</option>
                      <option value="digital-marketing">Digital Growth & Marketing</option>
                      <option value="cloud-devops">Cloud & Managed Support</option>
                      <option value="multiple">Integrated Multi-Pillar Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Approximate Budget Range</label>
                  <select
                    value={formData.approximateBudget}
                    onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="< $5,000">&lt; $5,000 (Small Business / Starter)</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000 (Standard Corporate / App)</option>
                    <option value="$15,000 - $35,000">$15,000 - $35,000 (Custom SaaS / Multi-Feature AI)</option>
                    <option value="$35,000+">$35,000+ (Enterprise Transformation)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Project Description & Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe your current business challenge, required features, or tech stack expectations..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Preferred Contact Method</label>
                  <div className="flex items-center gap-6 text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        value="email"
                        checked={formData.preferredContactMethod === 'email'}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: 'email' })}
                        className="accent-blue-500"
                      />
                      <span>Email</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        value="whatsapp"
                        checked={formData.preferredContactMethod === 'whatsapp'}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: 'whatsapp' })}
                        className="accent-blue-500"
                      />
                      <span>WhatsApp</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        value="phone"
                        checked={formData.preferredContactMethod === 'phone'}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: 'phone' })}
                        className="accent-blue-500"
                      />
                      <span>Phone Call</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Request</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Contact Details Placeholders Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email Inquiry</span>
                    <span className="font-mono text-slate-300">Email will be added before launch</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Phone Support</span>
                    <span className="font-mono text-slate-300">Phone / WhatsApp will be added before launch</span>
                    <span className="font-mono text-slate-300 block"></span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Response Benchmark</span>
                    <span className="text-slate-300">Response times will be confirmed before launch.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Privacy & Confidentiality</span>
              <h4 className="text-sm font-bold text-white">NDA & IP Protection</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We respect your proprietary ideas. Project confidentiality and NDA requirements can be agreed before sensitive business or technical information is shared.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
