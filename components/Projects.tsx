'use client'

import { motion } from 'framer-motion'
import { ChevronDown, AlertTriangle, TrendingUp, Database, Palette, Layout, Image as ImageIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

const alerts = [
  { type: 'PREMIUM WHALE ALERT', token: 'SOL', amount: '1,250,000', action: 'BUY', time: '2m ago' },
  { type: 'LARGE TRANSFER', token: 'USDC', amount: '500,000', action: 'TRANSFER', time: '5m ago' },
  { type: 'WHALE MOVEMENT', token: 'SOL', amount: '890,000', action: 'SELL', time: '8m ago' },
  { type: 'PREMIUM WHALE ALERT', token: 'BONK', amount: '2,500,000', action: 'BUY', time: '12m ago' },
]

const architecture = [
  '📁 SOL_SENTINEL_01/',
  '  ├── 📄 main.py - Core monitoring engine',
  '  ├── 📄 config.py - Configuration & API keys',
  '  ├── 📄 telegram_bot.py - Alert dispatcher',
  '  ├── 📄 whale_detector.py - Transaction analyzer',
  '  └── 📄 requirements.txt - Dependencies',
]

const designProjects = [
  {
    title: 'Brand Identity Suite',
    description: 'Complete brand package with logo, color palette, and style guide',
    icon: Palette,
    tags: ['Branding', 'Logo Design', 'Style Guide'],
  },
  {
    title: 'UI/UX Dashboard',
    description: 'Modern analytics dashboard with intuitive data visualization',
    icon: Layout,
    tags: ['UI/UX', 'Figma', 'Prototyping'],
  },
  {
    title: 'Social Media Graphics',
    description: 'Engaging visual content for digital marketing campaigns',
    icon: ImageIcon,
    tags: ['Adobe Suite', 'Social Media', 'Graphics'],
  },
]

export function Projects() {
  const [showArchitecture, setShowArchitecture] = useState(false)
  const [currentAlert, setCurrentAlert] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alerts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyber-blue">{'{'}</span>
            Featured Projects
            <span className="text-cyber-blue">{'}'}</span>
          </h2>
          <p className="text-gray-400">Real-world applications and systems</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border-cyber-blue/30 mb-6"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">SOL_SENTINEL_01</h3>
            <p className="text-gray-400">Real-time Solana blockchain whale monitoring system</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm text-cyber-green mb-3 flex items-center gap-2">
                <TrendingUp size={16} />
                Live Data Simulation
              </h4>
              <div className="glass rounded-lg p-4 h-64 overflow-hidden">
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: index === currentAlert ? 1 : 0.3,
                        x: 0,
                        scale: index === currentAlert ? 1.02 : 1,
                      }}
                      className={`p-3 rounded-lg border ${
                        alert.action === 'BUY'
                          ? 'border-cyber-green/30 bg-cyber-green/5'
                          : alert.action === 'SELL'
                          ? 'border-red-500/30 bg-red-500/5'
                          : 'border-cyber-blue/30 bg-cyber-blue/5'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle size={14} className="text-cyber-green" />
                        <span className="text-xs font-bold">{alert.type}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-cyber-blue">{alert.token}</span> • ${alert.amount} •{' '}
                        <span className={alert.action === 'BUY' ? 'text-cyber-green' : 'text-red-400'}>
                          {alert.action}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowArchitecture(!showArchitecture)}
                className="text-sm text-cyber-blue mb-3 flex items-center gap-2 hover:text-cyber-green transition-colors"
              >
                <Database size={16} />
                Technical Architecture
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showArchitecture ? 'rotate-180' : ''}`}
                />
              </button>
              {showArchitecture && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="glass rounded-lg p-4 font-mono text-xs"
                >
                  {architecture.map((line, index) => (
                    <div key={index} className="text-gray-300 py-1">
                      {line}
                    </div>
                  ))}
                </motion.div>
              )}
              <div className="mt-4 space-y-2">
                <div className="text-sm text-gray-400">
                  <span className="text-cyber-green">Tech Stack:</span> Python, Solana Web3.js, Telegram Bot API
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-cyber-green">Features:</span> Real-time monitoring, Whale detection, Instant alerts
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Blockchain', 'Web3', 'Telegram API', 'Real-time Data'].map((tag) => (
              <span key={tag} className="glass px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 mb-6"
        >
          <h3 className="text-xl font-bold mb-4">Database Dashboard</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Queries Optimized', value: '1,247', color: 'cyber-blue' },
              { label: 'Data Processed', value: '2.4TB', color: 'cyber-green' },
              { label: 'Uptime', value: '99.9%', color: 'cyber-blue' },
            ].map((stat) => (
              <div key={stat.label} className="glass glass-hover rounded-lg p-4 text-center">
                <div className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-cyber-green/10 flex items-center justify-center mb-4">
                <project.icon className="text-cyber-green" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs glass px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
