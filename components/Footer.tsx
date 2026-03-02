'use client'

import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative z-10 glass border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <span className="text-sm text-gray-400">Status: Operational</span>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:famousyobby@gmail.com"
              className="text-gray-400 hover:text-cyber-blue transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              <span className="text-sm">famousyobby@gmail.com</span>
            </a>
            <a
              href="tel:+254758597388"
              className="text-gray-400 hover:text-cyber-green transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              <span className="text-sm">+254 758 597388</span>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            © 2024 Brian Maisiba
          </div>
        </div>
      </div>
    </footer>
  )
}
