import React from 'react'

export default function Hero({ profile }) {
  return (
    <section id="about" className="section grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 animate-fadeInUp">
        <p className="text-primary font-semibold tracking-wider">{profile.title}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          {profile.name}
        </h1>
        <p className="text-slate-300">{profile.summary}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={`mailto:${profile.email}`} className="badge hover:border-primary hover:text-primary transition">{profile.email}</a>
          <span className="badge">{profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="badge hover:border-primary hover:text-primary transition">GitHub</a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="badge hover:border-primary hover:text-primary transition">LinkedIn</a>
          )}
          {profile.resume && (
            <a href={profile.resume} target="_blank" rel="noreferrer" className="badge hover:border-primary hover:text-primary transition">Resume</a>
          )}
        </div>
        <div className="pt-4 flex gap-3">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </div>
      </div>
      <div className="md:justify-self-end">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 shadow-glow flex items-center justify-center animate-float overflow-hidden">
          {profile.photo ? (
            <img src={profile.photo} alt={`${profile.name} profile photo`} className="w-full h-full object-cover rounded-2xl" />
          ) : (
            <span className="text-5xl">🛠️</span>
          )}
        </div>
      </div>
    </section>
  )
}
