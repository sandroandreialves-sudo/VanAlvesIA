"use client"

import { Wifi, Camera, Users, FileWarning, Globe, ClipboardList, ArrowRight } from "lucide-react"

const risks = [
  {
    icon: Wifi,
    title: "Wi-Fi Inseguro",
    description: "Redes abertas ou mal configuradas expõem dados sensíveis de moradores e visitantes.",
    cta: "Saiba mais"
  },
  {
    icon: Camera,
    title: "Vazamento de Imagens",
    description: "Câmeras de segurança sem proteção adequada podem ser acessadas por terceiros.",
    cta: "Ver riscos"
  },
  {
    icon: Users,
    title: "Engenharia Social",
    description: "Funcionários desprevenidos são alvos fáceis para golpes e invasões.",
    cta: "Entenda mais"
  },
  {
    icon: FileWarning,
    title: "LGPD Fora do Controle",
    description: "Multas de até R$ 50 milhões por tratamento inadequado de dados pessoais.",
    cta: "Verificar conformidade"
  },
  {
    icon: Globe,
    title: "Acesso Remoto Exposto",
    description: "Sistemas de automação e portaria virtual sem camadas de proteção.",
    cta: "Avaliar sistema"
  },
  {
    icon: ClipboardList,
    title: "Protocolo Operacional Fraco",
    description: "Procedimentos de segurança desatualizados ou inexistentes aumentam vulnerabilidades.",
    cta: "Revisar protocolos"
  }
]

export function RiskCards() {
  return (
    <section id="riscos" className="py-20 px-4 relative scroll-mt-24">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/20 mb-4">
            Diagnóstico
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Riscos <span className="text-primary neon-text">Invisíveis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Vulnerabilidades que passam despercebidas podem custar caro. Identifique antes que seja tarde.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="group glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] neon-border cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <risk.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {risk.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {risk.description}
              </p>

              {/* CTA Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
              >
                {risk.cta}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
