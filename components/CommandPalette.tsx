'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { Home, Code, Briefcase, Mail, Download, Phone } from 'lucide-react'

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const commands = [
    { icon: Home, label: 'About', action: () => scrollTo('about') },
    { icon: Code, label: 'Skills', action: () => scrollTo('skills') },
    { icon: Briefcase, label: 'Projects', action: () => scrollTo('projects') },
    { icon: Mail, label: 'Contact', action: () => scrollTo('contact') },
    { icon: Mail, label: 'Email: famousyobby@gmail.com', action: () => window.location.href = 'mailto:famousyobby@gmail.com' },
    { icon: Phone, label: 'Phone: +254 758 597388', action: () => window.location.href = 'tel:+254758597388' },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <Command className="relative glass rounded-2xl w-full max-w-2xl mx-4 overflow-hidden border border-cyber-blue/30">
        <div className="flex items-center border-b border-white/10 px-4">
          <span className="text-cyber-green mr-2">$</span>
          <Command.Input
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent py-4 outline-none text-white placeholder:text-gray-500"
          />
          <kbd className="text-xs text-gray-500">ESC</kbd>
        </div>
        <Command.List className="max-h-96 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-gray-400">
            No results found.
          </Command.Empty>
          {commands.map((cmd) => (
            <Command.Item
              key={cmd.label}
              onSelect={cmd.action}
              className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
            >
              <cmd.icon size={18} className="text-cyber-blue" />
              <span>{cmd.label}</span>
            </Command.Item>
          ))}
        </Command.List>
        <div className="border-t border-white/10 px-4 py-2 text-xs text-gray-500 flex items-center justify-between">
          <span>Navigate with arrow keys</span>
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/5 rounded">⌘</kbd>
            <kbd className="px-2 py-1 bg-white/5 rounded">K</kbd>
            to toggle
          </span>
        </div>
      </Command>
    </div>
  )
}
