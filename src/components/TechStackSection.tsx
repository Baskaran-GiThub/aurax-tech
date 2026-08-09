import React, { useState } from 'react';
import { Cpu, Code, Database, Bot, TrendingUp, Cloud, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'mobile' | 'cloud'>('all');

  const technologies = [
    { name: 'React', category: 'frontend', icon: '⚡', desc: 'Modern reactive UI component architecture' },
    { name: 'TypeScript', category: 'frontend', icon: '🛡️', desc: 'Strict compile-time type safety & clean code' },
    { name: 'Next.js', category: 'frontend', icon: '▲', desc: 'High-performance SSR & edge rendering' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', desc: 'Utility-first responsive styling framework' },
    
    { name: 'Flutter', category: 'mobile', icon: '💙', desc: 'Cross-platform native iOS & Android apps' },
    { name: 'React Native', category: 'mobile', icon: '📱', desc: 'Native mobile components powered by JS' },
    { name: 'Swift & Kotlin', category: 'mobile', icon: '🚀', desc: 'Platform-native iOS & Android code' },

    { name: 'Node.js & Express', category: 'backend', icon: '🟢', desc: 'High-throughput async server microservices' },
    { name: 'PostgreSQL', category: 'backend', icon: '🐘', desc: 'Enterprise relational ACID compliance' },
    { name: 'Redis', category: 'backend', icon: '⚡', desc: 'In-memory caching & fast task queuing' },
    { name: 'GraphQL / REST API', category: 'backend', icon: '🔗', desc: 'Clean decoupled frontend-backend endpoints' },

    { name: 'Gemini API', category: 'ai', icon: '✨', desc: 'Server-side Gemini multimodal LLM reasoning' },
    { name: 'OpenAI & RAG', category: 'ai', icon: '🤖', desc: 'Vector database semantic document retrieval' },
    { name: 'WhatsApp API', category: 'ai', icon: '💬', desc: 'Official WhatsApp Business automated messaging' },
    { name: 'Make & n8n', category: 'ai', icon: '⚙️', desc: 'Multi-app visual workflow orchestration' },

    { name: 'AWS & GCP', category: 'cloud', icon: '☁️', desc: 'Scalable containerized cloud infrastructure' },
    { name: 'Docker & Kubernetes', category: 'cloud', icon: '🐳', desc: 'Container orchestration & auto-scaling' },
    { name: 'Cloudflare', category: 'cloud', icon: '🛡️', desc: 'Global Edge CDN, SSL, & DDoS mitigation' },
    { name: 'GitHub Actions', category: 'cloud', icon: '🔄', desc: 'Automated CI/CD zero-downtime deployments' }
  ];

  const filteredTech = filter === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === filter);

  return (
    <section className="py-20 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Enterprise Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Modern, battle-tested technology stack
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We select technology strictly based on performance, scalability, security, and long-term maintainability for your enterprise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Frontend & Web' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'backend', label: 'Backend & DB' },
            { id: 'ai', label: 'AI & Automation' },
            { id: 'cloud', label: 'Cloud & DevOps' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                filter === btn.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-2xl p-4 border border-slate-800 flex items-start gap-3">
              <span className="text-xl p-2 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                {tech.icon}
              </span>
              <div>
                <h4 className="text-sm font-bold text-white">{tech.name}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
