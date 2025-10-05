import React from 'react'

export default function Contact({ profile }) {
  return (
    <section id="contact" className="section">
      <div className="max-w-3xl mx-auto card p-8 md:p-10 animate-fadeInUp text-center">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="text-slate-300 mt-2">I’m open to DevOps internships, trainee roles, and junior opportunities.</p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a className="btn-primary w-full sm:w-auto text-center" href={`mailto:${profile.email}`}>Email</a>
          <a className="btn-outline w-full sm:w-auto text-center" href={`tel:${profile.phone}`}>Call</a>
          <a className="btn-outline w-full sm:w-auto text-center" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {profile.linkedin && (
            <a className="btn-outline w-full sm:w-auto text-center" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {profile.resume && (
            <a className="btn-outline w-full sm:w-auto text-center" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
          )}
        </div>

        <div className="mt-6 space-y-1 text-sm text-slate-400">
          <p>{profile.location}</p>
          <p>{profile.email} · {profile.phone}</p>
        </div>
      </div>
    </section>
  )
}
