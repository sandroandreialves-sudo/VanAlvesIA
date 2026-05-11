"use client"

import { Shield, MessageCircle, Lock, Wifi, Eye } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32 lg:py-40">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.08)_0%,transparent_50%)]" />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] animate-glow-pulse-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px] animate-glow-breathe" />
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        {/* Perspective grid floor */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] perspective-grid opacity-20" />
        
        {/* Radar pulse rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 animate-radar-pulse" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 animate-radar-pulse-2" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 animate-radar-pulse-3" />
        </div>
        
        {/* Floating security icons */}
        <div className="absolute top-[15%] right-[15%] glass-card-float p-4 rounded-2xl animate-float-slow">
          <Shield className="w-8 h-8 text-primary/60" />
        </div>
        <div className="absolute top-[25%] left-[10%] glass-card-float p-3 rounded-xl animate-float-slow-delayed">
          <Lock className="w-6 h-6 text-primary/50" />
        </div>
        <div className="absolute bottom-[30%] right-[8%] glass-card-float p-3 rounded-xl animate-float-slow-delayed-2">
          <Wifi className="w-6 h-6 text-primary/40" />
        </div>
        <div className="absolute bottom-[20%] left-[15%] glass-card-float p-4 rounded-2xl animate-float-slow">
          <Eye className="w-7 h-7 text-primary/50" />
        </div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line" />
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Premium Logo Badge */}
        <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass-premium neon-border-strong mb-12 animate-fade-in-up">
          <div className="relative w-[140px] h-[45px] drop-shadow-[0_0_15px_rgba(0,217,255,0.4)]">
            <Image
              src="/images/netdefesa-logo.jpg"
              alt="NetDefesa 360"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="h-8 w-px bg-primary/30" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Proteção Ativa</span>
          </div>
        </div>

        {/* Main Headline with better hierarchy */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
          <span className="block text-foreground">Blindagem Inteligente</span>
          <span className="block mt-2 md:mt-4">
            <span className="text-foreground">para </span>
            <span className="relative inline-block">
              <span className="text-primary neon-text-strong">Condomínios</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-14 leading-relaxed font-light tracking-wide animate-fade-in-up animation-delay-200 text-pretty">
          Reduza riscos operacionais, digitais e jurídicos com um{" "}
          <span className="text-foreground font-normal">diagnóstico integrado</span> de segurança.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 animate-fade-in-up animation-delay-300">
          <a 
            href="https://forms.gle/bHVdnna4aNYb7sLm6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar Diagnóstico Gratuito - Abre formulário em nova aba"
            className="group relative bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-bold rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden inline-flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_100%] animate-shimmer" />
            <div className="absolute inset-0 neon-glow-button" />
            <span className="relative flex items-center gap-3">
              <Shield className="w-5 h-5" />
              Solicitar Diagnóstico Gratuito
            </span>
          </a>
          <a 
            href="https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp - Abre conversa em nova aba"
            className="group relative border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary px-10 py-7 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105 glass-premium inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Stats with premium glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
          <div className="group glass-card-premium rounded-3xl p-8 neon-border-hover transition-all duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-heading neon-text mb-2">5.000+</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Famílias Protegidas</div>
            <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="group glass-card-premium rounded-3xl p-8 neon-border-hover transition-all duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-heading neon-text mb-2">30</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Dias para Mitigação</div>
            <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="group glass-card-premium rounded-3xl p-8 neon-border-hover transition-all duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-heading neon-text mb-2">26+</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Anos de Experiência</div>
            <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-500">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Explorar</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
