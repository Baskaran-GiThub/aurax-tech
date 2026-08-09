import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Globe, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ServiceCategoryId } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedRegion
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [serviceFocus, setServiceFocus] = useState<ServiceCategoryId>('ai-automation');
  const [selectedDate, setSelectedDate] = useState('2026-08-12');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [timezone, setTimezone] = useState(
    selectedRegion === 'UAE' ? 'GST (Dubai UTC+4)' :
    selectedRegion === 'UK' ? 'BST (London UTC+1)' :
    selectedRegion === 'USA' ? 'EST (New York UTC-5)' :
    selectedRegion === 'AUS' ? 'AEST (Sydney UTC+10)' : 'IST (India UTC+5:30)'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Book a Technical Consultation</h3>
              <p className="text-xs text-slate-400">
                Speak directly with an Aurax Solutions Architect. Zero pressure, 100% technical clarity.
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

        {isSubmitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Consultation Booking Confirmed!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. A calendar invitation and Google Meet link for <span className="text-blue-400 font-semibold">{selectedDate} at {selectedTime} ({timezone})</span> have been scheduled.
            </p>
            <p className="text-xs text-slate-500">Closing window in 4 seconds...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {step === 1 ? (
              <div className="space-y-5">
                {/* Topic Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Select Consultation Topic
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'web-dev', label: 'Website Dev' },
                      { id: 'mobile-dev', label: 'Mobile Apps' },
                      { id: 'custom-software', label: 'Custom Software' },
                      { id: 'ai-automation', label: 'AI & Automation' },
                      { id: 'digital-marketing', label: 'Digital Growth' },
                      { id: 'cloud-devops', label: 'Cloud & DevOps' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setServiceFocus(t.id as ServiceCategoryId)}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-left ${
                          serviceFocus === t.id 
                            ? 'bg-blue-600/20 border-blue-500 text-white' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                      Timezone
                    </label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    >
                      <option value="GST (Dubai UTC+4)">GST (Dubai UTC+4)</option>
                      <option value="BST (London UTC+1)">BST (London UTC+1)</option>
                      <option value="EST (New York UTC-5)">EST (New York UTC-5)</option>
                      <option value="AEST (Sydney UTC+10)">AEST (Sydney UTC+10)</option>
                      <option value="IST (India UTC+5:30)">IST (India UTC+5:30)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Select Available Time Slot ({timezone})
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 text-xs font-mono font-medium rounded-xl border transition-all ${
                          selectedTime === slot 
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span>Continue to Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span>Selected Slot:</span>
                  <span className="font-bold text-blue-400">{selectedDate} @ {selectedTime} ({timezone})</span>
                  <button 
                    type="button" 
                    onClick={() => setStep(1)} 
                    className="text-[11px] text-slate-400 hover:text-white underline"
                  >
                    Change
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 XXX XXXX"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Ltd"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Project Notes / Questions</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe what you'd like to discuss..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-xl border border-slate-700"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg transition-all"
                  >
                    Confirm Consultation Booking
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
};
