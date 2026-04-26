import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: 'Work' },
    { path: '/#about', label: 'About' },
    { path: '/#contact', label: 'Contact' }
  ]

  return (
    <>
      <motion.nav 
        className={`navigation ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-text">Designer</span>
          </Link>
          
          <div className="nav-links desktop">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 45, y: 8 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="menu-line line-1"
            />
            <motion.div
              animate={mobileMenuOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
              className="menu-line line-2"
            />
            <motion.div
              animate={mobileMenuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: -45, y: -8 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="menu-line line-3"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <Link 
                      to={item.path}
                      className="mobile-nav-link"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
