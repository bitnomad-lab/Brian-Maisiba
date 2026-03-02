'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Server } from 'lucide-react'

const skills = [
  {
    title: 'Engineering',
    icon: Code2,
    color: 'cyber-blue',
    items: ['Python', 'SQL', 'Java', 'C++', 'Website Design & Development'],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'cyber-green',
    items: ['Adobe Suite', 'UI/UX', 'Brand Identity', 'Visual Content'],
  },
  {
    title: 'Systems & Office',
    icon: Server,
    color: 'cyber-blue',
    items: ['IT Support', 'Networking', 'MS Word', 'MS Excel', 'MS PowerPoint', 'System Efficiency'],
  },
]

export function SkillMatrix() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyber-green">{'<'}</span>
            Skill Matrix
            <span className="text-cyber-green">{' />'}</span>
          </h2>
          <p className="text-gray-400">Core competencies across multiple domains</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className={`w-12 h-12 rounded-lg bg-${skill.color}/10 flex items-center justify-center mb-4`}>
                <skill.icon className={`text-${skill.color}`} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${skill.color}`} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
