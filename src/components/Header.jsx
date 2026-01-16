import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBolt, FaWhatsapp, FaPhone, FaBars, FaTimes } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista urgente!"
const PHONE_NUMBER = "(27) 99941-0684"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    // Small delay to let menu close animation start
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const navItems = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Áreas', href: '#areas' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Trabalhos', href: '#trabalhos' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 215, 0, 0.2)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <motion.a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
          }}>
            <FaBolt size={24} color="#0f0f0f" />
          </div>
          <div>
            <div style={{
              fontWeight: 800,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              ENÉRGICA
            </div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              Soluções Elétricas
            </div>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          gap: '2rem',
          alignItems: 'center',
        }} className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-link"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={`tel:+55${PHONE_NUMBER.replace(/\D/g, '')}`}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFD700',
              textDecoration: 'none',
              fontWeight: 600,
            }}
            className="phone-desktop"
            data-gtm-click="phone"
            data-gtm-location="header"
          >
            <FaPhone size={16} />
            {PHONE_NUMBER}
          </a>

          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '0.75rem 1.25rem' }}
            data-gtm-click="whatsapp"
            data-gtm-location="header"
          >
            <FaWhatsapp size={20} />
            <span className="btn-text-desktop">WhatsApp</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '12px',
              color: '#FFD700',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(15, 15, 15, 0.98)',
              borderTop: '1px solid rgba(255, 215, 0, 0.2)',
            }}
          >
            <div style={{ padding: '1rem' }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <a
                  href={`tel:+55${PHONE_NUMBER.replace(/\D/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                  }}
                  data-gtm-click="phone"
                  data-gtm-location="header-mobile"
                >
                  <FaPhone size={18} />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover {
          color: #FFD700 !important;
          transform: translateY(-2px);
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .phone-desktop { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 480px) {
          .btn-text-desktop { display: none; }
        }
      `}</style>
    </motion.header>
  )
}
