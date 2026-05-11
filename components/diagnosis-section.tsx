"use client"

import { MessageCircle, FileSearch, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DiagnosisSection() {
  return (
    <section id="diagnostico" className="py-24 md:py-32 px-4 relative overflow-hidden scroll-mt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main card */}
        <div className="glass-card-premium rounded-3xl p-8 md:p-12 neon-border-strong relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6 border border-primary/30">
              <FileSearch className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-balance">
              Solicitar{" "}
              <span className="text-primary neon-text">Diagnóstico</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
              Receba um diagnóstico inicial de vulnerabilidades sem compromisso.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="glass rounded-2xl p-6 md:p-8 mb-8 border border-primary/10">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <FileSearch className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium mb-2">
                Formulário de Diagnóstico
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Preencha o formulário para solicitar seu diagnóstico gratuito.
              </p>
              <Link
                href="https://forms.gle/bHVdnna4aNYb7sLm6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar formulário de diagnóstico - Abre em nova aba"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl transition-all hover:scale-105"
              >
                Acessar Formulário
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Ou entre em contato direto:
            </p>
            <Link
              href="https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar via WhatsApp - Abre conversa em nova aba"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Solicitar via WhatsApp</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              Resposta em até 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
