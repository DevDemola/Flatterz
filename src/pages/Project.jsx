import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
const projects = [
  {
    title: "Power and Control",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sevenson",
    tag: "Brand",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
  {
    title: "Sail & Win Extravaganza",
    tag: "Creative",
    image: "image1.avif",
  },
];
const Project = () => {
  return (
    <section className="projects-section">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-header">
                    <div>
                      <h3>{project.title}</h3>
                      <span>{project.tag}</span>
                    </div>
    
                    <div className="arrow">
                      <FiArrowUpRight />
                    </div>
                  </div>
    
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              ))}
            </div>
          </section>
  )
}

export default Project
