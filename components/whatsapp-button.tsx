"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 animate-pulse-glow"
      style={{ 
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)' 
      }}
      aria-label="Falar no WhatsApp - Abre conversa em nova aba"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
