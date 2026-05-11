"use client"

import { useState, useEffect } from "react"
import { Logo } from "./logo"
import { MessageCircle, Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Riscos", href: "#riscos" },
  { label: "Framework", href: "#framework" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diagnóstico", href: "#diagnostico" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 glass-premium border-b border-primary/10" 
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo 
          variant={isScrolled ? "compact" : "default"} 
          size="sm" 
          withGlow={true}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-sm transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-premium border-b border-primary/10 py-6 px-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5515976035347?text=Olá%20Capitão%20Sandro!%20Gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20para%20meu%20condomínio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-sm transition-all mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
