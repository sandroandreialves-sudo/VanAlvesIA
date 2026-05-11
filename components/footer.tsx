"use client"

import { MessageCircle, FileText, Lock } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"

const links = [
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    href: "https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio.",
    external: true,
    ariaLabel: "Falar no WhatsApp - Abre conversa em nova aba"
  },
  { 
    icon: FileText, 
    label: "LGPD", 
    href: "#lgpd",
    external: false,
    ariaLabel: "Informações sobre LGPD"
  },
  { 
    icon: Lock, 
    label: "Política de Privacidade", 
    href: "#privacidade",
    external: false,
    ariaLabel: "Política de Privacidade"
  },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Logo variant="compact" size="sm" withGlow={true} />

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.ariaLabel}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:scale-105"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NetDefesa 360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
