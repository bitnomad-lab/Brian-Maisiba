'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const [text, setText] = useState('')
  const skills = ['Programmer', 'Graphic Designer', 'IT Support Specialist']
  const [skillIndex, setSkillIndex] = useState(0)

  useEffect(() => {
    let currentText = ''
    let currentIndex = 0
    const currentSkill = skills[skillIndex]

    const interval = setInterval(() => {
      if (currentIndex < currentSkill.length) {
        currentText += currentSkill[currentIndex]
        setText(currentText)
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [skillIndex])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-cyber-green text-sm mb-4">$ whoami</div>
          <h1 className="text-6xl font-bold mb-4">
            Brian <span className="text-cyber-blue">Maisiba</span>
          </h1>
          <div className="text-2xl mb-6 h-8">
            <span className="text-cyber-green">&gt; </span>
            {text}
            <span className="animate-pulse">_</span>
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A versatile professional blending technical problem-solving with creative design.
            Focused on innovative digital solutions, visual content, and system efficiency.
          </p>
          <div className="flex gap-4 text-sm">
            <div className="glass px-4 py-2 rounded-lg">
              📍 Nairobi, Kenya
            </div>
            <div className="glass px-4 py-2 rounded-lg">
              🎓 Technical University of Mombasa
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-green/20 blur-3xl rounded-full animate-pulse-glow" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyber-green glow-green">
              <Image
                src="/Brian.jpeg"
                alt="Brian Maisiba"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
