import React from 'react'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  return (
    <footer className="section pt-10">
      <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-primary" href={`mailto:${profile.email}`}>Email</a>
          <a className="hover:text-primary" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {profile.linkedin && (
            <a className="hover:text-primary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
        </div>
      </div>
    </footer>
  )
}
