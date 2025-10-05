import React from 'react'
import { profile } from './data/profile'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Education education={profile.education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}
