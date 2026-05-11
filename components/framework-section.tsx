"use client"

import { Search, FileText, Presentation, GraduationCap, ShieldCheck } from "lucide-react"

const stages = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Gratuito",
    description: "Identificação inicial de vulnerabilidades"
  },
  {
    number: "02",
    icon: FileText,
    title: "Diagnóstico Robusto",
    description: "Relatório técnico aprofundado com matriz de riscos"
  },
  {
    number: "03",
    icon: Presentation,
    title: "Palestra Mapa de Risco",
    description: "Conscientização estratégica para síndicos e equipes"
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Treinamento e Mitigação",
    description: "Capacitação operacional e redução de vulnerabilidades"
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Monitoramento e Gestão de Crises",
    description: "Acompanhamento técnico e resposta a incidentes"
  }
]

export function FrameworkSection() {
  return (
    <section id="framework" className="py-24 md:py-32 px-4 relative overflow-hidden scroll-mt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/20 mb-6">
            Metodologia
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Framework de Blindagem{" "}
            <span className="text-primary neon-text">NetDefesa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Um processo estruturado em 5 etapas para garantir a proteção completa do seu patrimônio.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 -translate-y-1/2 blur-sm" />
          
          <div className="grid grid-cols-5 gap-4">
            {stages.map((stage, index) => (
              <div key={index} className="relative group">
                {/* Vertical connector */}
                <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-gradient-to-b from-transparent to-primary/50 -translate-x-1/2 -translate-y-8" />
                
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                
                {/* Card */}
                <div className="glass-card-premium rounded-2xl p-6 mt-8 text-center neon-border-hover transition-all group-hover:translate-y-1">
                  {/* Number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold">
                    {stage.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <stage.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 leading-tight">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical connection line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" />
          
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary font-bold text-sm">{stage.number}</span>
                  </div>
                </div>
                
                {/* Card */}
                <div className="flex-1 glass-card-premium rounded-2xl p-6 neon-border-hover transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <stage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
