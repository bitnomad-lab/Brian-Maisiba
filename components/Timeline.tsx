'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'

const timeline = [
  {
    year: '2023 - Present',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Technical University of Mombasa',
    type: 'education',
    description: 'Pursuing degree in Computer Science specializing in software development, database systems, and IT infrastructure.',
  },
  {
    year: '2022 - Present',
    title: 'IT Support Specialist',
    organization: 'Freelance',
    type: 'work',
    description: 'Providing technical support, network troubleshooting, and system optimization services.',
  },
  {
    year: '2021 - Present',
    title: 'Graphic Designer',
    organization: 'Freelance',
    type: 'work',
    description: 'Creating brand identities, visual content, and UI/UX designs for various clients.',
  },
]

export function Timeline() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyber-green">{'['}</span>
            Journey
            <span className="text-cyber-green">{']'}</span>
          </h2>
          <p className="text-gray-400">Education and professional experience</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-blue" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <div
                className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  item.type === 'education' ? 'bg-cyber-blue/20 border-2 border-cyber-blue' : 'bg-cyber-green/20 border-2 border-cyber-green'
                }`}
              >
                {item.type === 'education' ? (
                  <GraduationCap size={16} className="text-cyber-blue" />
                ) : (
                  <Briefcase size={16} className="text-cyber-green" />
                )}
              </div>

              <div className="glass glass-hover rounded-xl p-6">
                <div className="text-sm text-cyber-green mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <div className="text-cyber-blue mb-3">{item.organization}</div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
