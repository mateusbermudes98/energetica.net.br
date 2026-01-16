import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaCheckCircle, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'

const WHATSAPP_LINK = "https://wa.me/5527999410684?text=Olá! Preciso de um eletricista urgente!"

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipOwjlh007b7gokMClEjZM95otfchI97qoYvr9_B=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPZc-eG4DNv1-UJcoz1E2GTyoXLs-bRJlw1d0nO=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPF78p1QIfv2kIo2HlO1RyFSKjigVSdOcevyXZO=s1360-w1360-h1020-rw",
]

const badges = [
  { icon: FaClock, text: '24 Horas' },
  { icon: FaStar, text: '5.0 Google' },
  { icon: FaShieldAlt, text: '52+ Clientes' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 1rem 4rem',
      background: 'radial-gradient(ellipse at top, #1a1a1a 0%, #050505 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 165, 0, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Emergency Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(220, 38, 38, 0.2)',
              border: '1px solid rgba(220, 38, 38, 0.5)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fca5a5',
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              background: '#ef4444',
              borderRadius: '50%',
              animation: 'pulse 1.5s infinite',
            }} />
            Emergência Elétrica? Ligue Agora!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Eletricista de{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Emergência
            </span>
            <br />no Litoral do ES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              marginBottom: '2rem',
              maxWidth: '540px',
              lineHeight: 1.7,
            }}
          >
            Ficou sem luz? Curto-circuito? Cheiro de queimado?
            <strong style={{ color: '#fff' }}> Atendemos em até 30 minutos</strong> em Praia Grande, Jacaraípe, Nova Almeida, Aracruz e região.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 215, 0, 0.1)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  padding: '0.625rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                <badge.icon size={18} color="#FFD700" />
                {badge.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            className="hero-cta"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-large"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontSize: '1.125rem',
                padding: '1.25rem 2rem',
              }}
            >
              <FaWhatsapp size={24} />
              CHAMAR ELETRICISTA AGORA
            </motion.a>

            <motion.a
              href="tel:+5527999410684"
              className="btn btn-outline btn-large"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone size={20} />
              LIGAR: (27) 99941-0684
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative' }}
          className="hero-images"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ gridColumn: 'span 2' }}
            >
              <img
                src={images[0]}
                alt="Trabalho de eletricista profissional"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                }}
                loading="lazy"
              />
            </motion.div>
            {images.slice(1).map((img, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <img
                  src={img}
                  alt={`Serviço elétrico ${index + 2}`}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    border: '2px solid rgba(255, 215, 0, 0.2)',
                  }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '-25px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
              border: '2px solid rgba(255, 215, 0, 0.4)',
              padding: '1rem 1.5rem',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} color="#FFD700" />
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                <span style={{ color: '#FFD700' }}>5.0</span> no Google
              </div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
                52 avaliações verificadas
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @media (min-width: 992px) {
          .container {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-cta {
            flex-direction: row !important;
          }
        }
        @media (max-width: 991px) {
          .hero-images {
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
