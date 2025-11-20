// import React from 'react'
// import about from '../data/about.json'
// import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'


// export default function Sidebar() {
// return (
// <aside className="p-6 bg-gradient-to-b from-white/60 to-white/30">
// <div className="flex flex-col gap-4 items-start">
// <div className="rounded-full bg-slate-100 w-20 h-20 flex items-center justify-center text-2xl font-bold">MS</div>
// <h2 className="text-xl font-semibold">{about.name}</h2>
// <p className="text-sm text-slate-600">{about.tagline}</p>
// <p className="text-sm text-slate-700">{about.bio}</p>


// <div className="mt-4 space-y-2">
// <a className="flex items-center gap-2 text-sm" href={`mailto:${about.contact.email}`}><FaEnvelope/> {about.contact.email}</a>
// <a className="flex items-center gap-2 text-sm" href={about.contact.linkedin} target="_blank" rel="noreferrer"><FaLinkedin/> LinkedIn</a>
// <a className="flex items-center gap-2 text-sm" href={about.contact.github} target="_blank" rel="noreferrer"><FaGithub/> GitHub</a>
// </div>


// <div className="mt-6">
// <h3 className="text-sm font-semibold">Quick commands</h3>
// <ul className="text-sm text-slate-600 mt-2 space-y-1">
// <li>Type <code>projects</code> — view projects</li>
// <li>Type <code>experience</code> — view work history</li>
// <li>Type <code>skills</code> — view skills list</li>
// <li>Type <code>contact</code> — contact details</li>
// </ul>
// </div>
// </div>
// </aside>
// )
// }
import React from 'react'
import about from '../data/about.json'
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="p-6 bg-gradient-to-b from-white/60 to-white/30">
      <div className="flex flex-col gap-4 items-start">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src="src\photo\photo.jpg"
            alt="Shakeel"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-semibold">{about.name}</h2>
        <p className="text-sm text-slate-600">{about.tagline}</p>
        <p className="text-sm text-slate-700">{about.bio}</p>

        <div className="mt-4 space-y-2">
          <a
            className="flex items-center gap-2 text-sm"
            href={`mailto:${about.contact.email}`}
          >
            <FaEnvelope /> {about.contact.email}
          </a>

          <a
            className="flex items-center gap-2 text-sm"
            href={about.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          {/* <a
            className="flex items-center gap-2 text-sm"
            href={about.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a> */}

          {/* 🧩 New Resume Link */}
          <a
            className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
            href={about.contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf /> View Resume
          </a>
        </div>

        {/* <div className="mt-6">
          <h3 className="text-sm font-semibold">Quick commands</h3>
          <ul className="text-sm text-slate-600 mt-2 space-y-1">
            <li>
              Type <code>projects</code> — view projects
            </li>
            <li>
              Type <code>experience</code> — view work history
            </li>
            <li>
              Type <code>skills</code> — view skills list
            </li>
            <li>
              Type <code>contact</code> — contact details
            </li>
          </ul>
        </div> */}
      </div>
    </aside>
  )
}
