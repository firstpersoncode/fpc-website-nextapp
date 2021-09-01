import { useState } from 'react'

import ComponentVideoBG from "./VideoBG"
import ComponentDrawer from './Drawer';

export default function ComponentProject({ data, projects, isActive }) {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  function handleToggleProject(i) {
    return () => {
      const project = projects[i]
      if (project) {
        setSelectedProject(project)
      }

      setOpen(v => !v)
    }
  }

  function handleCloseProject() {
    setOpen(false)
  }

  const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_URL
  const { video } = data

  return (
    <>
      <ComponentVideoBG video={video} />

      <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white font-medium mb-4">My works</h1>
        {projects && projects.length ? (
          <ul className="text-blue-300 list-disc">
            {projects.map((project, i) => (
              <li onClick={handleToggleProject(i)} key={i} className="hover:text-white cursor-pointer">{project.name}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {isActive ? <ComponentDrawer onClose={handleCloseProject} open={open}>
        {selectedProject ? (
          <>
            {selectedProject.name ? <h3 className="font-medium text-3xl">{selectedProject.name}</h3> : null}
            {selectedProject.company ? <div className="flex items-center">
              {selectedProject.company.image ? <img src={STRAPI_HOST + selectedProject.company.image.url} width={30} className="mr-2" /> : null}
              {selectedProject.company.url && selectedProject.name ? <a href={selectedProject.company.url} target="_blank" rel="noreferrer" className="font-medium text-blue-700">{selectedProject.company.name}</a> : null}
            </div> : null}
            {selectedProject.technologies && selectedProject.technologies.length ? (
              <ul className="flex items-center mb-4">
                <li className="text-sm font-medium mr-4">Stacks:</li>
              {selectedProject.technologies.map((tech, i) => (
                <li key={i} className="flex items-center mr-4">
                  {tech.image && tech.image.url ? <img src={STRAPI_HOST + tech.image.url} width={25} className="mr-2" /> : null}
                  {tech.name ? <span className="text-xs">{tech.name}</span> : null}
                </li>
              ))}
              </ul>
            ) : null}
            {selectedProject.body ? <p className="mb-4">{selectedProject.body}</p> : null}
            {selectedProject.url ? <a href={selectedProject.url} target="_blank" rel="noreferrer" className="text-blue-700">See project</a> : null}
          </>
        ) : null}
      </ComponentDrawer> : null}
    </>
  )
}
