import React from 'react'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 animate-fadeInUp">
          {skills.categories.map((c) => (
            <div key={c.name} className="card p-4">
              <h3 className="font-semibold text-slate-100">{c.name}</h3>
              <p className="text-slate-300 text-sm mt-1">{c.details}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 animate-fadeInUp">
          <div>
            <h3 className="font-semibold mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {skills.keywords.map((k) => (
                <span key={k} className="badge">{k}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              {skills.soft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <div className="flex gap-2 flex-wrap">
              {skills.languages.map((l) => (
                <span key={l} className="badge">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
