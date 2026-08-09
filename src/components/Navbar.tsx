import React, { useState } from 'react';
import { 
  Code2, 
  ChevronDown, 
  Globe, 
  Menu, 
  X, 
  Calendar, 
  ArrowRight,
  Bot,
  Smartphone,
  Globe2,
  TrendingUp,
  Cloud,
  Code
} from 'lucide-react';
import { ActivePage, ServiceCategoryId } from '../types';
import { marketRegions } from '../data/regionsData';
import { AuraxBrand } from './AuraxBrand';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  selectedRegion: string;
  setSelectedRegion: (code: string) => void;
  onOpenConsultation: () => void;
  onOpenProjectModal: (service?: ServiceCategoryId) => void;
  onSelectServiceTab?: (serviceId: ServiceCategoryId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  selectedRegion,
  setSelectedRegion,
  onOpenConsultation,
  onOpenProjectModal,
  onSelectServiceTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  const currentRegionObj = marketRegions.find(r => r.code === selectedRegion) || marketRegions[0];

  const serviceLinks = [
    { id: 'web-dev' as ServiceCategoryId, title: 'Website Development', icon: Globe2, desc: 'Corporate, E-Commerce & Web Portals' },
    { id: 'mobile-dev' as ServiceCategoryId, title: 'Mobile App Development', icon: Smartphone, desc: 'iOS & Android Native Experience' },
    { id: 'custom-software' as ServiceCategoryId, title: 'Custom Software Dev', icon: Code, desc: 'SaaS MVPs, CRMs & Client Portals' },
    { id: 'ai-automation' as ServiceCategoryId, title: 'AI & Automation', icon: Bot, desc: 'AI Chatbots, WhatsApp & Workflows', badge: 'Popular' },
    { id: 'digital-marketing' as ServiceCategoryId, title: 'Digital Growth & Marketing', icon: TrendingUp, desc: 'SEO, Ads & Lead Generation' },
    { id: 'cloud-devops' as ServiceCategoryId, title: 'Cloud & DevOps Tech', icon: Cloud, desc: 'AWS/GCP, Maintenance & CI/CD' },
  ];

  const handleServiceClick = (serviceId: ServiceCategoryId) => {
    setActivePage('services');
    if (onSelectServiceTab) {
      onSelectServiceTab(serviceId);
    }
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      {/* Top Banner: Regional Market Bar */}
      <div className="bg-[#080808] border-b border-white/10 py-1.5 px-4 text-xs text-white/60 flex justify-between items-center max-w-7xl mx-auto font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white/5 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border border-white/10">
            <Globe className="w-3 h-3" /> Global Delivery
          </span>
          <span className="hidden sm:inline text-white/50 text-[11px]">
            {currentRegionObj.focusText}
          </span>
        </div>

        {/* Region Switcher */}
        <div className="relative">
          <button
            onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
            className="flex items-center gap-1.5 text-white/80 hover:text-white bg-white/5 px-2.5 py-1 text-xs border border-white/10 hover:border-white/30 transition-colors"
          >
            <span>{currentRegionObj.flag}</span>
            <span className="font-bold text-white">{currentRegionObj.code}</span>
            <span className="text-white/40 text-[10px]">({currentRegionObj.currency})</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${regionDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {regionDropdownOpen && (
            <div className="absolute right-0 mt-1 w-64 bg-[#0a0a0a] border border-white/20 shadow-2xl py-2 z-50">
              <div className="px-3 py-1 text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/10 mb-1">
                Select Target Region
              </div>
              {marketRegions.map((region) => (
                <button
                  key={region.code}
                  onClick={() => {
                    setSelectedRegion(region.code);
                    setRegionDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                    selectedRegion === region.code ? 'bg-white/10 text-white font-bold' : 'text-white/70'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{region.flag}</span>
                    <span>{region.name}</span>
                  </span>
                  <span className="text-white/40 font-mono text-[11px]">{region.currency}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="cursor-pointer flex items-center gap-3 group"
        >
<AuraxBrand />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
          <button
            onClick={() => setActivePage('home')}
            className={`transition-colors py-2 ${
              activePage === 'home' ? 'text-white font-bold border-b-2 border-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Home
          </button>

          {/* Services Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setActivePage('services')}
              className={`flex items-center gap-1 transition-colors py-2 ${
                activePage === 'services' ? 'text-white font-bold border-b-2 border-white' : 'text-white/60 hover:text-white'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-white' : ''}`} />
            </button>

            {/* Mega Dropdown */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-20 w-[580px] bg-[#0a0a0a] border border-white/20 shadow-2xl p-4 grid grid-cols-2 gap-2 backdrop-blur-xl z-50">
                {serviceLinks.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleServiceClick(s.id)}
                      className="text-left p-3 hover:bg-white/5 transition-all border border-transparent hover:border-white/10 group flex items-start gap-3"
                    >
                      <div className="p-2 bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-white transition-colors">
                            {s.title}
                          </span>
                          {s.badge && (
                            <span className="text-[9px] font-bold bg-white/20 text-white px-1.5 py-0.5 border border-white/30">
                              {s.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/50 mt-0.5 leading-snug normal-case">
                          {s.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
                <div className="col-span-2 mt-2 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60 px-2 normal-case">
                  <span>Need an integrated custom solution?</span>
                  <button 
                    onClick={() => { setServicesDropdownOpen(false); onOpenConsultation(); }}
                    className="text-white hover:underline font-bold flex items-center gap-1 uppercase tracking-wider text-[10px]"
                  >
                    Discuss with Architect <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setActivePage('portfolio')}
            className={`transition-colors py-2 ${
              activePage === 'portfolio' ? 'text-white font-bold border-b-2 border-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Our Work
          </button>

          <button
            onClick={() => setActivePage('about')}
            className={`transition-colors py-2 ${
              activePage === 'about' ? 'text-white font-bold border-b-2 border-white' : 'text-white/60 hover:text-white'
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActivePage('contact')}
            className={`transition-colors py-2 ${
              activePage === 'contact' ? 'text-white font-bold border-b-2 border-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2.5 border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
          >
            <span>Book Consultation</span>
          </button>

          <button
            onClick={() => onOpenProjectModal()}
            className="px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col gap-2 font-medium text-sm">
            <button
              onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-lg ${activePage === 'home' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300'}`}
            >
              Home
            </button>
            
            <div className="py-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">Services</p>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {serviceLinks.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceClick(s.id)}
                    className="text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg flex items-center gap-2"
                  >
                    <s.icon className="w-4 h-4 text-blue-400" />
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setActivePage('portfolio'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-lg ${activePage === 'portfolio' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300'}`}
            >
              Our Work
            </button>

            <button
              onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-lg ${activePage === 'about' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300'}`}
            >
              About Us
            </button>

            <button
              onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-lg ${activePage === 'contact' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300'}`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg border border-white/10 flex items-center justify-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Book Call</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenProjectModal(); }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg flex items-center justify-center gap-1"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
