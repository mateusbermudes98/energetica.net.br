import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista urgente!"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    // Hide tooltip after 10 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 15000)

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltipTimer)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
    }}>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '80px',
              right: 0,
              background: '#fff',
              color: '#0f0f0f',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              minWidth: '220px',
            }}
          >
            <button
              onClick={() => setShowTooltip(false)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#6b7280',
                padding: '4px',
              }}
            >
              <FaTimes size={12} />
            </button>
            <p style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}>
              Precisa de ajuda?
            </p>
            <p style={{
              fontSize: '0.8rem',
              color: '#6b7280',
              marginBottom: '0.75rem',
            }}>
              Fale com um eletricista agora pelo WhatsApp!
            </p>
            <div style={{
              fontSize: '0.75rem',
              color: '#25D366',
              fontWeight: 600,
            }}>
              Resposta em até 30 min
            </div>
            {/* Arrow */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              right: '28px',
              width: '16px',
              height: '16px',
              background: '#fff',
              transform: 'rotate(45deg)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          borderRadius: '50%',
          boxShadow: '0 6px 30px rgba(37, 211, 102, 0.4)',
          position: 'relative',
        }}
        aria-label="Chamar no WhatsApp"
      >
        {/* Pulse Ring */}
        <span style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid #25D366',
          animation: 'pulse-ring 2s infinite',
        }} />

        <FaWhatsapp size={32} color="#fff" />
      </motion.a>

      {/* Online Indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '18px',
          height: '18px',
          background: '#22c55e',
          border: '3px solid #0f0f0f',
          borderRadius: '50%',
        }}
      />

      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
