import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBolt, FaClock } from 'react-icons/fa'

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 30, seconds: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          return { minutes: 30, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{
        marginTop: '80px',
        background: 'linear-gradient(90deg, #dc2626 0%, #b91c1c 50%, #dc2626 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
        padding: '0.875rem 1rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaBolt size={20} color="#FFD700" />
        </motion.div>

        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
          ATENDIMENTO 24 HORAS - Técnico disponível agora!
        </span>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '0.375rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 700,
        }}>
          <FaClock size={14} />
          <span>
            Resposta em {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }}
        >
          <FaBolt size={20} color="#FFD700" />
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.div>
  )
}
