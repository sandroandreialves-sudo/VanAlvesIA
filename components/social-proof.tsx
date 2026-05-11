"use client"

import { Users, Calendar, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    icon: Users,
    value: "5.000+",
    label: "famílias protegidas"
  },
  {
    icon: Calendar,
    value: "30 dias",
    label: "para mitigação inicial"
  }
]

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/netdefesa/",
    handle: "@netdefesa"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sandro-andrei-alves-46229275/",
    handle: "Sandro Alves"
  }
]

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/20 mb-6">
            Resultados Comprovados
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Impacto <span className="text-primary neon-text">Mensurável</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Números que demonstram nosso compromisso com a segurança do seu patrimônio.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card-premium rounded-2xl p-8 text-center neon-border-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/30 transition-colors border border-primary/20">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2 neon-text">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
            Siga a NetDefesa
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card-premium rounded-2xl p-6 flex flex-col items-center gap-3 neon-border-hover transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <social.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-center">
                  <div className="text-foreground font-medium text-sm">{social.name}</div>
                  <div className="text-primary text-xs">{social.handle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
