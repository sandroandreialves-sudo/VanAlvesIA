import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NetDefesa 360 | Blindagem Inteligente para Condomínios',
  description: 'Reduza riscos operacionais, digitais e jurídicos com um diagnóstico integrado de segurança. Proteção completa para condomínios.',
  keywords: ['cybersecurity', 'segurança', 'condomínios', 'LGPD', 'gestão de riscos'],
  icons: {
    icon: '/images/netdefesa-logo.jpg',
    apple: '/images/netdefesa-logo.jpg',
  },
  openGraph: {
    title: 'NetDefesa 360 | Blindagem Inteligente para Condomínios',
    description: 'Reduza riscos operacionais, digitais e jurídicos com um diagnóstico integrado de segurança.',
    images: ['/images/netdefesa-logo.jpg'],
  },
}

export const viewport = {
  themeColor: '#0F172A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
