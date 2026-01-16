import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa'
import './Hero.css'

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
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-bg-effect hero-bg-effect-1" />
      <div className="hero-bg-effect hero-bg-effect-2" />

      <div className="hero-container">
        {/* Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Emergency Tag */}
          <motion.div
            className="hero-emergency-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero-pulse-dot" />
            Emergência Elétrica? Ligue Agora!
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Eletricista de{' '}
            <span className="hero-title-highlight">Emergência</span>
            <br />no Litoral do ES
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ficou sem luz? Curto-circuito? Cheiro de queimado?
            <strong> Atendemos em até 30 minutos</strong> em Praia Grande, Jacaraípe, Nova Almeida, Aracruz e região.
          </motion.p>

          {/* Badges */}
          <motion.div
            className="hero-badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <badge.icon size={18} color="#FFD700" />
                {badge.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-large hero-btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-gtm-click="whatsapp"
              data-gtm-location="hero"
            >
              <FaWhatsapp size={24} />
              CHAMAR ELETRICISTA AGORA
            </motion.a>

            <motion.a
              href="tel:+5527999410684"
              className="btn btn-outline btn-large"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-gtm-click="phone"
              data-gtm-location="hero"
            >
              <FaPhone size={20} />
              LIGAR: (27) 99941-0684
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          className="hero-images-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hero-images-grid">
            <motion.div className="hero-image-main" whileHover={{ scale: 1.02 }}>
              <img
                src={images[0]}
                alt="Trabalho de eletricista profissional"
                loading="lazy"
              />
            </motion.div>
            <motion.div className="hero-image-secondary" whileHover={{ scale: 1.03 }}>
              <img
                src={images[1]}
                alt="Serviço elétrico 2"
                loading="lazy"
              />
            </motion.div>
            <motion.div className="hero-image-secondary" whileHover={{ scale: 1.03 }}>
              <img
                src={images[2]}
                alt="Serviço elétrico 3"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Rating Badge */}
          <motion.div
            className="hero-rating-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="hero-rating-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={18} color="#FFD700" />
              ))}
            </div>
            <div className="hero-rating-text">
              <div className="hero-rating-score">
                <span>5.0</span> no Google
              </div>
              <div className="hero-rating-count">52 avaliações verificadas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
