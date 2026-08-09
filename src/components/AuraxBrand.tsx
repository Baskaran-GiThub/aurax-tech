import React from 'react';

export const AuraxMark: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="aurax-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="55%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M32 5 58 51H46L39.5 39H24.5L18 51H6L32 5Zm0 20.5L28.8 32h6.4L32 25.5Z" fill="url(#aurax-g)"/>
    <path d="M18 53h28" stroke="white" strokeOpacity=".9" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const AuraxBrand: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.12)]">
      <AuraxMark className="w-8 h-8" />
    </div>
    {!compact && (
      <div className="leading-none">
        <div className="text-xl font-extrabold tracking-[0.14em] text-white">AURAX</div>
        <div className="text-[8px] uppercase tracking-[0.28em] text-white/45 mt-1">Innovative Studios</div>
      </div>
    )}
  </div>
);
