import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Building,
  Globe,
  Sparkles
} from 'lucide-react';
import { ServiceCategoryId, ContactFormData } from '../types';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: ServiceCategoryId;
  prefilledScopeSummary?: string;
  selectedRegion: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  prefilledService = 'web-dev',
  prefilledScopeSummary = '',
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
    serviceRequired: prefilledService,
    approximateBudget: '$5,000 - $15,000',
    projectDescription: prefilledScopeSummary,
    preferredContactMethod: 'email'
  });

  const [botProtectionCheck, setBotProtectionCheck] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceRequired: prefilledService }));
    }
    if (prefilledScopeSummary) {
      setFormData(prev => ({ ...prev, projectDescription: prefilledScopeSummary }));
    }
  }, [prefilledService, prefilledScopeSummary]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botProtectionCheck.trim() !== '') {
      // Honeypot field triggered
      setErrorMsg('Spam detection triggered. Please try again.');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.projectDescription) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              Start a Project
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Request a Custom Proposal</h3>
            <p className="text-xs text-slate-400">
              This demo form will be connected to the official Aurax enquiry workflow before launch.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Project Proposal Request Received!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. We have assigned your request to our <span className="text-blue-400 font-semibold">{formData.serviceRequired}</span> lead. Check your email (<span className="text-slate-200">{formData.email}</span>) shortly.
            </p>
            <p className="text-xs text-slate-500">Closing window in 4 seconds...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
                {errorMsg}
              </div>
            )}

            {/* Hidden Honeypot Field for Spam Protection */}
            <input
              type="text"
              name="website_url_hp"
              value={botProtectionCheck}
              onChange={(e) => setBotProtectionCheck(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autocomplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
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
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 / +971 / +44 Phone number"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Country / Region</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="UAE, UK, USA, Australia, India..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Service Required *</label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
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
              <label className="text-xs font-semibold text-slate-300 block mb-1">Approximate Budget</label>
              <select
                value={formData.approximateBudget}
                onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
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
                rows={3}
                required
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Describe your project goals, desired features, timeline, or current challenges..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Preferred Contact Method</label>
              <div className="flex items-center gap-4 text-xs text-slate-300">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.preferredContactMethod === 'email'}
                    onChange={() => setFormData({ ...formData, preferredContactMethod: 'email' })}
                    className="accent-blue-500"
                  />
                  <span>Email</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={formData.preferredContactMethod === 'whatsapp'}
                    onChange={() => setFormData({ ...formData, preferredContactMethod: 'whatsapp' })}
                    className="accent-blue-500"
                  />
                  <span>WhatsApp</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
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
                <span>Submit Proposal Request</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Protected by SSL & Spam Safeguards. Zero unsolicited sales spam.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
