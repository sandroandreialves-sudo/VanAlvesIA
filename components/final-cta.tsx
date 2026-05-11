"use client"

import { Shield, MessageCircle, AlertTriangle } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,217,255,0.2)_0%,transparent_70%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-primary/20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-primary/10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
          <AlertTriangle className="w-10 h-10 text-primary" />
        </div>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Descubra vulnerabilidades{" "}
          <span className="text-primary neon-text">antes que elas virem crises.</span>
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pretty">
          Não espere o pior acontecer. Faça um diagnóstico gratuito e proteja o que mais importa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://forms.gle/bHVdnna4aNYb7sLm6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar Diagnóstico Gratuito - Abre formulário em nova aba"
            className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-semibold rounded-xl animate-pulse-glow transition-all duration-300 hover:scale-105"
          >
            <Shield className="w-5 h-5 mr-2" />
            Diagnóstico Gratuito
          </a>
          <a 
            href="https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp - Abre conversa em nova aba"
            className="inline-flex items-center border border-primary/50 text-primary hover:bg-primary/10 px-10 py-7 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </div>

        {/* Trust badge */}
        <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30">
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            Diagnóstico 100% gratuito e sem compromisso
          </span>
        </div>
      </div>
    </section>
  )
}
