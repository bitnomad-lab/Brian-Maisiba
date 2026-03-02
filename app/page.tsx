'use client'

import { Hero } from '@/components/Hero'
import { SkillMatrix } from '@/components/SkillMatrix'
import { Projects } from '@/components/Projects'
import { Timeline } from '@/components/Timeline'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { GridBackground } from '@/components/GridBackground'
import { CommandPalette } from '@/components/CommandPalette'

export default function Home() {
  return (
    <>
      <GridBackground />
      <CommandPalette />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <SkillMatrix />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}
