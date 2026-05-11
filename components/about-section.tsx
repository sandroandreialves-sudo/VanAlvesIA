"use client"

import { Award, Shield, Briefcase, Users, Brain, Rocket } from "lucide-react"
import Image from "next/image"

const credentials = [
  {
    icon: Award,
    title: "Ex-Capitão PMESP",
  },
  {
    icon: Briefcase,
    title: "26 anos de liderança operacional",
  },
  {
    icon: Users,
    title: "Diretor de empresa com +1.200 colaboradores",
  },
  {
    icon: Shield,
    title: "Analista de Segurança Cibernética",
  },
  {
    icon: Brain,
    title: "Especialista em gestão de crises",
  },
  {
    icon: Rocket,
    title: "Projeto Empreenda Senac 2026",
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-4 relative scroll-mt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/20 mb-6">
            Especialista
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Experiência real em{" "}
            <span className="text-primary neon-text">operações críticas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sandro's Photo - Cinematic Treatment */}
          <div className="relative order-2 lg:order-1">
            {/* Animated glow behind image */}
            <div className="absolute inset-0 -z-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/10 blur-[80px] animate-glow-breathe" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/15 blur-[60px] animate-glow-pulse" />
            </div>
            
            <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden relative group">
              {/* Outer neon border frame */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-primary/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner container */}
              <div className="absolute inset-[2px] rounded-2xl overflow-hidden glass-card-premium">
                <Image
                  src="/images/sandro-profile.png"
                  alt="Capitão Sandro Alves - Fundador NetDefesa 360"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Cinematic dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Cyan rim light effect - left side */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/20 to-transparent opacity-60" />
                
                {/* Cyan rim light effect - top */}
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary/10 to-transparent" />
                
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,23,42,0.6)_100%)]" />
                
                {/* Scan line overlay for cinematic feel */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)] pointer-events-none" />
                
                {/* Name badge - premium glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card-float rounded-xl p-4 border border-primary/20 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="font-heading text-lg font-bold text-primary">S</span>
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-lg">Sandro Alves</p>
                        <p className="text-primary text-sm font-medium">CEO &amp; Fundador</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute top-8 right-10 w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
            
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-2xl border border-primary/10 -z-10" />
            <div className="absolute -inset-8 rounded-2xl border border-primary/5 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Bio */}
            <div className="glass-card-premium rounded-2xl p-8">
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Sandro Alves é ex-Capitão da PMESP com 26 anos de experiência operacional e já dirigiu uma empresa de portaria com mais de 1.200 funcionários.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje atua como Analista de Segurança Cibernética e especialista em blindagem institucional para condomínios e organizações.
              </p>
            </div>

            {/* Credentials */}
            <div className="glass-card-premium rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground">
                Credenciais
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((credential, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 group p-3 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <credential.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {credential.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
