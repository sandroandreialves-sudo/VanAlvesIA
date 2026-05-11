"use client"

import { Shield, Wifi, Scale, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: Shield,
    title: "Segurança Física",
    benefit: "Proteção completa do perímetro e controle de acessos.",
    points: [
      "Análise de vulnerabilidades físicas",
      "Protocolos de emergência atualizados",
      "Treinamento de equipe operacional"
    ]
  },
  {
    icon: Wifi,
    title: "Segurança Digital",
    benefit: "Infraestrutura de rede blindada contra invasões.",
    points: [
      "Auditoria de rede Wi-Fi e sistemas",
      "Proteção contra ataques cibernéticos",
      "Monitoramento contínuo de acessos"
    ]
  },
  {
    icon: Scale,
    title: "Compliance LGPD",
    benefit: "Conformidade legal e proteção contra multas.",
    points: [
      "Mapeamento de dados pessoais",
      "Políticas de privacidade adequadas",
      "Treinamento de colaboradores"
    ]
  }
]

export function Pillars() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/20 mb-4">
            Metodologia
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            3 Pilares da <span className="text-primary neon-text">Blindagem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Uma abordagem integrada que cobre todas as dimensões de segurança do seu condomínio.
          </p>
        </div>

        {/* Pillars cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">
                {pillar.title}
              </h3>

              {/* Benefit */}
              <p className="text-primary text-sm font-medium mb-6">
                {pillar.benefit}
              </p>

              {/* Points */}
              <ul className="space-y-3">
                {pillar.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl animate-pulse-glow transition-all duration-300 hover:scale-105"
          >
            <Shield className="w-5 h-5 mr-2" />
            Solicitar Diagnóstico
          </Button>
        </div>
      </div>
    </section>
  )
}
