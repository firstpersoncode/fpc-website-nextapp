import { useState } from 'react'

import ComponentDrawer from './Drawer';

export default function Project({ video, title, projects, isActive }) {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(-1)

  function handleToggleProject(i) {
    return () => {
      setSelectedProject(i)
      setOpen(v => !v)
    }
  }

  function handleCloseProject() {
    setOpen(false)
  }

  return (
    <>
      <div className="h-full h-screen bg-black">
        <div className="absolute w-full h-full inset-0 overflow-hidden">
          <video autoPlay muted loop className="min-h-full min-w-full absolute" style={{
            top: "50%",
          	left: "50%",
          	transform: "translate(-50%, -50%)",
          	objectFit: "cover",
          }} src={process.env.NEXT_PUBLIC_STRAPI_URL + video.url} type="video/mp4" />
        </div>
        <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center" style={{
          backgroundColor: "rgba(0,0,0,0.75)"
        }}>
          <h1 className="text-3xl text-white font-medium mb-4">{title}</h1>
          {projects && projects.length ? (
            <ul className="text-blue-300 list-disc">
              {projects.map((project, i) => (
                <li onClick={handleToggleProject(i)} key={i} className="hover:text-white cursor-pointer"><a>{project.name}</a></li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <ComponentDrawer onClose={handleCloseProject} open={open && isActive}>
        {selectedProject !== -1 ? (
          <>
            <h3 className="font-medium text-3xl">{projects[selectedProject].name}</h3>
            <div className="flex items-center">
              <img src={process.env.NEXT_PUBLIC_STRAPI_URL + projects[selectedProject].company.image.url} alt={projects[selectedProject].company.name} width={30} className="mr-2" />
              <a href={projects[selectedProject].company.url} target="_blank" rel="noreferrer" className="font-medium text-blue-700">{projects[selectedProject].company.name}</a>
            </div>
            {projects[selectedProject].technologies.length ? (
              <ul className="flex items-center mb-4">
                <li className="text-sm font-medium mr-4">Stacks:</li>
              {projects[selectedProject].technologies.map((tech, i) => (
                <li key={i} className="flex items-center mr-4"><img alt={tech.name} src={process.env.NEXT_PUBLIC_STRAPI_URL + tech.image.url} width={25} className="mr-2" /><span className="text-xs">{tech.name}</span></li>
              ))}
              </ul>
            ) : null}
            <p className="mb-4">{projects[selectedProject].body}</p>
            <a href={projects[selectedProject].url} target="_blank" rel="noreferrer" className="text-blue-700">See project</a>
          </>
        ) : null}
      </ComponentDrawer>
    </>
  )
}
