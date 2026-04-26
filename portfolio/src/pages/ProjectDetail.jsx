import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/">Back to Work</Link>
      </div>
    )
  }

  return (
    <motion.div 
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-back">
        <Link to="/" className="back-link">
          <span className="arrow">←</span> Back to Work
        </Link>
      </div>

      <motion.header 
        className="project-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="project-category-tag">{project.category}</span>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.longDescription}</p>
        
        <div className="project-meta-row">
          <div className="meta-item">
            <span className="meta-label">Year</span>
            <span className="meta-value">{project.year}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Category</span>
            <span className="meta-value">{project.category}</span>
          </div>
        </div>
      </motion.header>

      <motion.div 
        className="project-hero-image"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-image-placeholder">
          <span>{project.title} - Hero Image</span>
        </div>
      </motion.div>

      <section className="project-process">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Design Process
        </motion.h2>

        <div className="process-steps">
          {project.process.map((step, index) => (
            <motion.div
              key={step.step}
              className="process-step"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-content">
                <h3>{step.step}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="project-gallery">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Project Gallery
        </motion.h2>

        <div className="gallery-grid">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="gallery-image-placeholder">
                <span>Image {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="project-tags">
        <div className="tags-container">
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      <nav className="project-navigation">
        {(() => {
          const currentIndex = projects.findIndex(p => p.id === id)
          const prevProject = projects[currentIndex - 1]
          const nextProject = projects[currentIndex + 1]

          return (
            <>
              {prevProject && (
                <Link to={`/project/${prevProject.id}`} className="project-nav-link prev">
                  <span className="nav-arrow">←</span>
                  <div className="nav-info">
                    <span className="nav-label">Previous</span>
                    <span className="nav-title">{prevProject.title}</span>
                  </div>
                </Link>
              )}
              
              {nextProject && (
                <Link to={`/project/${nextProject.id}`} className="project-nav-link next">
                  <div className="nav-info">
                    <span className="nav-label">Next</span>
                    <span className="nav-title">{nextProject.title}</span>
                  </div>
                  <span className="nav-arrow">→</span>
                </Link>
              )}
            </>
          )
        })()}
      </nav>
    </motion.div>
  )
}

export default ProjectDetail
