import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="w-80 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                A
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Aurax Contact Channel</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  WhatsApp number will be connected before launch
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-emerald-700 rounded text-emerald-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950 space-y-3 text-xs">
            <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 text-slate-200 leading-relaxed">
              Hello! 👋 Welcome to <strong className="text-white">Aurax Innovative Studios</strong>. How can we help you build, automate, or grow your business today?
            </div>
            <div className="pt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 leading-relaxed">
              WhatsApp quick chat is a launch-ready feature. The official Aurax business number will be connected before the public website goes live.
            </div>
          </div>

        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 flex items-center gap-2 transition-transform hover:scale-110 active:scale-95 group"
          aria-label="View WhatsApp availability"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="text-xs font-bold pr-1 hidden sm:inline group-hover:inline">
            WhatsApp — Coming Soon
          </span>
        </button>
      )}
    </div>
  );
};
