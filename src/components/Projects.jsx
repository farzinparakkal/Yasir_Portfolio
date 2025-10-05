import React from 'react'

function ProjectCard({ item, i }) {
  return (
    <div className="card p-5 hover:border-primary/60 transition animate-fadeInUp" style={{animationDelay: `${i * 80}ms`}}>
      <h3 className="font-semibold text-slate-100">{item.title}</h3>
      <p className="text-sm text-slate-300 mt-2">{item.description}</p>
    </div>
  )
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} item={p} i={idx} />)
        )}
      </div>
    </section>
  )
}
