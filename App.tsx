import React, { useState } from 'react';
import { geminiService } from './services/geminiService';
import { ProcessingResult, ProcessingStatus } from './types';
import SectionCard from './components/SectionCard';
import FollowUpChat from './components/FollowUpChat';

// Landing Page Components
const HeroSection: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)]" />
    
    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <span className="text-cyan-400 text-sm font-medium tracking-wide">VanAlvesIA Security Framework</span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
        <span className="text-balance">Proteja Seu Negócio com</span>
        <br />
        <span className="text-cyan-400 cyan-text-glow">Inteligência Estratégica</span>
      </h1>
      
      <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
        Soluções integradas de segurança física e digital, desenvolvidas por especialistas 
        com décadas de experiência em operações de alta complexidade.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
          Solicitar Consultoria
        </a>
        <a href="#framework" className="px-8 py-4 glass-card text-cyan-400 font-semibold rounded-xl hover:border-cyan-400/50 transition-all">
          Conhecer Framework
        </a>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg className="w-6 h-6 text-cyan-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

const FrameworkSection: React.FC = () => (
  <section id="framework" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Metodologia Exclusiva</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
          Framework de Blindagem <span className="text-cyan-400">NetDefesa</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Uma abordagem completa que integra proteção física, digital e estratégica para empresas que não podem falhar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: "Blindagem Perimetral",
            description: "Proteção multicamadas que defende seus ativos físicos e digitais contra ameaças externas e internas."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ),
            title: "Monitoramento 360°",
            description: "Vigilância contínua com inteligência artificial para detecção precoce de vulnerabilidades e ameaças."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: "Resposta Rápida",
            description: "Protocolos de contingência e equipes prontas para neutralizar incidentes em tempo real."
          }
        ].map((item, index) => (
          <div key={index} className="glass-card rounded-2xl p-8 cyan-glow hover:border-cyan-400/30 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LeadershipSection: React.FC = () => (
  <section id="leadership" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(34,211,238,0.05)_0%,transparent_60%)]" />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Portrait with Glassmorphism Frame */}
        <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
          {/* Glow Effect Behind */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" />
          </div>
          
          {/* Glassmorphism Frame */}
          <div className="relative gradient-border rounded-3xl">
            <div className="glass-card rounded-3xl p-3 cyan-glow">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/images/portrait.png" 
                  alt="Ex-Capitão PMESP - Especialista em Segurança"
                  className="w-full max-w-md h-auto object-cover grayscale-[30%] contrast-110"
                  style={{ filter: 'grayscale(30%) contrast(1.1) brightness(0.95)' }}
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5" />
                
                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase">Ex-Capitão PMESP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="order-2 lg:order-2">
          <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Liderança</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 leading-tight">
            Experiência que
            <br />
            <span className="text-cyan-400 cyan-text-glow">Protege</span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-10 leading-relaxed text-pretty">
            Com uma carreira construída na linha de frente da segurança pública e corporativa, 
            trago a disciplina, visão estratégica e capacidade de liderança necessárias para 
            blindar organizações contra as ameaças do mundo moderno.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all">
              <div className="text-4xl font-black text-cyan-400 cyan-text-glow mb-2">26</div>
              <div className="text-slate-400 text-sm font-medium">anos</div>
              <div className="text-white font-semibold mt-1">Liderança Operacional</div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all">
              <div className="text-4xl font-black text-cyan-400 cyan-text-glow mb-2">+1.200</div>
              <div className="text-slate-400 text-sm font-medium">profissionais</div>
              <div className="text-white font-semibold mt-1">Colaboradores Gerenciados</div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all">
              <div className="text-3xl font-black text-cyan-400 cyan-text-glow mb-2">Física + Digital</div>
              <div className="text-slate-400 text-sm font-medium">abordagem</div>
              <div className="text-white font-semibold mt-1">Segurança Integrada</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section id="services" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Soluções</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
          Serviços <span className="text-cyan-400">Especializados</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Consultoria em Segurança Corporativa",
            description: "Análise de vulnerabilidades, planejamento estratégico e implementação de protocolos de segurança personalizados.",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          },
          {
            title: "Auditoria de Segurança Digital",
            description: "Testes de penetração, análise de infraestrutura e recomendações para fortificação de sistemas.",
            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          },
          {
            title: "Treinamento de Equipes",
            description: "Capacitação em protocolos de segurança, resposta a incidentes e cultura de proteção organizacional.",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          },
          {
            title: "Gestão de Crises",
            description: "Planejamento de contingência, simulações e suporte especializado para situações críticas.",
            icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          }
        ].map((service, index) => (
          <div key={index} className="glass-card rounded-2xl p-8 hover:border-cyan-400/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section id="contact" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.08)_0%,transparent_60%)]" />
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Contato</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-6">
        Vamos <span className="text-cyan-400">Conversar</span>
      </h2>
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
        Entre em contato para uma avaliação personalizada das necessidades de segurança da sua organização.
      </p>
      
      <div className="glass-card rounded-3xl p-8 sm:p-12 cyan-glow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <a href="mailto:contato@vanalvesia.adv.br" className="flex flex-col items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium">Email</span>
          </a>
          
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="font-medium">WhatsApp</span>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Header: React.FC<{ showApp: boolean; onToggle: () => void }> = ({ showApp, onToggle }) => (
  <header className="glass sticky top-0 z-50 border-b border-cyan-500/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">VanAlvesIA</h1>
          <p className="text-xs text-cyan-400 font-medium tracking-wider uppercase">Security Framework</p>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#framework" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Framework</a>
        <a href="#leadership" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Liderança</a>
        <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Serviços</a>
        <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Contato</a>
      </nav>
      
      <button 
        onClick={onToggle}
        className="px-4 py-2 glass-card text-cyan-400 font-medium rounded-lg hover:border-cyan-400/50 transition-all text-sm"
      >
        {showApp ? 'Ver Site' : 'Assistente IA'}
      </button>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="relative py-12 border-t border-cyan-500/10">
    <div className="absolute inset-0 bg-slate-950" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      <div className="flex justify-center gap-8 mb-8">
        <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Instagram</a>
        <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">LinkedIn</a>
        <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">WhatsApp</a>
      </div>
      <p className="text-slate-600 text-sm">© 2024 VanAlvesIA. Todos os direitos reservados.</p>
      <p className="text-slate-700 text-xs mt-2">Segurança Integrada para o Mundo Moderno</p>
    </div>
  </footer>
);

// AI Assistant App (Original functionality preserved)
const AIAssistantApp: React.FC = () => {
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState<ProcessingStatus>(ProcessingStatus.IDLE);
  const [result, setResult] = useState<ProcessingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = async () => {
    if (!transcript.trim()) return;
    
    setStatus(ProcessingStatus.LOADING);
    setError(null);
    
    try {
      const data = await geminiService.processTranscript(transcript);
      setResult(data);
      setStatus(ProcessingStatus.SUCCESS);
      setTimeout(() => {
        document.getElementById('results-view')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro inesperado.");
      setStatus(ProcessingStatus.ERROR);
    }
  };

  const handleReset = () => {
    setResult(null);
    setTranscript('');
    setStatus(ProcessingStatus.IDLE);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Input Section */}
      {status !== ProcessingStatus.SUCCESS && (
        <div className="glass-card rounded-3xl overflow-hidden mb-10">
          <div className="p-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-white">Processar Nova Reunião</h2>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase">Inteligência VanAlvesIA</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6">Cole a transcrição ou o resumo da reunião para gerar a documentação estruturada.</p>
            
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Ex: Cliente João da Silva, CPF 123... Mencionou que o banco cobrou taxas indevidas..."
              className="w-full h-80 p-5 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-white placeholder:text-slate-500 font-medium"
            />

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
                <span>Análise detalhada em segundos via IA</span>
              </div>
              
              <button
                onClick={handleProcess}
                disabled={!transcript.trim() || status === ProcessingStatus.LOADING}
                className={`
                  w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                  ${!transcript.trim() || status === ProcessingStatus.LOADING 
                    ? 'bg-slate-700 cursor-not-allowed text-slate-500' 
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 hover:shadow-cyan-500/25'}
                `}
              >
                {status === ProcessingStatus.LOADING ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Analisando Caso...
                  </>
                ) : (
                  <>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Gerar Documentação
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {status === ProcessingStatus.SUCCESS && (
        <button 
          onClick={handleReset}
          className="mb-6 px-4 py-2 glass-card text-cyan-400 rounded-lg hover:border-cyan-400/50 transition-all font-medium text-sm"
        >
          Novo Atendimento
        </button>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 rounded-2xl mb-10 flex items-start gap-3">
          <svg className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <div>
            <p className="font-bold">Houve um problema</p>
            <p className="text-sm opacity-90">{error}</p>
          </div>
        </div>
      )}

      {/* Results Section */}
      {result && (
        <div id="results-view" className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-white">Análise da Reunião</h2>
              <p className="text-slate-400">Documentação jurídica completa estruturada para o Odoo.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase border border-cyan-500/20 shadow-sm">Processado com Sucesso</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-6">
              <SectionCard 
                title="Ficha do Cliente - Odoo" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                content={result.cliente_ficha}
                colorClass="border-cyan-500"
              />

              <SectionCard 
                title="Resumo do Caso" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>}
                content={result.caso_resumo}
                colorClass="border-cyan-500"
              />

              <SectionCard 
                title="Análise Jurídica" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17v-4"/><path d="M15 17V7"/><path d="M12 17v-7"/></svg>}
                content={result.analise_juridica}
                colorClass="border-cyan-500"
              />

              <SectionCard 
                title="Proposta Comercial" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                content={result.proposta}
                colorClass="border-cyan-500"
              />
            </div>

            <div className="space-y-6">
              <SectionCard 
                title="Pontos Críticos" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                content={result.pontos_criticos}
                colorClass="border-red-500"
              />

              <SectionCard 
                title="Plano de Ação" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>}
                content={result.plano_acao}
                colorClass="border-cyan-500"
              />

              <SectionCard 
                title="Documentos" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>}
                content={result.documentos}
                colorClass="border-cyan-500"
              />

              <SectionCard 
                title="Campos Odoo" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/><path d="M12 14h.01"/><path d="M12 10h.01"/><path d="M12 6h.01"/></svg>}
                content={result.odoo_campos}
                colorClass="border-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            <div className="lg:col-span-2 space-y-6">
              <SectionCard 
                title="Devolutiva para o Cliente" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>}
                content={result.devolutiva}
                colorClass="border-cyan-500"
              />

              <SectionCard 
                title="Próximas Perguntas" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>}
                content={result.perguntas}
                colorClass="border-slate-500"
              />
            </div>
            
            <div className="lg:col-span-1 sticky top-24">
              <FollowUpChat initialContext={`Resumo: ${result.caso_resumo}\nAnálise: ${result.analise_juridica}\nCliente: ${result.cliente_ficha}`} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

// Main App with Landing Page and AI Assistant toggle
const App: React.FC = () => {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header showApp={showApp} onToggle={() => setShowApp(!showApp)} />
      
      {showApp ? (
        <AIAssistantApp />
      ) : (
        <>
          <HeroSection />
          <FrameworkSection />
          <LeadershipSection />
          <ServicesSection />
          <ContactSection />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default App;
