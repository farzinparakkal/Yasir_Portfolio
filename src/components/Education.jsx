import React from 'react'

export default function Education({ education }) {
  return (
    <section id="education" className="section">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e) => (
          <div key={e.program} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 animate-fadeInUp">
            <h3 className="font-semibold text-slate-100">{e.program}</h3>
            <p className="text-slate-300 text-sm mt-1">{e.org}</p>
            <p className="text-slate-400 text-xs mt-2">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
