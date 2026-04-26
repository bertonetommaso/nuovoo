import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { projects } from '../data/projects'

const Home = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="home" ref={containerRef}>
      <section className="hero">
        <motion.div 
          className="hero-content"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Product Designer<br />
            <span className="highlight">focused on affordance</span><br />
            & balanced aesthetics
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Creating intuitive digital experiences where every interaction feels natural and purposeful.
          </motion.p>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="scroll-arrow"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/project/${project.id}`} className="project-link">
                <div className="project-image-container">
                  <div className="project-image-placeholder">
                    <span>{project.category}</span>
                  </div>
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="view-project">View Project</span>
                  </motion.div>
                </div>
                
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2>About</h2>
          <div className="about-text">
            <p>
              I'm a product designer with a passion for creating interfaces that feel effortless. 
              My work focuses on <strong>affordance</strong>—making it immediately clear how things work—
              while maintaining <strong>balanced aesthetics</strong> that delight without distracting.
            </p>
            <p>
              Every interaction should feel intuitive. Every visual element should serve a purpose. 
              I believe the best design is invisible—it simply works, allowing users to focus on 
              what matters most.
            </p>
          </div>
          
          <div className="skills-grid">
            {['User Research', 'Interaction Design', 'Visual Design', 'Prototyping', 'Design Systems', 'Usability Testing'].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="contact-section">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2>Let's work together</h2>
          <p className="contact-intro">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
          
          <motion.a
            href="mailto:hello@designer.com"
            className="contact-email"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            hello@designer.com
          </motion.a>

          <div className="social-links">
            {['LinkedIn', 'Dribbble', 'Behance', 'Twitter'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="social-link"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Product Designer. Crafted with intention.</p>
      </footer>
    </div>
  )
}

export default Home
